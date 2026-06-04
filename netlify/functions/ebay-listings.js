/* global process, Buffer */

const EBAY_OAUTH_URL = 'https://api.sandbox.ebay.com/identity/v1/oauth2/token';
const EBAY_BROWSE_SEARCH_URL = 'https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search';
const EBAY_SCOPE = 'https://api.ebay.com/oauth/api_scope';
const CACHE_TTL_MS = 15 * 60 * 1000;

let cachedToken = null;
let cachedListings = null;

function redactValue(value) {
  if (!value) {
    return '';
  }

  return `${String(value).slice(0, 6)}...redacted`;
}

async function readResponseBody(response, label, sanitize = (payload) => payload) {
  const responseBody = await response.text();

  try {
    const payload = responseBody ? JSON.parse(responseBody) : {};
    console.log(`[ebay-listings] ${label} response body.`, sanitize(payload));
    return payload;
  } catch (error) {
    console.error(`[ebay-listings] ${label} returned non-JSON response body.`, {
      parseError: error.message,
      responseBody,
    });

    return {};
  }
}

function jsonResponse(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  };
}

function getConfig() {
  const { EBAY_CLIENT_ID, EBAY_CLIENT_SECRET, EBAY_SANDBOX_SELLER_USERNAME } = process.env;

  console.log('ALL EBAY ENV VARS');
  console.log(
    Object.keys(process.env)
      .filter(key => key.includes('EBAY'))
      .sort()
  );
  
  console.log({
    EBAY_CLIENT_ID: process.env.EBAY_CLIENT_ID,
    EBAY_CLIENT_SECRET: process.env.EBAY_CLIENT_SECRET
      ? '[present]'
      : '[missing]',
    EBAY_SANDBOX_SELLER_USERNAME:
      process.env.EBAY_SANDBOX_SELLER_USERNAME,
  });

  if (!EBAY_CLIENT_ID || !EBAY_CLIENT_SECRET || !EBAY_SANDBOX_SELLER_USERNAME) {
    throw new Error('Missing one or more required eBay environment variables.');
  }

  return {
    clientId: EBAY_CLIENT_ID,
    clientSecret: EBAY_CLIENT_SECRET,
    sellerUsername: EBAY_SANDBOX_SELLER_USERNAME,
  };
}

async function getOAuthToken(clientId, clientSecret) {
  console.log('[ebay-listings] getOAuthToken arguments.', {
    clientId: redactValue(clientId),
    clientSecret: clientSecret ? '[present]' : '[missing]',
  });

  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    console.log('[ebay-listings] Using cached OAuth token.');
    return cachedToken.accessToken;
  }

  console.log('[ebay-listings] Requesting new sandbox OAuth token.');

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const response = await fetch(EBAY_OAUTH_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      scope: EBAY_SCOPE,
    }),
  });

  const payload = await readResponseBody(response, 'OAuth', (body) => ({
    ...body,
    access_token: body.access_token ? redactValue(body.access_token) : undefined,
  }));

  if (payload.access_token) {
    console.log('[ebay-listings] OAuth token received.', {
      accessToken: redactValue(payload.access_token),
      expiresIn: payload.expires_in,
      tokenType: payload.token_type,
    });
  }

  if (!response.ok) {
    console.error('[ebay-listings] OAuth token request failed.', {
      status: response.status,
      error: payload.error,
      errorDescription: payload.error_description,
    });
    throw new Error(`eBay OAuth failed with status ${response.status}.`);
  }

  const expiresIn = Number(payload.expires_in || 0);
  cachedToken = {
    accessToken: payload.access_token,
    expiresAt: Date.now() + Math.max(expiresIn - 60, 0) * 1000,
  };

  return cachedToken.accessToken;
}

function mapEbayItem(item) {
  const price = item.currentBidPrice || item.price || {};

  return {
    id: item.itemId || '',
    title: item.title || '',
    price: price.value || '',
    currency: price.currency || '',
    image: item.image?.imageUrl || item.thumbnailImages?.[0]?.imageUrl || '',
    itemWebUrl: item.itemWebUrl || '',
  };
}

async function fetchSellerListings(accessToken, sellerUsername) {
  console.log('[ebay-listings] fetchSellerListings arguments.', {
    accessToken: accessToken ? redactValue(accessToken) : '[missing]',
    sellerUsername,
  });

  const searchUrl = new URL(EBAY_BROWSE_SEARCH_URL);

  searchUrl.searchParams.set('limit', '24');
  searchUrl.searchParams.set('filter', `sellers:{${sellerUsername}},buyingOptions:{AUCTION|FIXED_PRICE}`);

  console.log('[ebay-listings] Searching sandbox Browse API.', {
    sellerUsername,
    endpoint: searchUrl.toString().replace(sellerUsername, '[seller]'),
  });

  const response = await fetch(searchUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US',
    },
  });

  const payload = await readResponseBody(response, 'Browse API');

  if (!response.ok) {
    console.error('[ebay-listings] Browse API request failed.', {
      status: response.status,
      errors: payload.errors,
      message: payload.message,
    });
    throw new Error(`eBay Browse API failed with status ${response.status}.`);
  }

  const items = Array.isArray(payload.itemSummaries)
    ? payload.itemSummaries.map(mapEbayItem).filter((item) => item.id && item.title)
    : [];

  console.log('[ebay-listings] Browse API returned listings.', { count: items.length });

  return { items };
}

export async function handler() {
  try {
    if (cachedListings && cachedListings.expiresAt > Date.now()) {
      console.log('[ebay-listings] Returning cached listing response.');
      return jsonResponse(200, cachedListings.data, {
        'Cache-Control': 'public, max-age=900',
      });
    }

    const { clientId, clientSecret, sellerUsername } = getConfig();
    const accessToken = await getOAuthToken(clientId, clientSecret);
    const data = await fetchSellerListings(accessToken, sellerUsername);

    cachedListings = {
      data,
      expiresAt: Date.now() + CACHE_TTL_MS,
    };

    return jsonResponse(200, data, {
      'Cache-Control': 'public, max-age=900',
    });
  } catch (error) {
    console.error('[ebay-listings] Failed to load eBay listings.', error);

    return jsonResponse(500, {
      error: 'Failed to load eBay listings.',
      items: [],
    });
  }
}

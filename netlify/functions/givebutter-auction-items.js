const GIVEBUTTER_AUCTION_ITEMS_URL = 'https://givebutter.com/campaign-api/auctions/59041/items';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Content-Type': 'application/json',
};

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body),
  };
}

export async function handler(event = {}) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  try {
    const response = await fetch(GIVEBUTTER_AUCTION_ITEMS_URL, {
      headers: {
        Accept: 'application/json',
      },
    });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error('[givebutter-auction-items] Givebutter request failed.', {
        status: response.status,
        payload,
      });

      return jsonResponse(response.status, {
        error: 'Unable to load auction items at this time.',
        items: [],
      });
    }

    return jsonResponse(200, payload);
  } catch (error) {
    console.error('[givebutter-auction-items] Failed to fetch auction items.', error);

    return jsonResponse(500, {
      error: 'Unable to load auction items at this time.',
      items: [],
    });
  }
}

/* global process, Buffer */

import crypto from 'node:crypto';

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

function emptyResponse(statusCode = 200) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  };
}

/**
 * Build stable endpoint URL for eBay signature validation
 * IMPORTANT: must match exactly what eBay sees
 */
function getEndpointUrl(event) {
  const host =
    event.headers?.host ||
    event.headers?.Host;

  const path = '/.netlify/functions/ebay-account-deletion';

  return `https://${host}${path}`;
}

/**
 * SHA256 challenge response required by eBay
 */
function buildChallengeResponse(challengeCode, verificationToken, endpointUrl) {
  return crypto
    .createHash('sha256')
    .update(`${challengeCode}${verificationToken}${endpointUrl}`)
    .digest('hex');
}

/**
 * Safely parse POST payload
 */
async function readPayload(event) {
  if (!event.body) return {};

  try {
    const body = event.isBase64Encoded
      ? Buffer.from(event.body, 'base64').toString('utf8')
      : event.body;

    return JSON.parse(body);
  } catch (error) {
    console.error('[ebay-account-deletion] Unable to parse payload.', error);
    return {
      rawBody: event.body,
    };
  }
}

export async function handler(event = {}) {
  try {
    const method = event.httpMethod || 'GET';

    console.log('[ebay-account-deletion] Incoming request:', {
      method,
      path: event.path,
    });

    // Helpful debug for production issues
    console.log('[ebay-account-deletion] headers:', event.headers);

    /**
     * =========================
     * eBay Verification Challenge
     * =========================
     */
    if (method === 'GET') {
      const challengeCode = event.queryStringParameters?.challenge_code;
      const verificationToken = process.env.EBAY_MARKETPLACE_VERIFICATION_TOKEN;
      const endpointUrl = getEndpointUrl(event);

      console.log('[ebay-account-deletion] Challenge input:', {
        hasChallengeCode: Boolean(challengeCode),
        hasVerificationToken: Boolean(verificationToken),
        endpointUrl,
      });

      if (!challengeCode || !verificationToken || !endpointUrl) {
        console.error('[ebay-account-deletion] Missing required verification data.');

        // Return safe fallback so webhook does not crash
        return jsonResponse(200, {
          challengeResponse: 'invalid-missing-params',
        });
      }

      const challengeResponse = buildChallengeResponse(
        challengeCode,
        verificationToken,
        endpointUrl
      );

      return jsonResponse(200, {
        challengeResponse,
      });
    }

    /**
     * =========================
     * eBay Deletion Event
     * =========================
     */
    if (method === 'POST') {
      const payload = await readPayload(event);

      console.log('[ebay-account-deletion] Account deletion event received:', payload);

      // Always acknowledge immediately
      return emptyResponse(200);
    }

    /**
     * =========================
     * Unsupported methods
     * =========================
     */
    console.log('[ebay-account-deletion] Unsupported method ignored:', method);
    return emptyResponse(200);
  } catch (error) {
    console.error('[ebay-account-deletion] Handler error (ignored safely):', error);

    // Never fail webhook
    return emptyResponse(200);
  }
}
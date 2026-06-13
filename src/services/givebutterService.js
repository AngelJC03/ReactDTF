const GIVEBUTTER_AUCTION_ITEMS_FUNCTION = '/.netlify/functions/givebutter-auction-items';

function stripHtml(value) {
  if (!value) {
    return '';
  }

  return String(value).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function getFirstArray(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  const directKeys = ['items', 'data', 'auctionItems', 'auction_items', 'results'];
  const directMatch = directKeys.find((key) => Array.isArray(payload?.[key]));

  if (directMatch) {
    return payload[directMatch];
  }

  const nestedMatch = directKeys.find((key) => Array.isArray(payload?.data?.[key]));

  return nestedMatch ? payload.data[nestedMatch] : [];
}

function getFirstValue(...values) {
  return values.find((value) => value !== undefined && value !== null && value !== '') || '';
}

function getImageUrl(item) {
  const firstImage = Array.isArray(item.images) ? item.images[0] : null;
  const firstMedia = Array.isArray(item.media) ? item.media[0] : null;
  const firstPicture = Array.isArray(item.pictures) ? item.pictures[0] : null;

  return getFirstValue(
    item.image,
    item.image_url,
    item.imageUrl,
    item.thumbnail,
    item.thumbnail_url,
    item.photo,
    item.photo_url,
    firstPicture?.url,
    firstPicture?.src,
    firstImage?.url,
    firstImage?.src,
    firstImage,
    firstMedia?.url,
    firstMedia?.src,
  );
}

function findGivebutterUrl(value) {
  if (!value || typeof value !== 'object') {
    return '';
  }

  const urlKeys = ['url', 'public_url', 'publicUrl', 'item_url', 'itemUrl', 'permalink', 'href'];

  for (const key of urlKeys) {
    if (typeof value[key] === 'string' && value[key].startsWith('http')) {
      return value[key];
    }
  }

  for (const nestedValue of Object.values(value)) {
    if (nestedValue && typeof nestedValue === 'object') {
      const url = findGivebutterUrl(nestedValue);

      if (url) {
        return url;
      }
    }
  }

  return '';
}

function normalizePrice(value) {
  if (value && typeof value === 'object') {
    return getFirstValue(value.value, value.amount, value.formatted, value.display);
  }

  return getFirstValue(value);
}

function normalizeAuctionItem(item, index) {
  const id = getFirstValue(item.id, item.item_id, item.itemId, item.uuid, item.slug, `givebutter-item-${index}`);

  console.log('RAW ITEM', item);
  console.log('IMAGE URL', getImageUrl(item));

  return {
    id: String(id),
    title: getFirstValue(item.title, item.name, item.item_name, item.itemName, 'Untitled auction item'),
    description: stripHtml(getFirstValue(item.description, item.short_description, item.shortDescription, item.details)),
    currentBid: normalizePrice(getFirstValue(
      item.current_bid,
      item.currentBid,
      item.highest_bid,
      item.highestBid,
      item.bid?.amount,
      item.bid?.value,
    )),
    buyNowPrice: normalizePrice(getFirstValue(
      item.buy_now_price,
      item.buyNowPrice,
      item.buy_now?.price,
      item.buyNow?.price,
      item.price,
    )),
    currency: getFirstValue(item.currency, item.currency_code, item.currencyCode, 'USD'),
    image: getImageUrl(item),
    itemWebUrl: findGivebutterUrl(item),
    endDate: getFirstValue(item.ends_at, item.endsAt, item.end_date, item.endDate, item.auction_end_date),
    category: getFirstValue(item.category?.name, item.category_name, item.categoryName, item.category),
  };
}

export function normalizeAuctionItems(payload) {
  return getFirstArray(payload).map(normalizeAuctionItem);
}

export async function getAuctionItems({ signal } = {}) {
  const response = await fetch(GIVEBUTTER_AUCTION_ITEMS_FUNCTION, { signal });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error || 'Unable to load auction items at this time.');
  }

  return normalizeAuctionItems(payload);
}

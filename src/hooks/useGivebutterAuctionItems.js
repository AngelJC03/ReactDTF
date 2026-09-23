import { useCallback, useEffect, useState } from 'react';
import { getAuctionItems } from '../services/givebutterService.js';

function useGivebutterAuctionItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const retry = useCallback(() => {
    setReloadKey((currentKey) => currentKey + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadItems() {
      try {
        setLoading(true);
        setError(null);

        const auctionItems = await getAuctionItems({ signal: controller.signal });
        console.log('[useGivebutterAuctionItems] Loaded normalized auction items.', {
          count: auctionItems.length,
          bookItems: auctionItems
            .filter((item) => item.categoryId === 89848)
            .map((item) => ({
              id: item.id,
              title: item.title,
              categoryId: item.categoryId,
              imagesCount: item.images?.length || 0,
              images: item.images,
            })),
        });
        setItems(auctionItems);
      } catch (caughtError) {
        if (caughtError.name === 'AbortError') {
          return;
        }

        setItems([]);
        setError(caughtError);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadItems();

    return () => {
      controller.abort();
    };
  }, [reloadKey]);

  return { items, loading, error, retry };
}

export default useGivebutterAuctionItems;

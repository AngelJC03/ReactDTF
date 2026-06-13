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

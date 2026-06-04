import { useEffect, useState } from 'react';

function useEbayListings() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadListings() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/.netlify/functions/ebay-listings', {
          signal: controller.signal,
        });
        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.error || 'Unable to load eBay listings.');
        }

        setItems(Array.isArray(data.items) ? data.items : []);
      } catch (caughtError) {
        if (caughtError.name === 'AbortError') {
          return;
        }

        setError(caughtError);
        setItems([]);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadListings();

    return () => {
      controller.abort();
    };
  }, []);

  return { items, loading, error };
}

export default useEbayListings;

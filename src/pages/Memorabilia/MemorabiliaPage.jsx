import { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import BidModal from './BidModal.jsx';
import MemorabiliaCard from './MemorabiliaCard.jsx';
import { memorabiliaItems } from './memorabiliaData.js';
import './MemorabiliaPage.css';

function sendBidNotification({ item, bidAmount }) {
  const emailPreview = `Someone placed a bid of $${bidAmount} on ${item.title}.`;

  // Future email integration points:
  // - EmailJS: send this payload directly from the client for a lightweight setup.
  // - Nodemailer: post to a Node/Express or serverless endpoint that sends the email.
  // - Firebase Functions: trigger a callable HTTPS function with bid details.
  // - SendGrid or Resend: post to a backend API endpoint that owns the API key.
  // Keep real credentials on the server; never expose them in this React bundle.
  console.info('[Memorabilia bid notification placeholder]', emailPreview);

  return Promise.resolve({ ok: true, emailPreview });
}

function MemorabiliaPage() {
  const [selectedBidItem, setSelectedBidItem] = useState(null);
  const [checkoutItem, setCheckoutItem] = useState(null);
  const [notice, setNotice] = useState('');
  const checkoutDialogRef = useRef(null);
  const checkoutCloseRef = useRef(null);

  useEffect(() => {
    if (!checkoutItem) return;

    const previousActiveElement = document.activeElement;
    window.setTimeout(() => checkoutCloseRef.current?.focus(), 0);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setCheckoutItem(null);
      }

      if (event.key !== 'Tab' || !checkoutDialogRef.current) return;

      const focusableElements = checkoutDialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus?.();
    };
  }, [checkoutItem]);

  const handleBidSubmit = async (bidDetails) => {
    const result = await sendBidNotification(bidDetails);

    setNotice(result.emailPreview);
    setSelectedBidItem(null);
  };

  const handleBuyNow = (item) => {
    // Future checkout integration points:
    // - Stripe Checkout: create a checkout session from a backend endpoint.
    // - eBay listings: redirect users to the live eBay item URL.
    // - Givebutter auctions: link to, embed, or replace local bidding with a campaign auction.
    setCheckoutItem(item);
  };

  return (
    <>
      <Navbar />
      <main className="memorabilia-page">
        <section className="memorabilia-hero" aria-labelledby="memorabilia-title">
          <div className="memorabilia-hero-inner">
            <p className="memorabilia-eyebrow">Fundraising Auction</p>
            <h1 id="memorabilia-title">Memorabilia Auction</h1>
            <p>
              Support our mission by bidding on exclusive memorabilia and collectible items.
            </p>
          </div>
        </section>

        <section className="memorabilia-content" aria-labelledby="memorabilia-grid-title">
          <div className="memorabilia-content-inner">
            <div className="memorabilia-section-heading">
              <h2 id="memorabilia-grid-title">Featured Items</h2>
              <p>
                Browse current auction items, place a bid, or choose Buy Now to reserve an item instantly.
              </p>
            </div>

            {notice && (
              <div className="memorabilia-notice" role="status">
                {notice}
              </div>
            )}

            <div className="memorabilia-grid">
              {memorabiliaItems.map((item) => (
                <MemorabiliaCard
                  key={item.id}
                  item={item}
                  onPlaceBid={setSelectedBidItem}
                  onBuyNow={handleBuyNow}
                />
              ))}
            </div>

            <aside className="memorabilia-integration-note" aria-labelledby="memorabilia-future-title">
              <h2 id="memorabilia-future-title">Future Auction Support</h2>
              <p>
                This page is ready for a backend auction flow. Future versions can redirect bidders to eBay
                listings, sync inventory from eBay APIs, embed Givebutter auction campaigns, or replace local
                bidding with Givebutter-hosted fundraising auctions.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <BidModal
        item={selectedBidItem}
        isOpen={Boolean(selectedBidItem)}
        onClose={() => setSelectedBidItem(null)}
        onSubmitBid={handleBidSubmit}
      />

      {checkoutItem && (
        <div className="memorabilia-modal-backdrop" onMouseDown={() => setCheckoutItem(null)}>
          <section
            className="memorabilia-modal memorabilia-checkout-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-modal-title"
            ref={checkoutDialogRef}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="memorabilia-modal-header">
              <div>
                <p className="memorabilia-modal-eyebrow">Buy Now</p>
                <h2 id="checkout-modal-title">{checkoutItem.title}</h2>
              </div>
              <button
                type="button"
                className="memorabilia-modal-close"
                onClick={() => setCheckoutItem(null)}
                aria-label="Close checkout placeholder"
                ref={checkoutCloseRef}
              >
                x
              </button>
            </div>
            <p className="memorabilia-modal-copy">
              Checkout is not connected yet. This action will later connect to Stripe Checkout, an eBay listing,
              or a Givebutter fundraising auction.
            </p>
            <button
              type="button"
              className="memorabilia-button memorabilia-button-primary"
              onClick={() => setCheckoutItem(null)}
            >
              Got It
            </button>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
}

export default MemorabiliaPage;

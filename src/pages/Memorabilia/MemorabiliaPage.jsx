import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import useEbayListings from '../../hooks/useEbayListings.js';
import { memorabiliaItems, memorabiliaPlaceholderImage } from './memorabiliaData.js';
import './MemorabiliaPage.css';

const skeletonCards = Array.from({ length: 4 }, (_, index) => `ebay-loading-${index}`);

function formatListingPrice(item) {
  const numericPrice = Number(item.price);

  if (!item.price || Number.isNaN(numericPrice)) {
    return 'Price unavailable';
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: item.currency || 'USD',
  }).format(numericPrice);
}

function EbayListingCard({ item }) {
  return (
    <article className="memorabilia-preview-card" aria-labelledby={`${item.id}-title`}>
      <div className="memorabilia-card-image-wrap">
        <img
          src={item.image || memorabiliaPlaceholderImage}
          alt=""
          className="memorabilia-card-image"
          loading="lazy"
        />
      </div>
      <div className="memorabilia-preview-card-body">
        <p className="memorabilia-card-time">eBay Sandbox Listing</p>
        <h3 id={`${item.id}-title`}>{item.title}</h3>
        <p>{formatListingPrice(item)}</p>
        {item.itemWebUrl && (
          <div className="memorabilia-card-actions">
            <a
              className="memorabilia-button memorabilia-button-primary"
              href={item.itemWebUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Listing
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

function EbayListingSkeleton({ id }) {
  return (
    <article className="memorabilia-preview-card memorabilia-preview-card-skeleton" aria-hidden="true" key={id}>
      <div className="memorabilia-card-image-wrap">
        <span className="memorabilia-skeleton-block memorabilia-skeleton-image" />
      </div>
      <div className="memorabilia-preview-card-body">
        <span className="memorabilia-skeleton-block memorabilia-skeleton-eyebrow" />
        <span className="memorabilia-skeleton-block memorabilia-skeleton-title" />
        <span className="memorabilia-skeleton-block memorabilia-skeleton-copy" />
      </div>
    </article>
  );
}

function MemorabiliaPage() {
  const { items: ebayItems, loading: ebayLoading, error: ebayError } = useEbayListings();

  return (
    <>
      <Navbar />
      <main className="memorabilia-page">
        <section className="memorabilia-hero memorabilia-coming-soon-hero" aria-labelledby="memorabilia-title">
          <div className="memorabilia-hero-inner">
            <p className="memorabilia-eyebrow">Coming Soon</p>
            <h1 id="memorabilia-title">Memorabilia Auction</h1>
            <p>
              We are building a new memorabilia fundraising page featuring exclusive collectibles,
              special auction items, and meaningful ways to support our mission.
            </p>
          </div>
        </section>

        <section className="memorabilia-content" aria-labelledby="memorabilia-preview-title">
          <div className="memorabilia-content-inner">
            <div className="memorabilia-coming-soon-panel">
              <div>
                <p className="memorabilia-panel-label">Preview</p>
                <h2 id="memorabilia-preview-title">A new supporter experience is on the way.</h2>
              </div>
              <p>
                Soon, visitors will be able to browse available memorabilia, view item details,
                and support the Davis-Tennon Foundation through fundraising auction opportunities.
              </p>
            </div>

            <div className="memorabilia-section-heading">
              <h2>What You May See</h2>
              <p>
                These sample items show the type of memorabilia and collectible pieces that may be featured.
              </p>
            </div>

            {ebayError && (
              <p className="memorabilia-notice" role="status">
                eBay listings are temporarily unavailable. Please check back soon.
              </p>
            )}

            <div className="memorabilia-preview-grid">
              {ebayLoading && skeletonCards.map((id) => (
                <EbayListingSkeleton id={id} key={id} />
              ))}

              {!ebayLoading && ebayItems.map((item) => (
                <EbayListingCard item={item} key={item.id} />
              ))}

              {memorabiliaItems.map((item) => (
                <article className="memorabilia-preview-card" key={item.id}>
                  <div className="memorabilia-card-image-wrap">
                    <img src={item.image} alt="" className="memorabilia-card-image" loading="lazy" />
                  </div>
                  <div className="memorabilia-preview-card-body">
                    <p className="memorabilia-card-time">Coming Soon</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="memorabilia-integration-note" aria-labelledby="memorabilia-future-title">
              <h2 id="memorabilia-future-title">Future Auction Features</h2>
              <p>
                The full version can support bidding, Buy Now checkout, email notifications, Stripe,
                eBay listings, Givebutter fundraising auctions, and backend-managed inventory.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MemorabiliaPage;

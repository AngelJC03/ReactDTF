import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import useGivebutterAuctionItems from '../../hooks/useGivebutterAuctionItems.js';
import placeholderImage from '../../assets/images/home-page-photos/placeHolder.png';
import './MemorabiliaPage.css';

const skeletonCards = Array.from({ length: 4 }, (_, index) => `givebutter-loading-${index}`);
const BOOK_CATEGORY_ID = 89848;

function formatPrice(value, currency = 'USD') {
  if (value === undefined || value === null || value === '') {
    return '';
  }

  const numericPrice = Number(value);

  if (Number.isNaN(numericPrice)) {
    return String(value);
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'USD',
  }).format(numericPrice);
}

function formatDate(value) {
  if (!value) {
    return '';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function trimDescription(description, maxLength = 140) {
  if (!description || description.length <= maxLength) {
    return description || '';
  }

  return `${description.slice(0, maxLength).trim()}...`;
}

function isBookItem(item) {
  return Number(item?.categoryId) === BOOK_CATEGORY_ID;
}

function getAuctionItemImages(item) {
  const normalizedImages = Array.isArray(item?.images) ? item.images.filter(Boolean) : [];
  const fallbackImages = item?.image ? [item.image] : [];
  const sourceImages = normalizedImages.length > 0 ? normalizedImages : fallbackImages;
  const displayImages = isBookItem(item) ? sourceImages.slice(0, 2) : sourceImages.slice(0, 1);

  return displayImages.length > 0 ? displayImages : [placeholderImage];
}

function AuctionItemCard({ item, onSelect }) {
  const currentBid = formatPrice(item.currentBid, item.currency);
  const buyNowPrice = formatPrice(item.buyNowPrice, item.currency);
  const endDate = formatDate(item.endDate);
  const displayImages = getAuctionItemImages(item);
  const hasMultipleImages = displayImages.length > 1;

  return (
    <article className="memorabilia-preview-card" aria-labelledby={`${item.id}-title`}>
      <div className={`memorabilia-card-image-wrap ${hasMultipleImages ? 'memorabilia-card-image-wrap-multiple' : ''}`}>
        {displayImages.map((image, index) => (
          <img
            src={image}
            alt=""
            className="memorabilia-card-image"
            loading="lazy"
            key={`${item.id}-card-image-${index}`}
          />
        ))}
      </div>
      <div className="memorabilia-preview-card-body">
        <p className="memorabilia-card-time">{item.category || 'Givebutter Auction'}</p>
        <h3 id={`${item.id}-title`}>{item.title}</h3>
        {item.description && <p className="memorabilia-card-description-preview">{trimDescription(item.description)}</p>}
        <div className="memorabilia-card-meta">
          {currentBid && (
            <p className="memorabilia-current-bid">
              <span>Current Bid</span>
              <strong>{currentBid}</strong>
            </p>
          )}
          {endDate && <p className="memorabilia-card-detail">Ends {endDate}</p>}
        </div>
        {buyNowPrice && (
          <div className="memorabilia-buy-now-badge" aria-label={`Buy now price ${buyNowPrice}`}>
            <span>Buy Now</span>
            <strong>{buyNowPrice}</strong>
          </div>
        )}
        <div className="memorabilia-card-actions">
          <button
            type="button"
            className="memorabilia-button memorabilia-button-primary"
            onClick={() => {
              console.log('[MemorabiliaPage] Selected auction item.', {
                id: item.id,
                title: item.title,
                categoryId: item.categoryId,
                imagesCount: item.images?.length || 0,
                displayImagesCount: displayImages.length,
                images: item.images,
              });
              onSelect(item);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

function AuctionItemSkeleton({ id }) {
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

function AuctionItemModal({ item, onClose }) {
  useEffect(() => {
    if (!item) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  useEffect(() => {
    if (!item) {
      return;
    }

    const displayImages = getAuctionItemImages(item);

    console.log('[MemorabiliaPage] Modal received auction item.', {
      id: item.id,
      title: item.title,
      categoryId: item.categoryId,
      rawImagesCount: item.images?.length || 0,
      displayImagesCount: displayImages.length,
      displayImages,
    });
  }, [item]);

  if (!item) {
    return null;
  }

  const currentBid = formatPrice(item.currentBid, item.currency);
  const buyNowPrice = formatPrice(item.buyNowPrice, item.currency);
  const endDate = formatDate(item.endDate);
  const displayImages = getAuctionItemImages(item);

  return (
    <div className="memorabilia-modal-backdrop" onMouseDown={onClose}>
      <section
        className="memorabilia-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auction-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="memorabilia-modal-header">
          <div>
            <p className="memorabilia-modal-eyebrow">{item.category || 'Givebutter Auction'}</p>
            <h2 id="auction-modal-title">{item.title}</h2>
          </div>
          <button type="button" className="memorabilia-modal-close" onClick={onClose} aria-label="Close item details">
            x
          </button>
        </div>

        <div className="memorabilia-modal-image-gallery">
          {displayImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="memorabilia-modal-image-wrap"
            >
              <img
                src={image || placeholderImage}
                alt={`${item.title} image ${index + 1}`}
                className="memorabilia-card-image"
              />
            </div>
          ))}
        </div>

        {item.description && <p className="memorabilia-modal-copy">{item.description}</p>}

        {(currentBid || buyNowPrice || endDate) && (
          <dl className="memorabilia-card-prices memorabilia-modal-prices">
            {currentBid && (
              <div>
                <dt>Current Bid</dt>
                <dd>{currentBid}</dd>
              </div>
            )}
            {buyNowPrice && (
              <div>
                <dt>Buy Now</dt>
                <dd>{buyNowPrice}</dd>
              </div>
            )}
            {endDate && (
              <div>
                <dt>Ends</dt>
                <dd>{endDate}</dd>
              </div>
            )}
          </dl>
        )}

        <div className="memorabilia-modal-actions">
          <button type="button" className="memorabilia-button memorabilia-button-light" onClick={onClose}>
            Close
          </button>
          {item.itemWebUrl && (
            <a
              className="memorabilia-button memorabilia-button-primary"
              href={item.itemWebUrl}
              target="_blank"
              rel="noreferrer"
            >
              Bid on Givebutter
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

function MemorabiliaPage() {
  const { items, loading, error, retry } = useGivebutterAuctionItems();
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Navbar />
      <main className="memorabilia-page">
        <section className="memorabilia-hero memorabilia-coming-soon-hero" aria-labelledby="memorabilia-title">
          <div className="memorabilia-hero-inner">
            <p className="memorabilia-eyebrow">Auction</p>
            <h1 id="memorabilia-title">Memorabilia Auction</h1>
            <p>
              View available memorabilia, review item details, and support the Davis-Tennon
              Foundation through Givebutter auction opportunities.
            </p>
          </div>
        </section>

        <section className="memorabilia-content" aria-labelledby="memorabilia-preview-title">
          <div className="memorabilia-content-inner">
            <div className="memorabilia-coming-soon-panel">
              <div>
                <p className="memorabilia-panel-label">Givebutter Auction</p>
                <h2 id="memorabilia-preview-title">Featured memorabilia and collectibles</h2>
              </div>
              <p>
                Auction items are loaded from Givebutter so supporters can review details here
                and place bids directly through the live auction.
              </p>
            </div>

            <div className="memorabilia-section-heading">
              <h2>Available Items</h2>
              <p>
                Select an item to see details and continue to Givebutter when you are ready to bid.
              </p>
            </div>

            {error && (
              <div className="memorabilia-notice" role="status">
                <p>Unable to load auction items at this time. Please try again later.</p>
                <button type="button" className="memorabilia-button memorabilia-button-primary" onClick={retry}>
                  Retry
                </button>
              </div>
            )}

            {!loading && !error && items.length === 0 && (
              <p className="memorabilia-notice" role="status">
                No auction items are currently available.
              </p>
            )}

            <div className="memorabilia-preview-grid">
              {loading && skeletonCards.map((id) => (
                <AuctionItemSkeleton id={id} key={id} />
              ))}

              {!loading && !error && items.map((item) => (
                <AuctionItemCard item={item} key={item.id} onSelect={setSelectedItem} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <AuctionItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      <Footer />
    </>
  );
}

export default MemorabiliaPage;

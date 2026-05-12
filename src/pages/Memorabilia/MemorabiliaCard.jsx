function MemorabiliaCard({ item, onPlaceBid, onBuyNow }) {
  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return (
    <article className="memorabilia-card" aria-labelledby={`${item.id}-title`}>
      <div className="memorabilia-card-image-wrap">
        <img src={item.image} alt="" className="memorabilia-card-image" loading="lazy" />
      </div>

      <div className="memorabilia-card-body">
        <p className="memorabilia-card-time">{item.remainingTime}</p>
        <h2 id={`${item.id}-title`} className="memorabilia-card-title">{item.title}</h2>
        <p className="memorabilia-card-description">{item.description}</p>

        <dl className="memorabilia-card-prices">
          <div>
            <dt>Current Bid</dt>
            <dd>{currency.format(item.currentBid)}</dd>
          </div>
          <div>
            <dt>Buy Now</dt>
            <dd>{currency.format(item.buyNowPrice)}</dd>
          </div>
        </dl>

        <div className="memorabilia-card-actions">
          <button type="button" className="memorabilia-button memorabilia-button-primary" onClick={() => onPlaceBid(item)}>
            Place Bid
          </button>
          <button type="button" className="memorabilia-button memorabilia-button-secondary" onClick={() => onBuyNow(item)}>
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default MemorabiliaCard;

import './FeatureCard.css';

function FeatureCard({ icon: Icon, title, children, className = '' }) {
  return (
    <article className={`feature-card ${className}`.trim()}>
      {Icon && (
        <div className="feature-card-icon" aria-hidden="true">
          <Icon size={24} strokeWidth={2.2} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default FeatureCard;

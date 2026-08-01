import './GrantNotice.css';

function GrantNotice({ className = '' }) {
  return (
    <section
      className={`grant-notice ${className}`.trim()}
      aria-labelledby="grant-notice-title"
    >
      <div className="grant-notice-content">
        <h2 id="grant-notice-title">Grant Applications Temporarily Suspended</h2>
        <p>
          Thank you for your interest in applying for funding through the Davis-Tennon Foundation.
        </p>
        <p>
          Grant applications are currently suspended as we complete our 2026 funding commitments and
          prepare for the next funding cycle.
        </p>
        <p>
          Applications are expected to reopen in January 2027.
        </p>
        <p>
          Please check back for updates and future funding opportunities.
        </p>
      </div>
    </section>
  );
}

export default GrantNotice;

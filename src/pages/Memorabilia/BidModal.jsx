import { useEffect, useRef, useState } from 'react';

const initialForm = {
  fullName: '',
  email: '',
  bidAmount: '',
  message: '',
};

function BidModal({ item, isOpen, onClose, onSubmitBid }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const dialogRef = useRef(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    setFormData(initialForm);
    setErrors({});

    const previousActiveElement = document.activeElement;
    window.setTimeout(() => nameInputRef.current?.focus(), 0);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll(
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
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const validateForm = () => {
    const nextErrors = {};
    const bidAmount = Number(formData.bidAmount);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!emailPattern.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!formData.bidAmount) {
      nextErrors.bidAmount = 'Bid amount is required.';
    } else if (!Number.isFinite(bidAmount) || bidAmount <= item.currentBid) {
      nextErrors.bidAmount = `Bid must exceed $${item.currentBid}.`;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    onSubmitBid({
      item,
      bidderName: formData.fullName.trim(),
      bidderEmail: formData.email.trim(),
      bidAmount: Number(formData.bidAmount),
      message: formData.message.trim(),
    });
  };

  return (
    <div className="memorabilia-modal-backdrop" onMouseDown={onClose}>
      <section
        className="memorabilia-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bid-modal-title"
        ref={dialogRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="memorabilia-modal-header">
          <div>
            <p className="memorabilia-modal-eyebrow">Place a Bid</p>
            <h2 id="bid-modal-title">{item.title}</h2>
          </div>
          <button type="button" className="memorabilia-modal-close" onClick={onClose} aria-label="Close bid form">
            x
          </button>
        </div>

        <p className="memorabilia-modal-copy">
          Current bid is <strong>${item.currentBid}</strong>. Your bid must be higher to submit.
        </p>

        <form className="memorabilia-bid-form" onSubmit={handleSubmit} noValidate>
          <div className="memorabilia-form-field">
            <label htmlFor="bidder-full-name">Full Name</label>
            <input
              id="bidder-full-name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              ref={nameInputRef}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'full-name-error' : undefined}
              required
            />
            {errors.fullName && <p id="full-name-error" className="memorabilia-form-error">{errors.fullName}</p>}
          </div>

          <div className="memorabilia-form-field">
            <label htmlFor="bidder-email">Email</label>
            <input
              id="bidder-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && <p id="email-error" className="memorabilia-form-error">{errors.email}</p>}
          </div>

          <div className="memorabilia-form-field">
            <label htmlFor="bid-amount">Bid Amount</label>
            <input
              id="bid-amount"
              name="bidAmount"
              type="number"
              min={item.currentBid + 1}
              step="1"
              value={formData.bidAmount}
              onChange={handleChange}
              aria-invalid={Boolean(errors.bidAmount)}
              aria-describedby={errors.bidAmount ? 'bid-amount-error' : undefined}
              required
            />
            {errors.bidAmount && <p id="bid-amount-error" className="memorabilia-form-error">{errors.bidAmount}</p>}
          </div>

          <div className="memorabilia-form-field">
            <label htmlFor="bid-message">Optional Message</label>
            <textarea
              id="bid-message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="memorabilia-modal-actions">
            <button type="button" className="memorabilia-button memorabilia-button-light" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="memorabilia-button memorabilia-button-primary">
              Submit Bid
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default BidModal;

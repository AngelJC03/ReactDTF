import React, { useState, useRef } from 'react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage('');
    setSuccessMessage('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const formData = new FormData(formRef.current);

    fetch(formRef.current.action, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        setSuccessMessage('Thank you for subscribing!');
        setEmail('');
        setComment('');
        formRef.current.reset();
      })
      .catch(() => {
        setErrorMessage('There was an error. Please try again later.');
      });
  };

  return (
    <div className="popup-newsletter">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="https://davis-tennonfoundation.us20.list-manage.com/subscribe/post?u=ee1896e60a2c02f5c56dffd15&amp;id=e40c54c790&amp;f_id=002cc7f1f0"
        method="post"
        className="popup-form"
        noValidate
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} // 👈 gap here
      >
        <label style={{ fontSize: '14px', color: '#555' }}>
          Required <span style={{ color: 'red' }}>*</span>
        </label>
        <div className="popup-input-wrapper">
          <label className="popup-label"></label>
          <input
            type="email"
            name="EMAIL"
            className={`popup-input ${errorMessage ? 'popup-input-error' : ''}`}
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="required-star">*</span>
        </div>

        <div className="popup-input-wrapper">
          <input
            type="text"
            name="MMERGE5" // 👈 Mailchimp merge field for comments
            className="popup-input"
            placeholder="Leave a comment (optional)"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <span className="required-star"> </span>
        </div>

        <div className="popup-input-wrapper">
          <input
            type="submit"
            name="subscribe"
            className="popup-submit-btn"
            value="Subscribe"
          />
        </div>

        <div className="popup-messages">
          {errorMessage && <div className="popup-error">{errorMessage}</div>}
          {successMessage && <div className="popup-success">{successMessage}</div>}
        </div>
      </form>
    </div>
  );
}

export default NewsletterForm;

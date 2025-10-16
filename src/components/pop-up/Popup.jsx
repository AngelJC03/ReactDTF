import React, { useState, useEffect } from 'react';
import NewsletterForm from './Newsletter';
import './Popup.css';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupSeen = sessionStorage.getItem('popupSeen');
    if (popupSeen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('popupSeen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="popup-background">
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h2>Thank You for Visiting our Page!</h2>
        <p>Sign up for our newsletter to stay updated and leave your thoughts below!</p>

        {/* 👇 Pass handleClose to the NewsletterForm */}
        <NewsletterForm onClose={handleClose} />
      </div>
    </div>
  );
}

export default Popup;

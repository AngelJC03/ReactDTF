import React, { useState, useEffect } from 'react';
import NewsletterForm from './Newsletter';
import './Popup.css';

function Popup() {
  const [isOpen, setIsOpen] = useState(false); // start closed

  useEffect(() => {
    // Check if popup was already seen
    const popupSeen = sessionStorage.getItem('popupSeen');
    if (popupSeen) return; // do not show popup

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // show after 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('popupSeen', 'true'); // store in sessionStorage
  };

  if (!isOpen) return null;

  return (
    <div className="popup-background">
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>×</button>
        <h2>Thank You for Visiting our Page!</h2>
        <p>Sign up for our newsletter to stay updated and leave your thoughts below!</p>
        <NewsletterForm />
      </div>
    </div>
  );
}

export default Popup;

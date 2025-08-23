import React from 'react';
import Navbar from '../../../components/navbar/Navbar.jsx';
import Footer from '../../../components/footer/Footer.jsx';
import FundingRecipientsContent from './FundingRecipientsContent.jsx';

function FundingRecipients() {

  return (
    <>
      <Navbar />
      <FundingRecipientsContent />
      <Footer />
    </>
  );
}

export default FundingRecipients;
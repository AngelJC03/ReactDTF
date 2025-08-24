import React from 'react';
import Navbar from '../../../components/navbar/Navbar.jsx';
import Footer from '../../../components/footer/Footer.jsx';
import InTheNewsContent from './InTheNewsContent.jsx';

function InTheNews() {

  return (
    <>
      <Navbar />
      <InTheNewsContent />
      <Footer />
    </>
  );
}

export default InTheNews;
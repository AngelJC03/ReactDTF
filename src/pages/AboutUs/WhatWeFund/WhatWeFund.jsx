import React from 'react';
import Navbar from '../../../components/navbar/Navbar.jsx';
import Footer from '../../../components/footer/Footer.jsx';
import WhatWeFundContent from './WhatWeFundContent.jsx';
import FadeIn from '../../../components/fadeinsection/FadeIn.jsx';

function WhatWeFund() {

  return (
    <>
      <Navbar />
      <WhatWeFundContent />
      <Footer />
    </>
  );
}

export default WhatWeFund;

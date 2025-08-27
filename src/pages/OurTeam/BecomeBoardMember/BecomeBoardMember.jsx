import React from 'react';
import Navbar from '../../../components/navbar/Navbar.jsx';
import Footer from '../../../components/footer/Footer.jsx';
import BecomeBoardMemberContent from './BecomeBoardMemberContent.jsx';

function BecomeBoardMember() {

  return (
    <>
      <Navbar />
      <BecomeBoardMemberContent />
      <Footer />
    </>
  );
}

export default BecomeBoardMember;
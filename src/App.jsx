import './App.css';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import Home from './pages/Home/Home';
import WhatWeFund from './pages/AboutUs/WhatWeFund/WhatWeFund.jsx';
import FundingOpportunities from './pages/AboutUs/FundingOpportunities/FundingOpportunities.jsx';
import WhatWeDontFund from './pages/AboutUs/WhatWeDontFund/WhatWeDontFund.jsx';
import FundingRecipients from './pages/AboutUs/FundingRecipients/FundingRecipients.jsx';
import InTheNews from './pages/AboutUs/InTheNews/InTheNews.jsx';
import AboutViolaAndJulius from './pages/OurTeam/AboutViolaAndJulius/AboutViolaAndJulius.jsx';
import BecomeBoardMember from './pages/OurTeam/BecomeBoardMember/BecomeBoardMember.jsx';
import PartnersAndResources from './pages/PartnersAndResources/PartnersAndResources.jsx';
import FoundationStaff from './pages/OurTeam/FoundationStaff/FoundationStaff.jsx';
import Popup from './components/pop-up/popup.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/WhatWeFund" element={<WhatWeFund />} />
          <Route path="/FundingOpportunities" element={<FundingOpportunities />} />
          <Route path="/WhatWeDontFund" element={<WhatWeDontFund />} />
          <Route path="/FundingRecipients" element={<FundingRecipients />} />
          <Route path="/InTheNews" element={<InTheNews />} />
          <Route path="/AboutViolaAndJulius" element={<AboutViolaAndJulius />} />
          <Route path="/BecomeBoardMember" element={<BecomeBoardMember />} />
          <Route path="/PartnersAndResources" element={<PartnersAndResources />} />
          <Route path="/FoundationStaff" element={<FoundationStaff />} />
        </Routes>
      </Router>
      <Popup />
    </div>
  );
}

export default App;

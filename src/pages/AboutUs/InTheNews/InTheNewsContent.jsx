import React from 'react';
import "./InTheNewsContent.css";
import Articles from './Articles.jsx';
import FadeInSection from '../../../components/fadeinsection/FadeIn.jsx';
import FundingOppsSidebar from '../FundingOpportunities/FundingOppsSideBar.jsx';

function InTheNews() {
  return (
    <div className="in-the-news">
      <div className="articles-section">
        <FadeInSection>
          <Articles />
        </FadeInSection>
      </div>

        <div className="news-sidebar">
          <FadeInSection>
            <FundingOppsSidebar applicationsPaused />
          </FadeInSection>
        </div>
    </div>
  );
}

export default InTheNews;

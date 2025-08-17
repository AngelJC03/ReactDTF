import React from 'react';
import './WhatWeDontFundContent.css';
import FadeInSection from '../../../components/fadeinsection/FadeIn';

function WhatWeDontFundContent() {
  const dontFundItems = [
    { text: "Funding for individuals", color: "red" },
    { text: "Capital campaigns", color: "brown" },
    { text: "Fundraising initiatives or events", color: "green" },
    { text: "Endowments or general marketing campaigns", color: "yellow" },
    { text: "Organizations that do not directly provide basic needs services", color: "orange" },
  ];

  return (
    <div className="what-we-dont-fund-container">
      <FadeInSection>
        <div className="what-we-dont-fund-inner-container">
          <h1 className="title">What We Don’t Fund</h1>

          <p className="intro">
            The Davis-Tennon Foundation is committed to supporting direct services 
            that meet basic human needs—such as safe housing, food access, emergency 
            assistance, and educational support outside the classroom. While we deeply 
            respect the work of many organizations, our current funding scope is intentionally 
            focused and does <strong>NOT</strong> include:
          </p>

          <div className="dont-fund-grid">
            {dontFundItems.map((item, index) => (
              <div key={index} className={`dont-fund-card ${item.color}`}>
                {item.text}
              </div>
            ))}
          </div>

          <p className="note">
            We prioritize nonprofit organizations that not only serve immediate community needs, 
            but also actively collaborate with other agencies to increase impact and reduce 
            duplication of services.
          </p>

          <h2 className="subtitle">Typical Grant Range</h2>
          <p className="grant-info">
            The average grant size from the Davis-Tennon Foundation falls between 
            <strong> $10,000 and $50,000</strong>.  
            Grant amounts are determined based on need, alignment with our mission, and the 
            strength of collaboration and accountability practices within the applying organization.
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}

export default WhatWeDontFundContent;

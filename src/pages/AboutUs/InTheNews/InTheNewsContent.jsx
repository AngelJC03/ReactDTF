import React from 'react';
import "./InTheNewsContent.css";
import Articles from './Articles.jsx';
import FadeInSection from '../../../components/fadeinsection/FadeIn.jsx';

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
            <div className="news-sidebar-section">
              <h1>Help Fund Our Initiative</h1>
              <p>Help us make a difference by donating to our cause and strengthening our local community.</p>
              <a
                href="https://givebutter.com/0nhBTh"
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Donate Now (opens in new tab)"
                className="inline-block ml-5 px-3 py-3 bg-[rgb(195,41,58)] text-white font-semibold shadow rounded no-underline apply-button"
              >
                Donate Now
              </a>
            </div>

            <div className="news-sidebar-section">
              <h1>Apply for Funding</h1>
              <p>Don’t wait, apply for funding now to increase your chances!</p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Apply For Funding (opens in new tab)"
                className="inline-block ml-5 px-3 py-3 bg-[rgb(76,122,47)] text-white font-semibold shadow rounded no-underline apply-button"
              >
                Apply For Funding
              </a>
            </div>

            <div className="news-sidebar-section">
              <h1>Funding Initiatives</h1>
              <p>Learn more about our funding initiatives</p>
              <a 
                href="/whatwefund" 
                className="inline-block ml-5 px-3 py-3 bg-[rgba(50,120,100)] text-white font-semibold shadow rounded no-underline apply-button"
              >
                What We Fund
              </a>
            </div>

            <div className="news-sidebar-section">
              <h1>Meet Our Partners</h1>
              <p>Learn about our partners and resources for collaboration</p>
              <a 
                href="/partnersandresources" 
                className="inline-block ml-5 px-3 py-3 bg-[rgba(139,93,49)] text-white font-semibold shadow rounded no-underline apply-button"
              >
                Partners/ Resources
              </a>
            </div>
          </FadeInSection>
        </div>
    </div>
  );
}

export default InTheNews;

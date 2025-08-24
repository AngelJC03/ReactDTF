import React from 'react';
import "./InTheNewsContent.css";
import Articles from './Articles.jsx';

function InTheNews() {
  return (
    <div className="in-the-news">
      <div className="articles-section">
        <Articles />
      </div>

      <div className="news-sidebar">

        <div className="news-sidebar-section">
          <h1>Help Fund Our Initiative</h1>
          <h3>Help us make a difference by donating to our cause and strengthening our local community.</h3>
          <a 
            href="https://givebutter.com/0nhBTh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block ml-5 px-3 py-3 bg-[rgb(195,41,58)] text-white font-semibold shadow rounded no-underline apply-button"
          >
            Donate Now
          </a>
        </div>

        <div className="news-sidebar-section">
          <h1>Apply for Funding</h1>
          <h3>Don’t wait, apply for funding now to increase your chances!</h3>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block ml-5 px-3 py-3 bg-[rgb(109,169,68)] text-white font-semibold shadow rounded no-underline apply-button"
          >
            Apply For Funding
          </a>
        </div>

        <div className="news-sidebar-section">
          <h1>Funding Initiatives</h1>
          <h3>Learn more about our funding initiatives</h3>
          <a 
            href="/whatwefund" 
            className="inline-block ml-5 px-3 py-3 bg-[rgba(50,120,100)] text-white font-semibold shadow rounded no-underline apply-button"
          >
            What We Fund
          </a>
        </div>

        <div className="news-sidebar-section">
          <h1>Meet Our Partners</h1>
          <h3>Learn about our partners and resources for collaboration</h3>
          <a 
            href="/partnersandresources" 
            className="inline-block ml-5 px-3 py-3 bg-[rgba(139,93,49)] text-white font-semibold shadow rounded no-underline apply-button"
          >
            Partners/ Resources
          </a>
        </div>

      </div>
    </div>
  );
}

export default InTheNews;

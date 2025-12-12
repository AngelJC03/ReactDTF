import React from "react";
import "./FundingOppsSideBar.css";

const FundingOppsSideBar = () => {
  return (
    <div className="funding-sidebar">
      {/* Section 1 */}
      <div className="funding-sidebar-section">
        <h1>Funding Initiatives</h1>
        <p>Learn more about our funding initiatives</p>
          <a href="/whatwefund" className=" inline-block ml-5 px-3 py-3 bg-[rgba(50,120,100)] text-white font-semibold shadow rounded no-underline apply-button">
            What We Fund
          </a>
      </div>

      {/* Section 2 */}
      <div className="funding-sidebar-section">
        <h1>Apply for Funding</h1>
        <p>Don’t wait, apply for funding now to increase your chances!</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform" target="_blank" rel="noopener noreferrer" className=" inline-block ml-5 px-3 py-3 bg-[rgb(76,122,47)] text-white font-semibold shadow rounded no-underline apply-button" aria-label="Apply For Funding (opens in new tab)">
            Apply For Funding
        </a>
      </div>

      {/* Section 3 */}
      <div className="funding-sidebar-section">
        <h1>About Our Founders</h1>
        <p>Learn about our founders</p>
        <a href="/aboutviolaandjulius" className=" inline-block ml-5 px-3 py-3 bg-[rgba(139,93,49)] text-white font-semibold shadow rounded no-underline apply-button">
            About Viola and Julius
        </a>
      </div>
    </div>
  );
};

export default FundingOppsSideBar;

import React from "react";
import "./FundingOppsSideBar.css";

const FundingOppsSideBar = () => {
  return (
    <div className="funding-sidebar">
      {/* Section 1 */}
      <div className="funding-sidebar-section">
        <h1>Funding Initiatives</h1>
        <h3>Learn more about our funding initiatives</h3>
          <a
            href="/whatwefund"
            className="
                inline-block      
                ml-4 px-3 py-5
                border-2 border-[rgba(0,0,0,1)] text-[rgba(0,0,0,1)] font-semibold shadow-lg rounded
                transition-transform duration-300 transform
                hover:scale-105
                no-underline
            "
            >
            Visit What We Fund
          </a>
      </div>

      {/* Section 2 */}
      <div className="funding-sidebar-section">
        <h1>Apply for Funding</h1>
        <h3>Don’t wait, apply for funding now to increase your chances!</h3>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform" target="_blank" rel="noopener noreferrer" className=" inline-block ml-5 px-3 py-3 bg-[rgb(109,169,68)] text-white font-semibold shadow rounded no-underline apply-button">
            Apply For Funding
        </a>
      </div>

      {/* Section 3 */}
      <div className="funding-sidebar-section">
        <h1>About Our Founders</h1>
        <h3>Learn about our founders</h3>
        <a
            href="/Aboutviolaandjulius"
            className="
                inline-block      
                ml-4 px-3 py-5
                border-2 border-[rgba(0,0,0,1)] text-[rgba(0,0,0,1)] font-semibold shadow-lg rounded
                transition-transform duration-300 transform
                hover:scale-105
                no-underline
            "
            >
            Visit About Viola and Julius
          </a>
      </div>
    </div>
  );
};

export default FundingOppsSideBar;

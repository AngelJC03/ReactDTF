// FundingOpportunities.jsx
import React from "react";
import "./FundingOpportunitiesContent.css"; // we'll style here
import FadeIn from "../../../components/fadeinsection/FadeIn.jsx";
import DavisTennonLogo from "../../../assets/images/logo-photos/icononly_nobuffer.png";
import FundingOppsSidebar from "./FundingOppsSideBar.jsx";

const FundingOpportunitiesContent = () => {
  return (
    <div className="funding-opportunities">
      <FadeIn>
        <div className="funding-cycle-important-notices">
          The Davis-Tennon Foundation’s summer funding cycle officially closed on August 28, 2025. We thank all the organizations who submitted Letters of Intent for consideration.
          Any submissions received after that date will be reviewed as part of the fall funding cycle, which is now open and will close on November 21, 2025.
          We encourage applicants to align their proposals with our mission of meeting basic human needs and strengthening Rhode Island communities.
        </div>
        <h1 className="funding-title">Funding Opportunities</h1>
        <p className="funding-intro">
            The Davis-Tennon Foundation accepts Letters of Intent (LOIs) on a quarterly basis to support initiatives aligned with our mission of:
        </p>
        <ul className="funding-intro-list">
            <li>
              <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" className="bullet-icon" />
              <span>
                Empowering women
              </span>
            </li>
            <li>
              <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" className="bullet-icon" />
              <span>
                Preventing domestic violence
              </span>
            </li>
            <li>
              <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" className="bullet-icon"/>
              <span>
                Supporting student enrichment outside the classroom
              </span>
            </li>
            <li>
              <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" className="bullet-icon"/>
              <span>
                Promoting housing stability
              </span>
            </li>
        </ul>

        <p className="funding-note">
          <strong>Please note:</strong> Funding is not offered on a rolling basis. All organizations must submit a new LOI for each cycle in which they wish to be considered, regardless of previous submissions or funding history.
        </p>


        <div className="deadlines-section">
          <h2>Quarterly LOI Deadlines</h2>
          <ul className="deadline-list">
            <li>
              <img src={DavisTennonLogo} alt="bullet" className="bullet-icon" />
              <span><strong>Fall Cycle:</strong> August 28</span>
            </li>
            <li>
              <img src={DavisTennonLogo} alt="bullet" className="bullet-icon" />
              <span><strong>Winter Cycle:</strong> November 21</span>
            </li>
            <li>
              <img src={DavisTennonLogo} alt="bullet" className="bullet-icon" />
              <span><strong>Spring Cycle:</strong> February 21</span>
            </li>
            <li>
              <img src={DavisTennonLogo} alt="bullet" className="bullet-icon" />
              <span><strong>Summer Cycle:</strong> May 21</span>
            </li>
          </ul>
        </div>


        <p className="funding-closing">
          Organizations selected from the LOI process will be invited to submit a full proposal. We encourage applicants to align their requests with the Foundation’s core focus areas and clearly demonstrate community impact.
        </p>
        <p className="funding-contact">
          For questions on eligibility or the application process, contact us at <a href="mailto:agarcia@davis-tennonfoundation.org">agarcia@davis-tennonfoundation.org</a>.
        </p>
      </FadeIn>
      <FadeIn>
        <div className="funding-opps-sidebar">
            <FundingOppsSidebar />
        </div>
      </FadeIn>

    </div>
  );
};

export default FundingOpportunitiesContent;

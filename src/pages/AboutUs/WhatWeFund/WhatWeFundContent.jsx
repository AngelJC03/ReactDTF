// WhatWeFund.jsx
import React from "react";
import "./WhatWeFundContent.css"; // move CSS here
import empoweringWomen from '../../../assets/images/what-we-fund-photos/empowering-women.jpg';
import dvRibbon from '../../../assets/images/what-we-fund-photos/dv-ribbon.jpg';
import studentOpportunities from '../../../assets/images/what-we-fund-photos/student-opportunities.jpg';
import housingStability from '../../../assets/images/what-we-fund-photos/housing-stability.jpg';
import FadeIn from '../../../components/fadeinsection/FadeIn.jsx';
import firstHalfBackgroundPhoto from '../../../assets/images/what-we-fund-photos/whiskGenerated1.jpg';

const WhatWeFundContent = () => {
  return (
    <div className="what-we-fund-content">
      {/* Title */}
      <FadeIn>
        <div className="WWF-title">
          <h1>What We Fund</h1>
          <p>
            The Davis-Tennon Foundation is committed to driving meaningful change
            by funding initiatives that address critical needs within Rhode Island
            communities. Our goal is to empower individuals and families, remove
            barriers to opportunity, and create lasting solutions for underserved
            populations.
          </p>
        </div>
      </FadeIn>

      <div className="funding-container-container">
        <FadeIn>
          <div className="funding-container">
            <h2>Our Funding Priorities</h2>

            <div className="impact-grid">
              <div
                className="impact-card"
                style={{
                  backgroundImage: `url(${empoweringWomen})`,
                }}
              >
                <div className="caption-bar">Empowering Women</div>
                <div className="overlay">
                  <h3>Empowering Women</h3>
                  <p>
                    We support programs that uplift and empower women through
                    education, leadership training, workforce development, and
                    resources to help them achieve independence and stability.
                  </p>
                </div>
              </div>

              <div
                className="impact-card"
                style={{
                  backgroundImage: `url(${dvRibbon})`,
                }}
              >
                <div className="caption-bar">Domestic Violence Awareness</div>
                <div className="overlay">
                  <h3>Preventing Domestic Violence</h3>
                  <p>
                    We fund initiatives that provide critical resources for
                    survivors, promote prevention education, support intervention
                    efforts, and create safer communities for all.
                  </p>
                </div>
              </div>

              <div
                className="impact-card"
                style={{
                  backgroundImage: `url(${studentOpportunities})`,
                }}
              >
                <div className="caption-bar">Student Opportunities</div>
                <div className="overlay">
                  <h3>Student Opportunities</h3>
                  <p>
                    We are passionate about funding programs that enrich students’
                    lives outside of school hours, such as after-school programs,
                    mentorship opportunities, and access to the arts and STEM
                    education.
                  </p>
                </div>
              </div>

              <div
                className="impact-card"
                style={{
                  backgroundImage: `url(${housingStability})`,
                }}
              >
                <div className="caption-bar">Housing Stability</div>
                <div className="overlay">
                  <h3>Housing Stability</h3>
                  <p>
                    We invest in efforts that address housing challenges,
                    including affordable housing projects, emergency shelter
                    programs, and initiatives that combat homelessness in our
                    communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn>
      <div className="apply-for-funding-container">
        <div className="firstHalf"
          style={{ backgroundImage: `url(${firstHalfBackgroundPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        </div>
        <div className="secondHalf">
          <p>
            We support organizations whose work reflects our mission and funding priorities.
            If your values align with ours, we encourage you to explore the opportunity to apply.
            Visit our{" "}
          <a href="/apply-for-funding" className="apply-link">
            Apply for Funding
          </a>{" "}
          page to learn more about the application process.
          </p>
          <div className="button-container">
            <button className="ml-5 px-5 py-6 bg-[rgb(109,169,68)] text-white font-semibold shadow rounded apply-button">
              Apply For Funding
            </button>
          </div>
        </div>
      </div>

      </FadeIn>
    </div>
  );
};

export default WhatWeFundContent;

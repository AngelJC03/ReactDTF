import React from "react";
import "./WhatWeFundContent.css"; 
import empoweringWomen from '../../../assets/images/what-we-fund-photos/empowering-women.jpg';
import dvRibbon from '../../../assets/images/what-we-fund-photos/dv-ribbon.jpg';
import studentOpportunities from '../../../assets/images/what-we-fund-photos/student-opportunities.jpg';
import housingStability from '../../../assets/images/what-we-fund-photos/housing-stability.jpg';
import FadeIn from '../../../components/fadeinsection/FadeIn.jsx';
import firstHalfBackgroundPhoto from '../../../assets/images/what-we-fund-photos/whiskGenerated1.jpg';
import AccordionItem from '../../../components/Accordion/AccordionItem.jsx';

const WhatWeFundContent = () => {
  return (
    <div className="what-we-fund-content">
      {/* Page Title & Intro */}
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

      {/* Our Current Funding Focus */}
      <FadeIn>
        <div className="funding-container-container">
          <div className="funding-container">
            <AccordionItem title="Our Current Funding Focus">
              <p>
                In light of the current social, economic, and political climate, the Davis-Tennon Foundation is placing renewed emphasis on supporting basic human needs in the communities we serve. While we continue to value long-term programming and operational support, our current funding priorities are focused on immediate, tangible needs that directly impact the health, safety, and stability of individuals and families—particularly in historically underserved communities.
              </p>
              <ul>
                <li>Access to safe and stable housing</li>
                <li>Emergency food assistance</li>
                <li>Hygiene and essential household items</li>
                <li>Support for survivors of domestic violence</li>
                <li>Critical student and family support outside school hours</li>
              </ul>
              <p>
                We believe that meeting these fundamental needs is an essential foundation for growth, healing, and opportunity—and that in this moment, responsiveness, equity, and dignity must guide our funding decisions. If your organization is addressing basic needs in Rhode Island, especially in or around Central Falls, we encourage you to submit a Letter of Intent during our current funding cycle.
              </p>
            </AccordionItem>
          </div>
        </div>
      </FadeIn>

      {/* Funding Priorities Grid */}
      <div className="funding-container-container">
        <FadeIn>
          <div className="funding-container">
            <h2>Our Funding Priorities</h2>
            <div className="impact-grid">
              <div className="impact-card" style={{ backgroundImage: `url(${empoweringWomen})` }}>
                <div className="caption-bar">Empowering Women</div>
                <div className="overlay">
                  <h3>Empowering Women</h3>
                  <p>We support programs that uplift and empower women through education, leadership training, workforce development, and resources to help them achieve independence and stability.</p>
                </div>
              </div>

              <div className="impact-card" style={{ backgroundImage: `url(${dvRibbon})` }}>
                <div className="caption-bar">Domestic Violence Awareness</div>
                <div className="overlay">
                  <h3>Preventing Domestic Violence</h3>
                  <p>We fund initiatives that provide critical resources for survivors, promote prevention education, support intervention efforts, and create safer communities for all.</p>
                </div>
              </div>

              <div className="impact-card" style={{ backgroundImage: `url(${studentOpportunities})` }}>
                <div className="caption-bar">Student Opportunities</div>
                <div className="overlay">
                  <h3>Student Opportunities</h3>
                  <p>We are passionate about funding programs that enrich students’ lives outside of school hours, such as after-school programs, mentorship opportunities, and access to the arts and STEM education.</p>
                </div>
              </div>

              <div className="impact-card" style={{ backgroundImage: `url(${housingStability})` }}>
                <div className="caption-bar">Housing Stability</div>
                <div className="overlay">
                  <h3>Housing Stability</h3>
                  <p>We invest in efforts that address housing challenges, including affordable housing projects, emergency shelter programs, and initiatives that combat homelessness in our communities.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Apply for Funding Section */}
      <FadeIn>
        <div className="apply-for-funding-container">
          <div className="firstHalf"
            style={{ backgroundImage: `url(${firstHalfBackgroundPhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="secondHalf">
            <p>
              We support organizations whose work reflects our mission and funding priorities.
              If your values align with ours, we encourage you to explore the opportunity to apply.
              Visit our Apply for Funding page to learn more about the application process.
            </p>
            <div className="button-container">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform" target="_blank" rel="noopener noreferrer" className="ml-5 px-5 py-6 bg-[rgb(76,122,47)] text-white font-semibold shadow rounded no-underline apply-button" aria-label="Apply For Funding (opens in new tab)">
                Apply For Funding
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default WhatWeFundContent;

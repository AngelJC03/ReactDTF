import React, {useState, useEffect} from 'react';
import './PartnersAndResourcesContent.css';
import ViolaDavisHungerEvent from '../../assets/images/what-we-fund-photos/Viola-Davis-Hunger-Is-Moms-Event-e1553904813882-1000x469-1.jpg';
import RICADVLogo from '../../assets/images/partner-photos/ricadv.png';
import RhodeIslandFoundationLogo from '../../assets/images/partner-photos/rif.png';
import PapittoOpportunityConnectionLogo from '../../assets/images/partner-photos/poc.png';
import ChamplinFoundationLogo from '../../assets/images/partner-photos/champlin.svg';
import SojournerHouseLogo from '../../assets/images/partner-photos/sojouner.png';
import RhodeIslandCollegeLogo from '../../assets/images/partner-photos/ric.jpg';
import TrailblazersInitiativeLogo from '../../assets/images/partner-photos/csgf.png';
import DavisTennonLogo from '../../assets/images/logo-photos/icononly_nobuffer.png';

import AccordionItem from "../../components/Accordion/AccordionItem.jsx";

function PartnersAndResourcesContent() {

  const [ShowLogos, setShowLogos] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setShowLogos(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="partners-and-resources-page-container">
      <div className="par-page-content">
        {/* --- Intro & Photo (always visible) --- */}
        <div className="page-image">
          <h1>Resources for Families and Community Partners</h1>
          <img
            src={ViolaDavisHungerEvent}
            alt="Angelo Garcia"
            className="board-member-photo"
          />
          <p className="photo-credit">
            <em>
              Photo by{" "}
              <a href="https://www.eifoundation.org/">EIF (Entertainment Industry Foundation)</a>
            </em>
          </p>
        </div>

        {/* --- Accordion Section --- */}
        <AccordionItem title="Community Partners">
            <div className="community-partners">

                <h3>Our Community Partners</h3>
                <p>
                    At the Davis-Tennon Foundation, we are dedicated to connecting families with the tools, 
                    organizations, and support systems they need to thrive. Below, you’ll find a curated list 
                    of resources and partner organizations that address critical needs in our community.
                </p>

                <p style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' }}>
                    We are proud to collaborate with organizations 
                    that are deeply embedded in the communities they serve. Together, we are advancing 
                    meaningful change by expanding access, removing barriers, and creating pathways for opportunity.
                </p>
                <p style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' }}>
                    In addition to our inaugural grantees, we are honored to support the work of the following Rhode Island-based partners:
                </p>

                <ul className="partners-bullet-list" style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' }}>
                    <li>
                    <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                    <span>
                        <a href="https://www.ric.edu/academics/educational-opportunity-programs/upward-bound" target="_blank">
                            Upward Bound at Rhode Island College:
                        </a> Supporting first-generation and income-eligible students on their path to college.
                    </span>
                    </li>
                    <li>
                    <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                    <span>
                        <a href="https://www.centralfallsri.gov/library" target="_blank">
                        Central Falls Adams Public Library:
                        </a> A trusted hub for learning, literacy, and community programming.
                    </span>
                    </li>
                    <li>
                    <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                    <span>
                        <a href="https://www.projectreadri.org/" target="_blank">
                        Project R.E.A.D.:
                        </a> Promoting literacy and lifelong learning through adult education.
                    </span>
                    </li>
                </ul>

                <p style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' }}>
                    These organizations reflect the mission of the Davis-Tennon Foundation: to connect families with resources and champion local institutions making a difference.
                </p>

                <p><strong>Together, we are helping build stronger, safer, and more supported communities throughout Central Falls and beyond.</strong></p>  
            </div>
        </AccordionItem>

        <AccordionItem title="Partner Programs & Opportunities">
          <h3>Empowering Women and Preventing Domestic Violence</h3>
          <ul className="partners-bullet-list" style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' }}>
            <li>
                <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                <span>
                    <a href="https://ricadv.org/" target="_blank">Rhode Island Coalition Against Domestic Violence:</a> Shelter, advocacy, and prevention programs.
                </span>
            </li>
            <li>
                <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                <span>
                    <a href="https://sojournerri.org/" target="_blank">Sojourner House:</a> Housing, counseling, and education for individuals impacted by domestic violence.
                </span>
            </li>
          </ul>

          <h3>Housing Assistance</h3>
          <ul className="partners-bullet-list" style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' }}>
            <li>
                <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                <span>
                    <a href="https://rifoundation.org/" target="_blank">Rhode Island Foundation:</a> Housing stability and community development initiatives.
                </span>
            </li>
            <li>
                <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                <span>
                    <a href="https://pocfoundation.com/" target="_blank">Papitto Opportunity Connection:</a> Housing resources for underserved communities.
                </span>
            </li>
          </ul>

          <h3>Student Enrichment and Education</h3>
          <ul className="partners-bullet-list" style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' }}>
            <li>
                <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                <span>
                    <a href="https://www.ric.edu/" target="_blank">Rhode Island College:</a> Higher education and enrichment programs.
                </span>
            </li>
            <li>
                <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                <span>
                    <a href="https://www.nld.org/rhode-island-college-workforce-development-hub" target="_blank">Central Falls Workforce Hub:</a> Workforce training and career advancement.
                </span>
            </li>
          </ul>

          <h3>Financial and Grant Support</h3>
          <ul className="partners-bullet-list" style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' }}>
            <li>
                <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                <span>
                    <a href="https://champlinfoundation.org/" target="_blank">The Champlin Foundation:</a> Funding opportunities for nonprofits.
                </span>
            </li>
            <li>
                <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                <span>
                    <a href="https://chartergrowthfund.org/" target="_blank">Trailblazers Initiative:</a> Support for innovative educational programs.
                </span>
            </li>
          </ul>

          <h3>Parent Advocacy and Leadership</h3>
          <ul className="partners-bullet-list" style={{ fontFamily: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' }}>
            <li>
                <img src={DavisTennonLogo} alt="Davis-Tennon Foundation Logo" />
                <span>
                    <a href="what-we-fund.html">Parent Council Development:</a> Training parents in advocacy and leadership.
                </span>
            </li>
          </ul>
        </AccordionItem>

        {ShowLogos && (
          <div className="partner-logos">
            <div className="partner-logo-row-1">
              <a href="https://ricadv.org/" target="_blank"><img src={RICADVLogo} alt="RICADV Logo" className="partner-logo"/></a>
              <a href="https://rifoundation.org/" target="_blank"><img src={RhodeIslandFoundationLogo} alt="Rhode Island Foundation Logo" className="partner-logo"/></a>
            </div>
            <div className="partner-logo-row-2">
              <a href="https://pocfoundation.com/" target="_blank"><img src={PapittoOpportunityConnectionLogo} alt="Papitto Opportunity Connection Logo" className="partner-logo"/></a>
              <a href="https://champlinfoundation.org/" target="_blank"><img src={ChamplinFoundationLogo} alt="Champlin Foundation Logo" className="partner-logo"/></a>
            </div>
            <div className="partner-logo-row-3">
              <a href="https://sojournerri.org/" target="_blank"><img src={SojournerHouseLogo} alt="Sojourner House Logo" className="partner-logo"/></a>
              <a href="https://www.ric.edu/" target="_blank"><img src={RhodeIslandCollegeLogo} alt="Rhode Island College Logo" className="partner-logo"/></a>
              <a href="https://chartergrowthfund.org/" target="_blank"><img src={TrailblazersInitiativeLogo} alt="Trailblazers Initiative Logo" className="partner-logo"/></a>
            </div>
          </div>
        )}

        {!ShowLogos && (
            <AccordionItem title="Partner Logos">
              <div className="partner-logos">
                <div className="partner-logo-row-1">
                    <a href="https://ricadv.org/" target="_blank"><img src={RICADVLogo} alt="RICADV Logo" className="partner-logo"/></a>
                    <a href="https://rifoundation.org/" target="_blank"><img src={RhodeIslandFoundationLogo} alt="Rhode Island Foundation Logo" className="partner-logo"/></a>
                </div>
                <div className="partner-logo-row-2">
                    <a href="https://pocfoundation.com/" target="_blank"><img src={PapittoOpportunityConnectionLogo} alt="Papitto Opportunity Connection Logo" className="partner-logo"/></a>
                    <a href="https://champlinfoundation.org/" target="_blank"><img src={ChamplinFoundationLogo} alt="Champlin Foundation Logo" className="partner-logo"/></a>
                </div>
                <div className="partner-logo-row-3">
                    <a href="https://sojournerri.org/" target="_blank"><img src={SojournerHouseLogo} alt="Sojourner House Logo" className="partner-logo"/></a>
                    <a href="https://www.ric.edu/" target="_blank"><img src={RhodeIslandCollegeLogo} alt="Rhode Island College Logo" className="partner-logo"/></a>
                    <a href="https://chartergrowthfund.org/" target="_blank"><img src={TrailblazersInitiativeLogo} alt="Trailblazers Initiative Logo" className="partner-logo"/></a>
                </div>
            </div>
          </AccordionItem>
        )}


        {/* --- Contact (always visible) --- */}
        <div className="contact-us-partners-page">
          <h2>Contact Us for Assistance</h2>
          <p>
            If you’re unsure where to start or need help connecting with the right resource, contact us at 
            <a href="mailto:agarcia@davis-tennonfoundation.org" className="contact-email">agarcia@davis-tennonfoundation.org</a>.
          </p>
          <p>
            Together, we can eliminate barriers, build connections, and create brighter futures for families across Rhode Island.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PartnersAndResourcesContent;

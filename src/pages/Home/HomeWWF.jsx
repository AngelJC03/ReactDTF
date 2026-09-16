import "./HomeWWF.css";

import empoweringWomen from "../../assets/images/home-page-photos/empowering-women.jpg";
import dvRibbon from "../../assets/images/home-page-photos/dv-ribbon.jpg";
import studentOpportunities from "../../assets/images/home-page-photos/student-opportunities.jpg";
import housingStability from "../../assets/images/home-page-photos/housing-stability.jpg";

function WhatWeFund() {
  return (
    <section className="wwf-container">
      <h2 className="wwf-title">What We Fund</h2>
      <div className="wwf-warning">
        <div className="wwf-warning-icon" aria-hidden="true">
          !
        </div>

        <div className="wwf-warning-content">
          <h3>Please Note</h3>

          <p>
            The Davis-Tennon Foundation reviews all requests and inquiries
            closely; however, as a rule, we do not respond to solicitations
            that fall outside our areas of support.
          </p>

          <p>
            Only organizations selected to receive funding will be contacted.
          </p>
        </div>
      </div>

      <p/>

      <p className="wwf-description" role="heading">
        The Davis-Tennon Foundation is committed to driving meaningful change by
        funding initiatives that address critical needs within Rhode Island
        communities. Our goal is to empower individuals and families, remove
        barriers to opportunity, and create lasting solutions for underserved
        populations.
      </p>

      <div className="wwf-grid">
        <a className="wwf-item" href="/WhatWeFund">
          <img src={empoweringWomen} alt="Empowering Women" />
          <div className="wwf-caption">Empowering Women</div>
        </a>

        <a className="wwf-item" href="/WhatWeFund">
          <img src={dvRibbon} alt="Domestic Violence Awareness" />
          <div className="wwf-caption">Domestic Violence Awareness</div>
        </a>

        <a className="wwf-item" href="/WhatWeFund">
          <img src={studentOpportunities} alt="Student Opportunities" />
          <div className="wwf-caption">Student Opportunities</div>
        </a>

        <a className="wwf-item" href="/WhatWeFund">
          <img src={housingStability} alt="Housing Stability" />
          <div className="wwf-caption">Housing Stability</div>
        </a>
      </div>
    </section>
  );
}

export default WhatWeFund;
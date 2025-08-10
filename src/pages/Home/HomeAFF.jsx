import React from 'react';
import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import './HomeAFF.css';

function HomeAFF() {

  return (
    <div className="aff-container">
      <FadeIn>
        <div className="aff-content">
            <div className="aff-left">
                <h2>Apply for Funding</h2>
                <p>
                    The Davis-Tennon Foundation is committed to driving meaningful change by funding critical initiatives that strengthen communities across Rhode Island. Through strategic investments and partnerships, we support programs that address pressing needs, foster innovation, and create lasting impact for the people we serve.
                </p>
            </div>
            <div className="aff-right">
              <h2>Does your organization's mission align with our funding priorities?</h2>
                <p>We invite you to apply for funding to support your impactful work.</p>
              <button className="ml-5 px-5 py-6 bg-[rgb(109,169,68)] text-white font-semibold shadow rounded apply-button">
                Apply For Funding
              </button>
            </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default HomeAFF;

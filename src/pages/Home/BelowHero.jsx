import React from 'react';
import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import './BelowHero.css';
import bannerBackground from '../../assets/images/logo-photos/repeated-logo.jpg';

function Home() {

  return (
    <div className="banner-container">
      <FadeIn>
        <div className="banner-content" style={{ backgroundImage: `url(${bannerBackground})` }}>
            <div className="banner-text">
                <p>“The birth of the Davis-Tennon Foundation
                    started with the realization that the
                    gift of success is the ability to give back.”
                    - Viola Davis
                </p>
            </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;

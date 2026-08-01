import FadeIn from '../../components/fadeinsection/FadeIn.jsx';
import './Hero.css';
import heroImage from '../../assets/images/home-page-photos/hero_photo2.jpg';
import logo from '../../assets/images/logo-photos/clear-background-dtf-logo.png';
import GrantNotice from '../../components/GrantNotice/GrantNotice.jsx';

function Home() {

  return (
    <div className="home-container">
      <FadeIn>
        <div className="hero-content">
            <div className="hero-image">
                <img src={heroImage} alt="Hero" className="hero-img" />
                <div className="hero-copy">
                  <img src={logo} alt="Davis-Tennon Foundation" className="hero-copy-logo" />
                  <p>Community-powered philanthropy</p>
                  <h1>Opening pathways to dignity, opportunity, and lasting support.</h1>
                  <a href="/WhatWeFund">Explore Our Work</a>
                </div>
                <GrantNotice className="hero-grant-notice" />
            </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;

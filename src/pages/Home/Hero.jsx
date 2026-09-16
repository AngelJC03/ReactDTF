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
                <img src={logo} alt="Logo" className="hero-logo" />
                <GrantNotice className="hero-grant-notice" />
            </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Home;
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import './Navbar.css'; // your CSS file
import logo from '../../assets/images/logo-photos/dtf-logo.png';
import smallerLogo from '../../assets/images/logo-photos/200x200_logo.png';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const closeSidebar = () => setClick(false);

  // toggle dropdown on click
  const toggleDropdown = (menuName) => {
    setActiveMenu(prev => (prev === menuName ? null : menuName));
  };

  const checkboxRef = useRef(null);

  const handleToggle = () => {
    setClick(prev => !prev);
    if (checkboxRef.current) {
      checkboxRef.current.checked = !click; // sync checkbox with state
    }
  };

  const [currentLogo, setCurrentLogo] = useState(getInitialLogo());
  const [currentWidth, setCurrentWidth] = useState(290);

  function getInitialLogo() {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 450 ? smallerLogo : logo;
    }
    return logo;
  }

  useEffect(() => {
    const updateLogo = () => {
      const isMobile = window.innerWidth <= 450;
      setCurrentLogo(isMobile ? smallerLogo : logo);
      setCurrentWidth(isMobile ? 90 : 290);
    };

    updateLogo();

    window.addEventListener("resize", updateLogo);
    return () => window.removeEventListener("resize", updateLogo);
  }, []);

  return (
    <div className="navbar-container">
      <nav className="w-full h-[120px] bg-[#ffcc8a] text-black px-8 py-6 flex items-center justify-between font-gill-sans-bold">

        <Hamburger click={click} checkboxRef={checkboxRef} handleToggle={handleToggle} />

          <div className="navbar-image flex items-center gap-4">
            <Link to="/Home"><img src={currentLogo} alt="Logo" style={{ width: `${currentWidth}px`, height: 'auto' }} /></Link>
          </div>

        <div className="nav-menu flex items-center gap-5">
          <div className="flex items-center gap-6">

            {/* Home */}
            <Link to="/Home" className="nav-link" onClick={() => toggleDropdown('home')}>
              Home
            </Link>

            {/* About Us */}
            <div
              className={`nav-item dropdown ${activeMenu === 'about' ? 'active' : ''}`}
              onMouseEnter={() => setActiveMenu('about')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link to="" className="nav-link" onClick={() => toggleDropdown('about')}>
                About Us <FaAngleDown className={`inline ml-1 dropdown-arrow ${activeMenu === 'about' ? 'rotate' : ''}`} />
              </Link>
              <ul className={`dropdown-menu ${activeMenu === 'about' ? 'show' : ''}`}>
                <li><Link to="/WhatWeFund" className="dropdown-link">What We Fund</Link></li>
                <li><Link to="/WhatWeDontFund" className="dropdown-link">What We Don't Fund</Link></li>
                <li><Link to="/FundingOpportunities" className="dropdown-link">Funding Opportunities</Link></li>
                <li><Link to="/FundingRecipients" className="dropdown-link">Funding Recipients</Link></li>
                <li><Link to="/InTheNews" className="dropdown-link">In The News</Link></li>
              </ul>
            </div>

            {/* Our Team */}
            <div
              className={`nav-item dropdown ${activeMenu === 'ourTeam' ? 'active' : ''}`}
              onMouseEnter={() => setActiveMenu('ourTeam')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link to="" className="nav-link" onClick={() => toggleDropdown('ourTeam')}>
                Our Team <FaAngleDown className={`inline ml-1 dropdown-arrow ${activeMenu === 'ourTeam' ? 'rotate' : ''}`} />
              </Link>
              <ul className={`dropdown-menu ${activeMenu === 'ourTeam' ? 'show' : ''}`}>
                <li><Link to="/AboutViolaAndJulius" className="dropdown-link">About Viola and Julius</Link></li>
                <li><Link to="/FoundationStaff" className="dropdown-link">Foundation Staff</Link></li>
                <li><Link to="/BecomeBoardMember" className="dropdown-link">Become a Board Member</Link></li>
              </ul>
            </div>

            <Link to="/PartnersAndResources" className="nav-link" onClick={() => toggleDropdown('partnersResources')}>
              Partners/Resources
            </Link>

            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform" target="_blank" rel="noreferrer" className="nav-button">
              <button className="ml-4 px-3 py-2 bg-[rgb(76,122,47)] text-white font-semibold shadow rounded">
                Apply For Funding
              </button>
            </Link>

            <Link to="https://givebutter.com/0nhBTh" target="_blank" rel="noreferrer" className="nav-button">
              <button className="px-3 py-2 bg-[rgb(195,41,58)] text-white font-semibold shadow rounded">
                Donate Now
              </button>
            </Link>

          </div>
        </div>
      </nav>
      <Sidebar isOpen={click} onClose={closeSidebar} />
    </div>
  );
}

export default Navbar;

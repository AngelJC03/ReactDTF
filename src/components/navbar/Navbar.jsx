import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/images/logo-photos/dtf-logo.png';
import smallerLogo from '../../assets/images/logo-photos/200x200_logo.png';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const closeSidebar = () => setClick(false);

  const toggleDropdown = (menuName) => {
    setActiveMenu(prev => (prev === menuName ? null : menuName));
  };

  const checkboxRef = useRef(null);

  const handleToggle = () => {
    setClick(prev => !prev);
    if (checkboxRef.current) {
      checkboxRef.current.checked = !click;
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
    <nav className="navbar-container" role="navigation" aria-label="Main Navigation">
      <div className="w-full h-[120px] bg-[#ffcc8a] text-black px-8 py-6 flex items-center justify-between font-gill-sans-bold">

        <Hamburger click={click} checkboxRef={checkboxRef} handleToggle={handleToggle} />

        <div className="navbar-image flex items-center gap-4">
          <Link to="/Home">
            <img src={currentLogo} alt="Logo" style={{ width: `${currentWidth}px`, height: 'auto' }} />
          </Link>
        </div>

        <div className="nav-menu flex items-center gap-5">
          <ul className="flex items-center gap-6" role="menubar">

            {/* Home */}
            <li role="none">
              <Link to="/Home" className="nav-link" role="menuitem">
                Home
              </Link>
            </li>

            {/* About Us */}
            <li
              className={`nav-item dropdown ${activeMenu === 'about' ? 'active' : ''}`}
              onMouseEnter={() => setActiveMenu('about')}
              onMouseLeave={() => setActiveMenu(null)}
              role="none"
            >
              <Link
                to="#"
                className="nav-link"
                onClick={() => toggleDropdown('about')}
                aria-haspopup="true"
                aria-expanded={activeMenu === 'about'}
                role="menuitem"
              >
                About Us <FaAngleDown className={`inline ml-1 dropdown-arrow ${activeMenu === 'about' ? 'rotate' : ''}`} />
              </Link>
              <ul className={`dropdown-menu ${activeMenu === 'about' ? 'show' : ''}`} role="menu">
                <li role="menuitem"><Link to="/WhatWeFund" className="dropdown-link">What We Fund</Link></li>
                <li role="menuitem"><Link to="/WhatWeDontFund" className="dropdown-link">What We Don't Fund</Link></li>
                <li role="menuitem"><Link to="/FundingOpportunities" className="dropdown-link">Funding Opportunities</Link></li>
                <li role="menuitem"><Link to="/FundingRecipients" className="dropdown-link">Funding Recipients</Link></li>
                <li role="menuitem"><Link to="/InTheNews" className="dropdown-link">In The News</Link></li>
              </ul>
            </li>

            {/* Our Team */}
            <li
              className={`nav-item dropdown ${activeMenu === 'ourTeam' ? 'active' : ''}`}
              onMouseEnter={() => setActiveMenu('ourTeam')}
              onMouseLeave={() => setActiveMenu(null)}
              role="none"
            >
              <Link
                to="#"
                className="nav-link"
                onClick={() => toggleDropdown('ourTeam')}
                aria-haspopup="true"
                aria-expanded={activeMenu === 'ourTeam'}
                role="menuitem"
              >
                Our Team <FaAngleDown className={`inline ml-1 dropdown-arrow ${activeMenu === 'ourTeam' ? 'rotate' : ''}`} />
              </Link>
              <ul className={`dropdown-menu ${activeMenu === 'ourTeam' ? 'show' : ''}`} role="menu">
                <li role="menuitem"><Link to="/AboutViolaAndJulius" className="dropdown-link">About Viola and Julius</Link></li>
                <li role="menuitem"><Link to="/FoundationStaff" className="dropdown-link">Foundation Staff</Link></li>
                <li role="menuitem"><Link to="/BecomeBoardMember" className="dropdown-link">Become a Board Member</Link></li>
              </ul>
            </li>

            <li role="none">
              <Link to="/PartnersAndResources" className="nav-link" role="menuitem">
                Partners/Resources
              </Link>
            </li>

            {/* External links styled as buttons */}
            <li role="none">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform"
                target="_blank"
                rel="noreferrer"
                className="ml-4 px-3 py-2 bg-[rgb(76,122,47)] text-white font-semibold shadow rounded nav-button"
                aria-label="Apply For Funding (opens in new tab)"
                role="menuitem"
              >
                Apply For Funding
              </Link>
            </li>

            <li role="none">
              <Link
                to="https://givebutter.com/0nhBTh"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 bg-[rgb(195,41,58)] text-white font-semibold shadow rounded nav-button"
                aria-label="Donate Now (opens in new tab)"
                role="menuitem"
              >
                Donate Now
              </Link>
            </li>

          </ul>
        </div>
      </div>
      <Sidebar isOpen={click} onClose={closeSidebar} />
    </nav>
  );
}

export default Navbar;

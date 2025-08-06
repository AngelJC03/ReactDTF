import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';
import './Navbar.css'; // your CSS file
import logo from '../../assets/images/logo-photos/dtf-logo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const closeMobileMenu = () => setClick(false);

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

  const closeSidebar = () => setClick(false);

  return (
    <div className="navbar-container">
      <nav className="w-full h-[120px] bg-[rgb(255,186,95)] text-black px-8 py-6 flex items-center justify-between font-gill-sans-bold">

        <div className="flex items-center gap-4">
          <Link to="/Home"><img src={logo} alt="Logo" className="w-[290px] h-auto" /></Link>
        </div>

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
              <li><Link to="/" className="dropdown-link">What We Fund</Link></li>
              <li><Link to="/" className="dropdown-link">In The News</Link></li>
              <li><Link to="/" className="dropdown-link">Funding Recipients</Link></li>
              <li><Link to="/" className="dropdown-link">Apply for Funding</Link></li>
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
              <li><Link to="/" className="dropdown-link">About Viola and Julius</Link></li>
              <li><Link to="/"  className="dropdown-link">Foundation Staff</Link></li>
              <li><Link to="/"  className="dropdown-link">Become a Board Member</Link></li>
            </ul>
          </div>

          {/* Partners/Resources */}
          <Link to="" className="nav-link" onClick={() => toggleDropdown('partnersResources')}>
            Partners/Resources
          </Link>

          <button className="ml-4 px-3 py-2 bg-red-700 text-white font-semibold shadow rounded">
            Donate Now
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

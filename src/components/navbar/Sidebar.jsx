// import React from 'react';
import { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import logo from '../../assets/images/logo-photos/200x200_logo.png';

function Sidebar({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

    const mainLinks = [
    {
      label: 'About Us',
      path: '',
      submenu: [
        { label: 'What We Fund', path: '/WhatWeFund' },
        { label: "What We Don't Fund", path: '/WhatWeDontFund' },
        { label: 'Funding Opportunities', path: '/FundingOpportunities' },
        { label: 'Funding Recipients', path: '/FundingRecipients' },
        { label: 'In The News', path: '/InTheNews' },
      ],
    },
    {
      label: 'Our Team',
      path: '',
      submenu: [
        { label: 'About Viola and Julius', path: '/AboutViolaAndJulius' },
        { label: 'Foundation Staff', path: '/FoundationStaff' },
        { label: 'Become a Board Member', path: '/BecomeBoardMember' },
      ],
    },
  ];


  return (
    <>
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        
        <Link to="/Home" className="sidebar-logo-container" onClick={onClose}>
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </Link>

        <div className="sidebar-content">
          <ul className="sidebar-menu">

            <li className="sidebar-item">
              <Link to="/Home" onClick={onClose} className="sidebar-link">
                <span>Home</span>
              </Link>
            </li>

          {mainLinks.map(({ label, submenu }, index) => (
            <li key={index} className="sidebar-item">
                <div
                  className="sidebar-link"
                  onClick={() => toggleDropdown(label)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') toggleDropdown(label);
                  }}
                >
                <span className="flex items-center gap-2">
                  {label}
                  <FaAngleRight className={`sidebar-arrow ${openDropdown === label ? 'rotate' : ''}`} />
                </span>
              </div>

              {/* Dropdown menu */}
              {openDropdown === label && submenu && (
                <ul className="sidebar-submenu">
                  {submenu.map((item, idx) => (
                  <li key={idx} className="sidebar-subitem">
                    {item.type === 'button' ? (
                      <Link to={item.path} onClick={onClose}>
                        <button
                          className={`px-3 py-2 ${item.color || 'bg-[rgb(195,41,58)]'} text-white font-semibold shadow rounded`}
                        >
                          {item.label}
                        </button>
                      </Link>
                    ) : (
                      <Link to={item.path} onClick={onClose} className="sidebar-sublink">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
                </ul>
              )}
            </li>
          ))}

          <li className="sidebar-item">
            <Link to="/PartnersAndResources" onClick={onClose} className="sidebar-link">
              <span>Partners/Resources</span>
            </Link>
          </li>
          
          <li className="sidebar-item">
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeyf2L9swDTLg0CM6kyN8VamFCxlJ4w-BgiWQihqsM--hBiWA/viewform" target="_blank" rel="noreferrer" onClick={onClose} className="sidebar-link">
              <button className="ml-4 px-3 py-2 bg-[rgb(109,169,68)] text-white font-semibold shadow rounded">
                Apply For Funding
              </button>
            </Link>
          </li>

          <li className="sidebar-item">
            <Link to="https://givebutter.com/0nhBTh" target="_blank" rel="noreferrer" onClick={onClose} className="sidebar-link">
              <button className="px-3 py-2 bg-[rgb(195,41,58)] text-white font-semibold shadow rounded">
                Donate Now
              </button>
            </Link>
          </li>

        </ul>

        </div>
      </div>

      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
    </>
  );
}

export default Sidebar;

// import React from 'react';
import './Hamburger.css'; // Import the CSS file for hamburger menu styling

function Hamburger({ click, checkboxRef, handleToggle }) {
  return (
    <div className="burger-wrapper">
      <input
        type="checkbox"
        id="checkbox4"
        className="checkbox4 visuallyHidden"
        ref={checkboxRef}
        onChange={handleToggle}
        checked={click}
      />
      <label htmlFor="checkbox4">
        <div className={`hamburger hamburger4`}>
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
          <span className="bar bar5"></span>
        </div>
      </label>
      <div className={click ? "hamburger-text active" : "hamburger-text"} onClick={handleToggle}>
        MENU
      </div>
    </div>
  );
}

export default Hamburger;

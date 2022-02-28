import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";
import toggleButton from "../../assets/toggle-button.svg";
import closeButton from "../../assets/close-button.svg";

const MobileNavbar = () => {
  const [showToggle, setShowToggle] = useState(true);

  const handleToggle = () => setShowToggle(!showToggle);
  const closeToggleMenu = () => setShowToggle(true);

  return (
    <>
      <nav className="mobile-nav">
        <div className="mobile-nav-container">
          <Link
            to="/portfolio-website"
            className="mobile-nav-logo"
            onClick={closeToggleMenu}
          >
            LAURA LU
          </Link>
          <div className="mobile-toggle-menu-icon" onClick={handleToggle}>
            {showToggle ? (
              <img src={toggleButton} alt="menu" />
            ) : (
              <img src={closeButton} alt="close" />
            )}
          </div>
        </div>
      </nav>
      <div
        className={showToggle ? "mobile-nav-menu" : "mobile-nav-toggle-menu"}
      >
        <ul>
          <li className="mobile-nav-item">
            <Link
              to="/portfolio-website"
              className="mobile-nav-link"
              onClick={closeToggleMenu}
            >
              About Me
            </Link>
          </li>
          <li className="mobile-nav-item">
            <a
              href="https://drive.google.com/file/d/1Q9nc6aJ6DSRZUqxkkioWAtnvn6fgCcBK/view?usp=sharing"
              className="mobile-nav-link"
            >
              Resume
            </a>
          </li>
          <li className="mobile-nav-item">
            <Link
              to="/portfolio-website/Projects"
              className="mobile-nav-link"
              onClick={closeToggleMenu}
            >
              Projects
            </Link>
          </li>
          <li className="mobile-nav-item">
            <Link
              to="/portfolio-website/Contact"
              className="mobile-nav-link"
              onClick={closeToggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;

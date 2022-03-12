import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./DesktopNavbar.css";

function DesktopNavbar() {
  const location = useLocation().pathname;

  return (
    <>
      <nav className="nav">
        <div className="nav-menu">
          <ul>
            <li className="nav-item nav-logo">
              <Link to="/portfolio-website" className="nav-logo">
                LAURA LU
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio-website"
                className="nav-link"
                style={{
                  color: location === "/portfolio-website" && "#969696",
                }}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1Q9nc6aJ6DSRZUqxkkioWAtnvn6fgCcBK/view?usp=sharing"
                target="_blank"
                className="nav-link"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio-website/Projects"
                className="nav-link"
                style={{
                  color:
                    location === "/portfolio-website/Projects" && "#969696",
                }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio-website/Contact"
                className="nav-link"
                style={{
                  color: location === "/portfolio-website/Contact" && "#969696",
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default DesktopNavbar;

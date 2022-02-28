import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(window.innerWidth <= 1200);

  const checkSize = () => {
    if (window.innerWidth <= 1200) {
      setShowMobile(true);
    } else {
      setShowMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return <>{showMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
};

export default Navbar;

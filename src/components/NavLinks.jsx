import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";
import resume from "../pages/about/Gulam_Mustafa_Resume.pdf";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Gulam_Mustafa_Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <button
        className="dropdown-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/skills" onClick={() => setIsMenuOpen(false)}>
          Skills
        </NavLink>
        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </NavLink>
        <Link to="/downloaded" onClick={handleDownload}>
          {downloading ? "Downloading..." : "Resume"}
        </Link>
      </nav>
    </>
  );
};

export default NavLinks;

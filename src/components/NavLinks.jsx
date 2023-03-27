import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";
import resume from "../pages/about/Gulam_Mustafa_Resume.pdf";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [downloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Gulam_Mustafa_Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  };

  const resumeStyles = {
    width: "fit-content",
    margin: "auto",
    background: "#009e66",
    color: "#f9f9f9",
    marginTop: "-7px",
    padding: "12px var(--sm-spacing)",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
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
        <Link
          to="#home"
          smooth
          className="nav-link home"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="#about"
          smooth
          className="nav-link about"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="#skills"
          smooth
          className="nav-link skills"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="#projects"
          smooth
          className="nav-link projects"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="#contact"
          smooth
          className="nav-link contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <Link to="#home" smooth target="_blank" className="nav-link resume">
          <button
            id="resume-button-1"
            onClick={handleDownload}
            style={resumeStyles}
          >
            {downloading ? "Downloading..." : "Resume"}
          </button>
        </Link>
      </nav>
    </>
  );
};

export default NavLinks;

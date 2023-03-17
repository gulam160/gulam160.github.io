import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

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
    window.open(`${link.href}`);
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
        <Link
          to="#home"
          smooth
          class="nav-link home"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="#about"
          smooth
          class="nav-link about"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="#skills"
          smooth
          class="nav-link skills"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="#projects"
          smooth
          class="nav-link projects"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="#contact"
          smooth
          class="nav-link contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="#home"
          smooth
          target="_blank"
          class="nav-link resume"
          onClick={handleDownload}
        >
          {downloading ? "Downloading..." : "Resume"}
        </Link>
      </nav>
    </>
  );
};

export default NavLinks;

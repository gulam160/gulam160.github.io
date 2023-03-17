import NavLinks from "./NavLinks";
import logo from "../images/logosvg.svg";

const Header = () => {
  return (
    <header className="header" id="nav-menu">
      <img className="logo" src={logo} alt="logo" />
      <NavLinks />
    </header>
  );
};

export default Header;

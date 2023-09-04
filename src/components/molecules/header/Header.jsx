import Logo from "../../atoms/logo/Logo";
import Nav from "../nav/Nav";
import MobileNav from "../mobileNav/MobileNav";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <Logo />
      {isOpen ? <MobileNav /> : <Nav />}
      <div
        onClick={() => setIsOpen((cur) => !cur)}
        className={`menu-toggle ${isOpen ? "menu__toggle-open" : ""}`}>
        {isOpen ? "X" : "="}
      </div>
    </header>
  );
};

export default Header;

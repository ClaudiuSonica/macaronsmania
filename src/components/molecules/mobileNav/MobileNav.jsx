import "./MobileNav.scss";
import NavItem from "../../atoms/navItem/NavItem";

const MobileNav = () => {
  const items = [
    "Home",
    "About Us",
    "Menu",
    "Contact",
  ]

  return (
    <nav className="nav__mobile">
      <ul className="nav__list__mobile">
        {items.map((item, i) => (
          <NavItem key={i} link={item} />
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
import "./Nav.scss";
import phone from "/assets/phone.svg";
import shopping from "/assets/shopping.png";
import NavItem from "../../atoms/navItem/NavItem";

const Nav = () => {
  const items = [
    "Home",
    "About Us",
    "Menu",
    "Contact",
  ]

  return (
    <nav className="nav">
      <ul className="nav__list">
        {items.map((item, i) => (
          <NavItem key={i} link={item} />
        ))}
        <li className="nav__item">
          <div className="nav__phone">
            <img className="phone__img" src={phone} alt="phone image" />
            <a className="nav__link" href="#">
              +1 234 567 890
            </a>
            <button className="nav__btn">
              <img className="shopping__img" src={shopping} alt="shopping image" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

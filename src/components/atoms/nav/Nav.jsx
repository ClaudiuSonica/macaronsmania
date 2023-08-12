import "./Nav.scss";
import phone from "/assets/phone.svg";
import shopping from "/assets/shopping.png";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            About Us
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Menu
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Contact{" "}
          </a>
        </li>
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

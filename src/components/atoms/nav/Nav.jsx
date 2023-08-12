import "./Nav.scss";
import phone from "/assets/phone.svg"; 

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#">Home</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">About Us</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">Menu</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">Contact </a>
        </li>
        <li className="nav__item">
          <div className="nav__phone">
            <img className="phone__img" src={phone} alt="phone image" />
            <a className="nav__link" href="#">+1 234 567 890</a>
          </div>
        </li>
        <li className="nav__item">
          <button className="nav__btn"></button>
        </li>
      </ul>
    </nav>
  );
};

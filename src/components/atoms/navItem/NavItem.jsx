/* eslint-disable react/prop-types */
import "./NavItem.scss";

const NavItem = ({ link }) => {
  return (
    <li className="nav__item">
      <a className="nav__link" href={link}>{link}</a>
    </li>
  )
}

export default NavItem;
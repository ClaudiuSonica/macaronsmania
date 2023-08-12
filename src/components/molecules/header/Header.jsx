import { Logo } from "../../atoms/logo/Logo";
import { Nav } from "../../atoms/nav/Nav";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  )
}
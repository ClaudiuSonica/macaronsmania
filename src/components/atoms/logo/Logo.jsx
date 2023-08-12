import "./Logo.scss";
import logo from "/assets/logo.png";

export const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__img">
        <img src={logo} alt="logo" />
      </div>
      <h1 className="logo__title">Macaronsmania</h1> 
    </div>
  )
}
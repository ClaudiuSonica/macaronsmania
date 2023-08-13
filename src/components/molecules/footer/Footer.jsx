import { useState } from "react";
import "./Footer.scss";
import Logo from "../../atoms/logo/Logo";
import insta from "/assets/instagram.svg";
import fb from "/assets/facebook.svg";
import tw from "/assets/twitter.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer__vector"></div>
      <div className="footer__socials">
        <img src={fb} alt="facebook" />
        <img src={tw} alt="twitter" />
        <img src={insta} alt="instagram" />
      </div>
      <div className="footer__content">
        <Logo />
        <form onSubmit={(e) => e.preventDefault()} className="form">
          <h3 className="form__title">
            Subscribe to the newsletter and be aware of promotions
          </h3>
          <div className="form__action">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              className="form__input"
              type="email"
              placeholder="Your email"
            />
            <button className="form__btn">Send</button>
          </div>
        </form>
        <div className="footer__row">
          <div className="row__contacts">
            <h3 className="contacts__title">Contacts</h3>
            <p className="contacts__phone">+123456789</p>
            <p className="contacts__email">macaronsmania@gmail.com</p>
          </div>
          <div className="row__program">
            <h3 className="program__title">Working Hours</h3>
            <p className="program__text">Mon-Sun from 09:00 to 20:00</p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="copyright__text">
          {year} &copy;Macaronsmania. All Rights Reserved.
        </p>
        <p className="copyright__text">Created by Claudiu Sonica</p>
      </div>
    </footer>
  );
};

export default Footer;

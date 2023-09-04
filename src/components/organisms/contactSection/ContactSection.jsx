import "./ContactSection.scss";
import map from "/assets/map.png";

const ContactSection = () => {
  return (
    <section className="section__contact">
      <h2 className="contact__title">How to find us?</h2>
      <h3 className="contact__subtitle">
        If you want to visit us, you can find up-to-date information about our
        confectionery here.
      </h3>
      <div className="contact__info">
        <div className="info__details">
          <div className="details__row">
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
          <div className="details__row">
            <div className="row__location">
              <h3 className="location__title">Location</h3>
              <p className="location__city">c.Paris</p>
              <p className="location__street">
                Rue Raspail, 92300 Levallois-Perret
              </p>
            </div>
            <div className="row__media">
              <h3 className="media__title">Social Media</h3>
              <p className="media__insta">Instagram: macarons_mania</p>
              <p className="media__fb">Facebook: macarons_mania</p>
              <p className="media__tw">Twitter: macarons_mania</p>
            </div>
          </div>
        </div>
        <div className="info__map">
          <img src={map} alt="map" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

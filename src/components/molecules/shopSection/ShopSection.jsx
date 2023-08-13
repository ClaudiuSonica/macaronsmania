import "./ShopSection.scss";
import data from "../../../data";
import MacaronsCard from "../../atoms/macaronsCard/MacaronsCard";
import arrowL from "/assets/arrow-l.svg";
import arrowR from "/assets/arrow-r.svg";
import dots from "/assets/dots.svg"

const ShopSection = () => {
  const { sets } = data;
  return (
    <section className="section__shop">
      <div className="shop__vector"></div>
      <h2 className="shop__title">{sets.title}</h2>
      <h3 className="shop__subtitle">{sets.subtitle}</h3>
      <div className="shop__cards">
        <img className="cards__arrow" src={arrowL} alt="arrow" />
        {sets.items.map((item) => {
          return (
            <MacaronsCard
              key={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              button={item.button}
            />
          );
        })}
        <img className="cards__arrow" src={arrowR} alt="arrow" />
      </div>
      <div className="shop__dots">
        <img src={dots} alt="dots" />
      </div>
      <div className="contact__vector"></div>
    </section>
  );
};

export default ShopSection;

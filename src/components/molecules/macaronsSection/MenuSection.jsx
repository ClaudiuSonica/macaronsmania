import "./MenuSection.scss";
import data from "../../../data";
import dots from "/assets/dots.svg";
import arrowL from "/assets/arrow-l.svg";
import arrowR from "/assets/arrow-r.svg";
import MenuCard from "../../atoms/macaronsCard/MenuCard";

const MenuSection = () => {
  const { menu } = data;

  return (
    <section className="section__menu">
      <div className="menu__vector"></div>
      <h2 className="menu__title">{menu.title}</h2>
      <h3 className="menu__subtitle">{menu.subtitle}</h3>
      <div className="menu__cards">
        <img className="cards__arrow" src={arrowL} alt="arrow" />
        {menu.items.map((item) => {
          return (
            <MenuCard
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
      <div className="menu__dots">
        <img src={dots} alt="dots" />
      </div>
    </section>
  );
};

export default MenuSection;

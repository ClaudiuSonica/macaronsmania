import "./DetailsSection.scss";
import DetailsCard from "../../atoms/detailsCard/DetailsCard";
import data from "../../../data";

const DetailsSection = () => {
  const { details } = data;
  return (
    <section className="section__details">
      <h2 className="details__title">{details.title}</h2>
      <h3 className="details__subtitle">{details.subtitle}</h3>
      <div className="details__cards">
        {details.items.map((item) => {
          return (
            <DetailsCard
              key={item.id}
              title={item.title}
              info={item.info}
              img={item.img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DetailsSection;

/* eslint-disable react/prop-types */
import "./MacaronsCard.scss";
import heart from "/assets/heart.png";

const MacaronsCard = (props) => {
  return (
    <div className="card">
      <img className="card__heart" src={heart} alt="select favorite icon" />
      <div className="card__img">
        <img src={props.img} alt={props.title} />
      </div>
      <h2 className="card__title">{props.title}</h2>
      <div className="card__info">
        <p className="card__price">{ `Price: ${props.price}$` }</p>
        <button className="card__button">{props.button}</button>
      </div>
    </div>
  );
};

export default MacaronsCard;

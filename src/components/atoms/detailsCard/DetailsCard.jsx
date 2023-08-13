/* eslint-disable react/prop-types */
import "./DetailsCard.scss";

const DetailsCard = (props) => {
  return (
    <div className="details__card">
      <div className="card__img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="card__info">
        <h2 className="info__title">{props.title}</h2>
        <p className="info__text">{props.info}</p>
      </div>
    </div>
  )
}

export default DetailsCard;

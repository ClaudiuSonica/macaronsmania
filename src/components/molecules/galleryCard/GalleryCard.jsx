/* eslint-disable react/prop-types */
import "./GalleryCard.scss";

const GalleryCard = (props) => {
  return (
    <div className="gallery__img">
      <img src={props.img} alt="macarons" />
    </div>
  )
};

export default GalleryCard;
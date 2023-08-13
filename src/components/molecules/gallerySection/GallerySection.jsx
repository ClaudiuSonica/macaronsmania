import "./GallerySection.scss";
import GalleryCard from "../../atoms/galleryCard/GalleryCard";
import data from "../../../data";

const GallerySection = () => {
  const { gallery } = data;

  return (
    <section className="section__gallery">
      <h2 className="gallery__title">{gallery.title}</h2>
      <h3 className="gallery__subtitle">{gallery.subtitle}</h3>
      <div className="gallery__cards">
        {gallery.items.map((item) => {
          return (
            <GalleryCard
              key={item.id}
              img={item.img}
            />
          );
        })}
      </div>
    </section>
  )
}

export default GallerySection;

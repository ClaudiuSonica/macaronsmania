import DetailsSection from "../../molecules/detailsSection/DetailsSection";
import GallerySection from "../../molecules/gallerySection/GallerySection";
import MenuSection from "../../molecules/menuSection/MenuSection";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <>
      <DetailsSection />
      <MenuSection />
      <GallerySection />
    </>
  );
};

export default MainContent;

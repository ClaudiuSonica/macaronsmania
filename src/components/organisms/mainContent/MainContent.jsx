import ContactSection from "../../molecules/contactSection/ContactSection";
import DetailsSection from "../../molecules/detailsSection/DetailsSection";
import GallerySection from "../../molecules/gallerySection/GallerySection";
import MenuSection from "../../molecules/menuSection/MenuSection";
import ShopSection from "../../molecules/shopSection/ShopSection";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <>
      <DetailsSection />
      <MenuSection />
      <GallerySection />
      <ShopSection />
      <ContactSection />
    </>
  );
};

export default MainContent;

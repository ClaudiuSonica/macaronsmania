import ContactSection from "../../organisms/contactSection/ContactSection";
import DetailsSection from "../../organisms/detailsSection/DetailsSection";
import GallerySection from "../../organisms/gallerySection/GallerySection";
import MenuSection from "../../organisms/menuSection/MenuSection";
import ShopSection from "../../organisms/shopSection/ShopSection";
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

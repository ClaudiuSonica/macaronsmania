import "./Hero.scss";
import macarons from "/assets/img-center.png";

const Hero = () => {
  return (
    <section className="section__hero">
      <div className="hero__images__top">
        <div className="img__top-l"></div>
        <div className="img__top-r"></div>
      </div>
      <div className="hero__text">
        <h1 className="hero__title">Welcome in our store</h1>
        <h2 className="hero__subtitle">
          We know the recipe for happiness and we are ready to share it with
          you.
        </h2>
      </div>
      <div className="hero__img__center">
        <img src={macarons} alt="stack of macarons" />
      </div>
      <div className="hero__images__bottom">
        <div className="img__bottom-l"></div>
        <div className="img__bottom-r"></div>
      </div>
      <div className="hero__vector"></div>
    </section>
  );
};

export default Hero;

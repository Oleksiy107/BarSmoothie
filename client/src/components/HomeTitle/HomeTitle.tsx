import "./HomeTitle.scss";

export const HomeTitle: React.FC = () => {
  return (
    <section className="home-title">
      <h1 className="home-title__title">New Drink, New Day</h1>
      <div className="home-title__text">
        <p>
          With our wide variety of smoothies and healthy drinks, we are sure to
          help you make the right choice to start your day.
        </p>
      </div>
      <a href="#shop" className="home-title__button">
        Shop now
      </a>
    </section>
  );
};

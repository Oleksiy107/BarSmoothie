import "./Subscribe.scss";

export const Subscribe: React.FC = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__wrap container">
        <div className="subscribe__text-block">
          <h2 className="subscribe__title">
            STAY
            <span className="subscribe__title-span"> CONNECTED</span>
          </h2>
          <p>Subscribe to our newsletter</p>
        </div>
        <div className="subscribe__input-holder">
          <input
            type="text"
            placeholder="Enter your e-mail address *"
            className="subscribe__input"
          />
          <button className="subscribe__button">subscribe</button>
        </div>
      </div>
    </section>
  );
};

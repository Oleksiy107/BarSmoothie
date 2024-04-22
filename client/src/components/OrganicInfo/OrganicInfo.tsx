import { OurAdvantages } from "../OurAdvantages/OurAdvantages";
import "./OrganicInfo.scss";

const organicImageSrc = "/static/images/organicSmoothie.png";
const barnImgSrc = "/static/images/advantages-barn.png";
const starImgSrc = "/static/images/advantages-star.png";
const fieldsImgSrc = "/static/images/advantages-fields.png";
const wheatImgSrc = "/static/images/advantages-wheat.png";

export const OrganicInfo: React.FC = () => {
  return (
    <section className="organic-info">
      <div className="organic-info__wrap container">
        <div className="organic-info__advantages">
          <OurAdvantages
            title="100% ORGANIC"
            image={barnImgSrc}
            napravlenie="default"
          >
            We make our products from 100% organic and fresh ingredients full of
            vitamins and nutrients.
          </OurAdvantages>
          <span className="organic-info__line"></span>
          <OurAdvantages
            title="GOOD FOR HEALTH"
            image={starImgSrc}
            napravlenie="default"
          >
            Our drinks are exceptionally good for hoosting your health and
            increasing your energy level.
          </OurAdvantages>
        </div>
        <div className="organic-info__img-wrap">
          <img src={organicImageSrc} alt="organic-image" />
        </div>
        <div className="organic-info__advantages">
          <OurAdvantages
            title="NO ADDITIVES"
            image={fieldsImgSrc}
            napravlenie="reverse"
          >
            Our smoothies, healthy drinks, and energy howls contain no
            artificial additives, only vital elements.
          </OurAdvantages>
          <span className="organic-info__line"></span>
          <OurAdvantages
            title="A LOT OF ENERGY"
            image={wheatImgSrc}
            napravlenie="reverse"
          >
            We designed our products as the universal organic energetics that
            can quench your thirst.
          </OurAdvantages>
        </div>
      </div>
    </section>
  );
};

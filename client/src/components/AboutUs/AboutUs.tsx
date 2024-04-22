import { PageIntro } from "../PageIntro/PageIntro";
import { RoutePath } from "../RoutePath/RoutePath";
import "./AboutUs.scss";

const firstImageSrc = "/static/images/about-us-1.jpg";
const secondImageSrc = "/static/images/about-us-2.jpg";

export const AboutUs: React.FC = () => {
  return (
    <>
      <PageIntro title="about us">
        Get to know us as a team better and learn about our life in this bar
      </PageIntro>
      <RoutePath />
      <section className="about-us">
        <div className="container">
          <div className="about-us__box">
            <div className="about-us__img">
              <img src={firstImageSrc} alt="img-description" />
            </div>
            <div className="about-us__info">
              <h2 className="about-us__title">
                {" "}
                Inspiration and Passion for a Healthy Lifestyle
              </h2>
              <div className="about-us__text">
                <p>
                  Welcome to our world of delicious and nutritious smoothies! We
                  are a team of enthusiasts dedicated to promoting a healthy way
                  of life and using natural ingredients.
                  <br />
                  <br />
                  Our smoothies are not just beverages; they are a work of art
                  in every bottle. We carefully select fresh fruits, vegetables,
                  and berries to create true taste masterpieces for you. With
                  every sip, you will experience our commitment to quality and
                  our concern for your well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="about-us__box">
            <div className="about-us__img">
              <img src={secondImageSrc} alt="image-description" />
            </div>
            <div className="about-us__info">
              <div className="about-us__text">
                <p>
                  We take pride in what we do. Our goal is not only to treat you
                  to delightful drinks but also to inspire you to embrace a
                  healthy lifestyle. We believe that taking care of your body is
                  taking care of yourself.
                  <br />
                  <br />
                  Join us on this flavorful and wholesome journey. Taste our
                  smoothies and immerse yourself in the world of health and
                  vitality. We await you in our cozy corner of joy and energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

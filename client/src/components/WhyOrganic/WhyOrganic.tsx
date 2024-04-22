import { useState, useEffect } from "react";
import { WhyOrganicItem } from "./WhyOrganicItem";
import { WhyOrganicCard } from "./WhyOrganicCard";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./WhyOrganic.scss";
import "swiper/scss";
import "swiper/scss/pagination";
import { WhyOrganicSwiperItem } from "./WhyOrganicSwiperItem";
import { ReduxStore } from "../../globalTypes/storeTypes";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const whyOrganicList = [
  {
    title: "Organic drinks contain more antioxidants.",
    text: "There are many substances that can act as antioxidants; chief among them are vitamins A and C, as well as beta-carotene and manganese. A lack of antioxidant-rich foods can lead to a greater risk of atherosclerosis.",
  },
  {
    title: "Organic drinks are better for the environment.",
    text: "While you’re helping yourself be as healthy as can be, how about helping the environment and your fellow humans? Organic farming practices help conserve water and improve soil quality. Given the droughts we see occurring every year and the dire reports from environmental experts, these are no small reasons to go organic.",
  },
  {
    title: "They’re higher in nutrients.",
    text: "Along with fewer pesticides, this is probably the No. 1 reason folks decide to eat organic. Studies have shown that organic drinks are often higher in vitamin C, iron, magnesium, and phosphorous than their non-organic counterparts.",
  },
];

const whyOrganicCards = [
  {
    title: "FREE SHIPPING",
    text: "Enjoy our fast & free delivery",
  },
  {
    title: "CUSTOMER CARE",
    text: "Always ready to help you",
  },
  {
    title: "HEALTHY & ENERGETIC",
    text: "Our drinks are very nutritious.",
  },
];

export const WhyOrganic: React.FC = () => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const templates = useTypedSelector((state) => state.templates);

  const [whatAnOpen, setWhatAnOpen] = useState<boolean[]>([]);

  useEffect(() => {
    const initialArray = new Array(whyOrganicList.length);
    const filledArray = initialArray.fill(false);
    filledArray[0] = true;

    setWhatAnOpen(filledArray);
  }, []);

  return (
    <section className="why-organic">
      <div className="container">
        <div className="why-organic__top-content">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            className="why-organic__swiper"
          >
            {templates.map((item, index) => (
              <SwiperSlide key={index}>
                <WhyOrganicSwiperItem {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="why-organic__text-block">
            <h2 className="why-organic__title">Why Organic?</h2>
            <ul className="why-organic__list">
              {whyOrganicList.map(({ title, text }, index) => (
                <WhyOrganicItem
                  title={title}
                  text={text}
                  index={index}
                  key={index}
                  whatAnOpen={whatAnOpen}
                  setWhatAnOpen={setWhatAnOpen}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="why-organic__bottom-content">
          {whyOrganicCards.map(({ title, text }, index) => (
            <WhyOrganicCard title={title} text={text} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

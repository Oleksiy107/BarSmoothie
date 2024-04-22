import { ReviewsSlideItem } from "./ReviewsSlideItem";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Reviews.scss";
import "swiper/scss";
import "swiper/scss/pagination";

const userReviewList = [
  {
    userPhoto:
      "https://livedemo00.template-help.com/wt_prod-27078/images/team-5-270x227.jpg",
    userMessage:
      "I’m very grateful to you for introducing me and my whole family to your extensive range of smoothies and organic juices. We are true fans and regular customers of your store!",
    userFullname: "PATRIC GOORMAN",
    userStatus: "Client",
  },
  {
    userPhoto:
      "https://livedemo00.template-help.com/wt_prod-27078/images/team-4-270x227.jpg",
    userMessage:
      "I am amazed and extremely satisfied by your smoothies, their taste, and the customer service you provide to unexperienced clients who know nothing about organic drinks.",
    userFullname: "KATE SMITH",
    userStatus: "Client",
  },
  {
    userPhoto:
      "https://livedemo00.template-help.com/wt_prod-27078/images/team-7-270x227.jpg",
    userMessage:
      "Your healthy drinks have a wonderful taste and the amazing selection of their flavors is what really attracts me in your store. Thank you for fast delivery and your fresh drinks!",
    userFullname: "SAM WILSON",
    userStatus: "Client",
  },
];

export const Reviews: React.FC = () => {
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="reviews__title">What People Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          className="reviews__swiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
        >
          {userReviewList.map((sliderList, index) => (
            <SwiperSlide key={index}>
              <ReviewsSlideItem {...sliderList} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

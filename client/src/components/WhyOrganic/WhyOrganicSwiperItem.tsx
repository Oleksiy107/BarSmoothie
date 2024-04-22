import { useState, useEffect } from "react";
import { TemplateItem } from "../../globalTypes/storeTypes";

export const WhyOrganicSwiperItem: React.FC<TemplateItem> = ({
  name,
  portionSize,
  ingredients,
  imageSrc,
  itemId,
  count,
}) => {
  const [currentPrice, setCurrentPrice] = useState<number>(0);

  useEffect(() => {
    const price = ingredients.reduce(
      (acc, { amount, multiple, literPrice }) =>
        acc + ((amount * multiple) / 1000) * literPrice,
      0
    );

    const discount = 0.1 * price;
    const discountPrice = price - discount;

    setCurrentPrice(discountPrice);
  }, []);

  return (
    <div className="why-organic__swiper-item">
      <div className="why-organic__swiper-image">
        <img src={imageSrc} alt={name} />
      </div>
      <h3 className="why-organic__swiper-title">{name}</h3>
      <span className="why-organic__swiper-price">
        {currentPrice.toFixed(2)}$
      </span>
    </div>
  );
};

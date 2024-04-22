import React, { useState, useEffect } from "react";
import {
  ReduxStore,
  TemplateItem as TemplateItemType,
} from "../../globalTypes/storeTypes";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  addBasketItem,
  addItemCount,
} from "../../store/reducers/basketReducer";

export const TemplateItem: React.FC<TemplateItemType> = ({
  name,
  portionSize,
  ingredients,
  imageSrc,
  itemId,
  count,
}) => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const basketItems = useTypedSelector((state) => state.basket.items);
  const dispatch = useDispatch();
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

  const addToBasket = () => {
    const existedSmoothie = basketItems.find((item) => item.itemId === itemId);

    if (existedSmoothie) {
      dispatch(addItemCount(itemId));
    } else {
      dispatch(
        addBasketItem({
          name,
          portionSize,
          ingredients,
          imageSrc,
          itemId,
          price: currentPrice,
          count,
        })
      );
    }
  };

  return (
    <li className="templates__item">
      <div className="templates__item-image">
        <img src={imageSrc} alt={itemId} />
      </div>
      <h3 className="templates__item-title">{name}</h3>
      <span className="templates__item-span">{currentPrice.toFixed(2)}$</span>
      <div className="templates__hover-block">
        <div>
          <h2 className="templates__hover-title">{name}</h2>
          <div className="templates__hover-portion">
            <p>Portion: {portionSize} ml</p>
          </div>
          <span>Ingredients:</span>
          <ul className="templates__hover-list">
            {ingredients.map(({ id, name, amount, multiple }) => (
              <li key={id} className="templates__hover-item">
                {name} {amount * multiple} ml
              </li>
            ))}
          </ul>
        </div>
        <button className="templates__hover-button" onClick={addToBasket}>
          Purchase now
        </button>
      </div>
    </li>
  );
};

import React, { useState } from "react";
import { BasketItem as TypeBasketItem } from "../../globalTypes/storeTypes";
import { useDispatch } from "react-redux";
import {
  addItemCount,
  removeBasketItem,
  removeItemCount,
} from "../../store/reducers/basketReducer";

export const BasketItem: React.FC<TypeBasketItem> = ({
  name,
  portionSize,
  ingredients,
  imageSrc,
  itemId,
  price,
  count,
}) => {
  const dispatch = useDispatch();
  const [shownAlert, setShownAlert] = useState<boolean>(false);

  const decreaseCountHandler = () => {
    if (count === 1) return;

    dispatch(removeItemCount(itemId));
  };

  const increaseCountHandler = () => {
    dispatch(addItemCount(itemId));
  };

  const callAlert = () => {
    setShownAlert(!shownAlert);
  };

  const removeItemHandler = () => {
    dispatch(removeBasketItem(itemId));
  };

  return (
    <li className="basket__item">
      <div className="basket__item-info">
        <div className="basket__item-image">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="basket__item-details">
          <h3 className="basket__item-title">{name}</h3>
          <span className="basket__item-portion">
            Portion: {portionSize} ml
          </span>
          <ul className="basket__item-ingredients-list">
            {ingredients.map(({ name, multiple, amount, id }, index) => (
              <li className="basket__item-ingredients-item" key={id}>
                {name} ({(amount * multiple).toFixed(2)} ml)
                {index === ingredients.length - 1 ? "" : ","}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="basket__item-utils">
        <span className="basket__item-price">
          Price: <span>{price.toFixed(2)}$</span>
        </span>
        <div className="basket__item-counts">
          <button
            className="basket__item-button"
            onClick={decreaseCountHandler}
          >
            -
          </button>
          <span className="basket__item-count-number">x{count}</span>
          <button
            className="basket__item-button"
            onClick={increaseCountHandler}
          >
            +
          </button>
        </div>
      </div>
      <div onClick={callAlert} className="basket__remove-item"></div>
      {shownAlert && (
        <div className={`basket__remove-alert ${shownAlert ? "active" : ""}`}>
          <div className="basket__remove-alert-text">
            <p>Are you sure you want to delete this smoothie? </p>
          </div>
          <div className="basket__remove-btn-holder">
            <button className="basket__remove-btn" onClick={removeItemHandler}>
              Yes
            </button>
            <button className="basket__remove-btn" onClick={callAlert}>
              No
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

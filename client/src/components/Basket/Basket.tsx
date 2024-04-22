import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import "./Basket.scss";
import { closeBasket } from "../../store/reducers/basketReducer";
import { ReduxStore } from "../../globalTypes/storeTypes";
import { useEffect, useState } from "react";
import { BasketItem } from "./BasketItem";
import { Link } from "react-router-dom";
import { BasketForm } from "./BasketForm";
import { BasketInfo } from "./BasketInfo";

export const Basket: React.FC = () => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const isBasketOpen = useTypedSelector((state) => state.basket.isBasketOpen);
  const basketItems = useTypedSelector((state) => state.basket.items);
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState<string>("");
  const [totalSmoothies, setTotalSmoothies] = useState<number>(0);
  const [isFormActive, setFormActive] = useState<boolean>(false);
  const [showUserDetail, setShowUserDetail] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(isBasketOpen);
  }, []);

  useEffect(() => {
    const totalPrice = basketItems.reduce(
      (acc, { price, count }) => acc + price * count,
      0
    );
    const correctPrice = totalPrice.toFixed(2);
    setTotalPrice(correctPrice);

    const totalSmoothie = basketItems.reduce(
      (acc, { count }) => acc + count,
      0
    );

    setTotalSmoothies(totalSmoothie);
  }, [basketItems]);

  const callForm = () => {
    setFormActive(true);
  };

  const closeBasketHandler = ({ target, currentTarget }: React.MouseEvent) => {
    if (
      target === currentTarget ||
      currentTarget.id === "basket-empty-button"
    ) {
      setIsActive(false);
      setTimeout(() => {
        dispatch(closeBasket());
      }, 300);
    }
  };

  return (
    <div
      className={`basket ${isActive ? "active" : ""}`}
      onClick={closeBasketHandler}
    >
      <div
        className={`basket__box ${isActive ? "active" : ""} ${
          basketItems.length === 0 ? "empty" : ""
        }`}
      >
        {basketItems.length > 0 ? (
          <>
            <b className="basket__title">
              {totalSmoothies} smoothie for {totalPrice}$.
            </b>
            <ul className="basket__list">
              {basketItems.map((item) => (
                <BasketItem {...item} key={item.itemId} />
              ))}
            </ul>
            <div className="basket__purchase">
              <div className="basket__total-smoothies">
                <span>{basketItems.length} smoothies</span>
                <span>{totalPrice}$</span>
              </div>
              <div className="basket__total-price">
                <span>Total price: </span>
                <span>{totalPrice}$</span>
              </div>
              <button className="basket__purchase-button" onClick={callForm}>
                Purchase Now
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="basket__empty-basket">
              <div className="basket__empty-basket-text">
                <p>
                  Nothing added right now. You can create smoothies in the
                  constructor.
                </p>
              </div>
              <Link
                to={"/constructor"}
                className="basket__empty-basket-button"
                id="basket-empty-button"
                onClick={closeBasketHandler}
              >
                Go to constructor
              </Link>
            </div>
          </>
        )}
      </div>
      {isFormActive && (
        <BasketForm
          setFormActive={setFormActive}
          setShowUserDetail={setShowUserDetail}
        />
      )}

      {showUserDetail && (
        <BasketInfo
          totalPrice={totalPrice}
          setShowUserDetail={setShowUserDetail}
        />
      )}
    </div>
  );
};

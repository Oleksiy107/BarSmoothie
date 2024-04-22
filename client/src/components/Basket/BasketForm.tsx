import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/reducers/userDataReducer";

type BasketFormProps = {
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  setShowUserDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BasketForm: React.FC<BasketFormProps> = ({
  setFormActive,
  setShowUserDetail,
}) => {
  const [telState, setTelState] = useState<string>("");
  const [nameState, setNameState] = useState<string>("");
  const [deliveryState, setDeliveryState] = useState<string>("");
  const [adressState, setAdressState] = useState<string>("");
  const dispatch = useDispatch();

  const telChangeHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*$/;

    if (regex.test(value)) {
      setTelState(value);
    }
  };

  const deliveryChange = ({
    target: { id },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryState(id);
  };

  const closeForm = ({ target, currentTarget }: React.MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }

    setFormActive(false);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (deliveryState === "delivery") {
      dispatch(
        setUserData({
          userName: nameState,
          userTel: telState,
          deliveryType: deliveryState,
          adress: adressState,
        })
      );
    } else {
      dispatch(
        setUserData({
          userName: nameState,
          userTel: telState,
          deliveryType: deliveryState,
        })
      );
    }

    setFormActive(false);
    setShowUserDetail(true);
  };

  return (
    <div className="basket__backdrop" onClick={closeForm}>
      <form action="" className="basket__form" onSubmit={submitHandler}>
        <div className="basket__pair">
          <label htmlFor="form-name">Name:</label>
          <input
            type="text"
            id="form-name"
            className="basket__input"
            value={nameState}
            onChange={({ target: { value } }) => setNameState(value)}
          />
        </div>
        <div className="basket__pair">
          <label htmlFor="form-tel">Tel: </label>
          <input
            type="tel"
            name="tel"
            id="form-tel"
            className="basket__input"
            value={telState}
            onChange={telChangeHandler}
            required
          />
        </div>
        <div className="basket__radio-box">
          <div className="basket__pair">
            <label htmlFor="delivery">Delivery</label>
            <input
              type="radio"
              name="delivery-type"
              id="delivery"
              value={"delivery"}
              onChange={deliveryChange}
              required
            />
          </div>
          <div className="basket__pair">
            <label htmlFor="self-pickup">Self-pickup</label>
            <input
              type="radio"
              name="delivery-type"
              id="self-pickup"
              value={"self-pickup"}
              onChange={deliveryChange}
              required
            />
          </div>
        </div>
        {deliveryState === "delivery" && (
          <div className="basket__pair">
            <label htmlFor="">Adress</label>
            <input
              type="text"
              className="basket__input"
              required={deliveryState === "delivery" ? true : false}
              value={adressState}
              onChange={({ target: { value } }) => setAdressState(value)}
            />
          </div>
        )}
        <button className="basket__form-purchase">Purchase</button>
      </form>
    </div>
  );
};

import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReduxStore } from "../../globalTypes/storeTypes";

type BasketInfoProps = {
  totalPrice: string;
  setShowUserDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BasketInfo: React.FC<BasketInfoProps> = ({
  totalPrice,
  setShowUserDetail,
}) => {
  const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
  const userData = useTypedSelector((state) => state.userData);

  const closeInfo = ({ target, currentTarget }: React.MouseEvent) => {
    if (target !== currentTarget) return;

    setShowUserDetail(false);
  };

  return (
    <div className="basket__backdrop" onClick={closeInfo}>
      <div className="basket__user-info">
        <p>Usen name: {userData.userName}</p>
        <p>User telephone: {userData.userTel}</p>
        <p>Delivery type: {userData.deliveryType}</p>

        {userData.adress && <p>User adress: {userData.adress}</p>}

        <p>Total price: {totalPrice}$</p>
      </div>
    </div>
  );
};

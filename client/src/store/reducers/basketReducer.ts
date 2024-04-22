import { createSlice } from "@reduxjs/toolkit";
import { Basket } from "../../globalTypes/storeTypes";

const initialState: Basket = {
  items: [],
  isBasketOpen: false,
};

const basketSlice = createSlice({
  name: "basket",
  initialState: initialState,
  reducers: {
    addBasketItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeBasketItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter(({ itemId }) => itemId !== action.payload),
      };
    },
    addItemCount: (state, action) => {
      return {
        ...state,
        items: state.items.map((item) => {
          return item.itemId !== action.payload
            ? item
            : { ...item, count: item.count + 1 };
        }),
      };
    },
    removeItemCount: (state, action) => {
      return {
        ...state,
        items: state.items.map((item) => {
          return item.itemId !== action.payload
            ? item
            : { ...item, count: item.count - 1 };
        }),
      };
    },
    openBasket: (state) => {
      return { ...state, isBasketOpen: true };
    },
    closeBasket: (state) => {
      return { ...state, isBasketOpen: false };
    },
  },
});

export const {
  openBasket,
  closeBasket,
  addBasketItem,
  removeBasketItem,
  addItemCount,
  removeItemCount,
} = basketSlice.actions;
export default basketSlice.reducer;

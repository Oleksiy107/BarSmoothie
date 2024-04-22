import { createSlice } from "@reduxjs/toolkit";
import { ConstuctorIngredientItem } from "../../globalTypes/storeTypes";

const initialState: ConstuctorIngredientItem[] = [];

const templateIngredientsSlice = createSlice({
  name: "template-ingredients",
  initialState: initialState,
  reducers: {
    resetCurrIngredient: () => [],
    addNewIngredient: (state, action) => {
      state.push(action.payload);
    },
    addExistedIngredient: (state, action) => {
      return state.map((ingredient) => {
        return ingredient.id === action.payload
          ? { ...ingredient, multiple: ingredient.multiple + 1 }
          : ingredient;
      });
    },
    removeMultsIngredient: (state, action) => {
      return state.map((ingredient) => {
        return ingredient.id === action.payload
          ? { ...ingredient, multiple: ingredient.multiple - 1 }
          : ingredient;
      });
    },
    removeIngredient: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
    recalculateAmount: (state, action) => {
      const totalMultiples = state.reduce(
        (acc, { multiple }) => acc + multiple,
        0
      );

      const ingredientCoef =
        Math.round((action.payload / totalMultiples) * 100) / 100;

      return state.map((ingredient) => ({
        ...ingredient,
        amount: ingredientCoef * ingredient.multiple,
      }));
    },
  },
});

export const {
  resetCurrIngredient,
  addNewIngredient,
  addExistedIngredient,
  removeMultsIngredient,
  removeIngredient,
  recalculateAmount,
} = templateIngredientsSlice.actions;
export default templateIngredientsSlice.reducer;

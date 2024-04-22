import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IngredientList } from "../../globalTypes/storeTypes";

const initialState: IngredientList = {
  fruits: [
    {
      id: "empty",
      inStock: false,
      name: "Empty",
      literPrice: 0,
    },
  ],
  vegetables: [
    {
      id: "empty",
      inStock: false,
      name: "Empty",
      literPrice: 0,
    },
  ],
};

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchAll",
  async () => {
    const ingredientsFetch = await fetch("/ingredients");
    const ingredients = await ingredientsFetch.json();
    return ingredients;
  }
);

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: initialState,
  reducers: {
    setIngredients: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIngredients.fulfilled, (_, action) => action.payload);
  },
});

export const { setIngredients } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;

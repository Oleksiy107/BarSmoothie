import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PortionItem } from "../../globalTypes/storeTypes";

const initialState: PortionItem[] = [{ name: "Empty", id: "empty", size: 0 }];

export const fetchPortionSize = createAsyncThunk(
  "portionsSize/fetchAll",
  async () => {
    const portionsSizeFetch = await fetch("/portion-sizes");
    const portionsSize = await portionsSizeFetch.json();
    return portionsSize;
  }
);

const portionSlice = createSlice({
  name: "portion",
  initialState: initialState,
  reducers: {
    setPortion: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPortionSize.fulfilled, (_, action) => action.payload);
  },
});

export const { setPortion } = portionSlice.actions;
export default portionSlice.reducer;

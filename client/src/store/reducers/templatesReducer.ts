import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TemplateItem } from "../../globalTypes/storeTypes";

const initialState: TemplateItem[] = [
  {
    name: "Loading...",
    portionSize: 200,
    ingredients: [],
    imageSrc: "",
    itemId: "id",
    count: 1,
  },
];

export const fetchTemplates = createAsyncThunk(
  "templates/fetchAll",
  async () => {
    const templatesFetch = await fetch("/smoothie-templates");
    const templates = await templatesFetch.json();
    return templates;
  }
);

const templatesSlice = createSlice({
  name: "templares",
  initialState: initialState,
  reducers: {
    setTemplates: (_, action) => action.payload,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTemplates.fulfilled, (_, action) => action.payload);
  },
});

export const { setTemplates } = templatesSlice.actions;
export default templatesSlice.reducer;

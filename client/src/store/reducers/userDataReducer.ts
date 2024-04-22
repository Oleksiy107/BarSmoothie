import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../globalTypes/storeTypes";

const initialState: UserData = {
  userName: "Empty",
  userTel: "Empty",
  deliveryType: "Empty",
};

const userDataSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    setUserData: (_, action) => action.payload,
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;

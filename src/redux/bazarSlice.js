import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: bazarSlice,
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const { addToCart } = bazarSlice.actions;
export default bazarSlice.reducer;

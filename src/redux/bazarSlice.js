import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
  },
  deleteItem: (state, action) => {
    state.productData = state.productData.filter(
      (item) => item._id !== action.payload
    );
  },
  resetCart: (state) => {
    state.productData = [];
  },
  increamentQuantity: (state, action) => {
    const item = state.productData.find(
      (item) => item._id === action.payload._id
    );
    if (item) {
      item.quantity++;
    }
  },
  decrementQuantity: (state, action) => {
    const item = state.productData.find(
      (item) => item._id === action.payload._id
    );
    if (item.quantity === 1) {
      item.quantity = 1;
    } else {
      item.quantity--;
    }
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  increamentQuantity,
  decrementQuantity,
} = bazarSlice.actions;
export default bazarSlice.reducer;

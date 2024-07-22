import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addToCart: (state, action) => {
      state.count += 1;
      state.products.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.count = state.products.length;
    },
    emptyCart: (state) => {
      state.products = [];
      state.count = 0;
    },
  },
});

export const { increment, decrement, addToCart, removeFromCart, emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;

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
      state.count -= 1;
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { increment, decrement, addToCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;

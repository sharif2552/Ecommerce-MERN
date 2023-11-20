// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
  cart: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { selectProduct, addToCart } = productSlice.actions;
export const selectSelectedProduct = (state) => state.product.selectedProduct;
export const selectCart = (state) => state.product.cart;

export default productSlice.reducer;

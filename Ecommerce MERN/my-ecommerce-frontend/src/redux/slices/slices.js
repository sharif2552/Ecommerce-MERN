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
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
    increase: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
  },
});

export const { selectProduct, addToCart, deleteProduct, increase, decrease } =
  productSlice.actions;
export const selectSelectedProduct = (state) => state.product.selectedProduct;
export const selectCart = (state) => state.product.cart;

export default productSlice.reducer;

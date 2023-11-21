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
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
    increase: (state, action) => {
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      // Check if the product is in the cart
      if (index !== -1) {
        // If quantity property does not exist, initialize it to 1
        if (!state.cart[index].quantity) {
          state.cart[index].quantity = 1;
        } else {
          // Increment the quantity
          state.cart[index].quantity += 1;
        }
      }
    },
  },
});

export const { selectProduct, addToCart, deleteProduct, increase } =
  productSlice.actions;
export const selectSelectedProduct = (state) => state.product.selectedProduct;
export const selectCart = (state) => state.product.cart;

export default productSlice.reducer;

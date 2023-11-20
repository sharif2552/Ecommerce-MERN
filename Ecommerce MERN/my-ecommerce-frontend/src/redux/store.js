// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/slices";

const store = configureStore({
  reducer: {
    product: productReducer,
    // Add other reducers as needed
  },
});

export default store;

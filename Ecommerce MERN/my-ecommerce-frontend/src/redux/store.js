// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/slices";
import authReducer from "./slices/authSlice"; // Add the import statement
const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    // Add other reducers as needed
  },
});

export default store;

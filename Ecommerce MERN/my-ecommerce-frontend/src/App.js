// src/App.js
import React from "react";
import AuthenticationPage from "./pages/Authenticationpage"; // Adjust the import statement
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./components/Cart"; // Adjust the import statement

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AuthenticationPage />
        <Cart />
        {/* Add other components and features as needed */}
      </div>
    </Provider>
  );
};

export default App;

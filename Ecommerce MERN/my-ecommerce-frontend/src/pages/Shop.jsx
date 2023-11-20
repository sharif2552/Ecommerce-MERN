// shop.js
import React, { useState } from "react";
import Productcard from "../components/Productcard";
import Cart from "../components/Cart";

const Shop = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Sample product data
  const sampleProduct = {
    id: 1,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 19.99,
    imageURL: "https://example.com/sample-image.jpg",
    // Add other properties as needed
  };

  const handleShowCart = () => {
    setIsCartVisible(true);
  };

  const handleHideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={handleShowCart}
      >
        Show Cart
      </button>

      {isCartVisible && (
        <Cart isVisible={isCartVisible} onHide={handleHideCart} />
      )}

      <Productcard product={sampleProduct} />
    </div>
  );
};

export default Shop;

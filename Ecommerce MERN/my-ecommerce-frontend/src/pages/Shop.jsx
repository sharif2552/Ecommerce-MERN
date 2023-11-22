// shop.js
import React, { useState } from "react";
import Productcard from "../components/Productcard";
import Cart from "../components/Cart";

const Shop = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1.",
      price: 19.99,
      imageURL: "https://example.com/product1-image.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2.",
      price: 29.99,
      imageURL: "https://example.com/product2-image.jpg",
    },
    // Add more products as needed
  ];

  const handleShowCart = () => {
    setIsCartVisible(true);
  };

  const handleHideCart = () => {
    setIsCartVisible(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Shop</h1>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={handleShowCart}
      >
        Show Cart
      </button>

      {isCartVisible && (
        <Cart isVisible={isCartVisible} onHide={handleHideCart} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Productcard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

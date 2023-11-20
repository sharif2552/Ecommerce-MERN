// Productcard.js
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/slices";

const Productcard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
      <div className="mb-4">
        <img
          src={product?.imageURL}
          alt={product?.name || "Product Image"}
          className="w-full h-40 object-cover rounded-md mb-2"
        />
      </div>

      <h2 className="text-xl font-semibold mb-2">
        {product?.name || "Product Name"}
      </h2>
      <p className="text-gray-600 mb-4">
        {product?.description || "Product Description"}
      </p>

      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-bold text-blue-500">
          ${product?.price || 0}
        </span>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md md:px-6 md:py-3 lg:px-8 lg:py-4"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productcard;

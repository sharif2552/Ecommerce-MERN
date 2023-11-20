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
    <div className="w-[300px] h-[420px] shadow-sm rounded-2xl p-4 bg-slate-50 dark:bg-[#1f1b24] dark:hover:bg-[#121015] dark:text-white dark:outline-none dark:border-none border border-slate-100 outline outline-slate-100  hover:shadow-2xl relative">
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
          className="absolute bg-slate-800 dark:bg-slate-800 dark:font-semibold text-white text-xl p-2 top-2 right-2 rounded-md animate-pulse"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Productcard;

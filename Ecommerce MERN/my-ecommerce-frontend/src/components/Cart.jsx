// Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, increase, decrease } from "../redux/slices/slices";

const Cart = ({ isVisible, onHide }) => {
  const cartItems = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  // Calculate the total price and quantity of each unique product
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleDelete = (product) => {
    dispatch(deleteProduct(product));
  };

  const handleIncrease = (product) => {
    dispatch(increase(product));
  };

  const handleDecrease = (product) => {
    dispatch(decrease(product));
  };

  return (
    <div
      className={`z-50 fixed right-4 top-4 bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-end">
        <button
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onHide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-4 flex items-center">
                {item.imageURL && (
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    ${item.price} 
                  </p>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrease(item)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <p className="mx-2">{item.quantity}</p>
                  <button
                    onClick={() => handleIncrease(item)}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>

                <div className="">
                  <button
                    onClick={() => handleDelete(item)}
                    className="ml-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="text-lg font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

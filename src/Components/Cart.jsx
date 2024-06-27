import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'; // Correct import for Heroicons v2

const Cart = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 bg-blue-500 text-white rounded"
      >
        <ShoppingCartIcon className="h-6 w-6" />
        <span className="ml-2">Cart</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-20">
          <ul>
            {cartItems.length === 0 ? (
              <li className="p-2 text-gray-500">Cart is empty</li>
            ) : (
              cartItems.map((item, index) => (
                <li key={index} className="p-2 border-b border-gray-200">
                  {item.name}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;

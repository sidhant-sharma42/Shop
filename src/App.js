import React, { useState } from 'react';
import CategoryList from './Components/CategoryList';
import SearchBar from './Components/SearchBar';
import Cart from './Components/Cart';
import categoriesData from './categories.json';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Shop With Me</h1>
          <div className="flex items-center space-x-4">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Cart cartItems={cartItems} />
          </div>
        </div>
      </header>
      <main className="container mx-auto mt-4 flex">
        <aside className="w-1/4 p-4 bg-white shadow rounded relative z-10">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <CategoryList categories={categoriesData.categories} searchQuery={searchQuery} />
        </aside>
        <div className="w-3/4 p-4 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Today's Top Deals</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Add product items here */}
              <div className="bg-white p-4 rounded shadow">
                <img src="/Apple.png" alt="Product 1" className="mb-4" style={{ width: 150, height: 150 }} />
                <h3 className="font-bold">Iphone 15</h3>
                <p className="text-gray-500">$699</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <img src="/LG.jpg" alt="Product 1" className="mb-4" style={{ width: 150, height: 150 }} />
                <h3 className="font-bold">LG Pro Wash</h3>
                <p className="text-gray-500">$400</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <img src="/Samsung.jpg" alt="Product 1" className="mb-4" style={{ width: 150, height: 150 }} />
                <h3 className="font-bold">Samsung S23</h3>
                <p className="text-gray-500">$599</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add to Cart</button>
              </div>
            </div>
          </section>
          {/* Add more sections as needed */}
        </div>
      </main>
    </div>
  );
};

export default App;

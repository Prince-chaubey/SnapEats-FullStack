import React, { useContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';
import { assets } from '../assets/assets';
import { contextStore } from '../Context/storeContext';

const SearchFood = () => {
  const [query, setQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(food_list);

  const { cartItem, addCart, removeCart } = useContext(contextStore);

  // 🍽️ Search by name (live)
  useEffect(() => {
    const filtered = food_list.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoods(filtered);
  }, [query]);

  // Filter by price range
  const newFilterFoods = () => {
  const min = parseFloat(minPrice) / 100;
  const max = parseFloat(maxPrice) / 100;

  if (!isNaN(min) && !isNaN(max) && max > min) {
    const priceFiltered = food_list.filter((food) => {
      return food.price >= min && food.price <= max;
    });
    setFilteredFoods(priceFiltered);
  }
};

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Search & Filter Food</h1>

      {/* 🔍 Search & Price Filter UI */}
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 mb-12">
        {/* Search Input */}
        <div className="relative w-full max-w-xl">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.5z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search food by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-lg border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
          />
        </div>

        {/* Price Filter */}
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={minPrice}
            placeholder="Min ₹"
            className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-400 focus:outline-none"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            value={maxPrice}
            placeholder="Max ₹"
            className="w-28 px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-400 focus:outline-none"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button
            type="submit"
            className="text-xl font-semibold bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition duration-200 hover:cursor-pointer"
            onClick={newFilterFoods}
          >
            Filter
          </button>
        </div>
      </div>

      {/* 🧾 Food Cards */}
      {filteredFoods.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFoods.map((food) => (
            <div
              key={food._id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
            >
              <img
                src={food.image}
                alt={food.name}
                className="mx-auto object-cover mb-4 rounded-lg"
              />

              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{food.name}</h3>
                <img
                  src={assets.rating_starts}
                  alt="ratings"
                  className="w-20 h-5 object-contain"
                />
              </div>

              <p className="text-sm text-gray-600 mb-3">{food.description}</p>

              <div className="flex items-center justify-between mb-2">
                {!cartItem[food._id] ? (
                  <img
                    src={assets.add_icon_white}
                    alt="add"
                    className="object-contain hover:cursor-pointer"
                    onClick={() => addCart(food._id)}
                  />
                ) : (
                  <div className="flex gap-2 items-center font-semibold">
                    <img
                      src={assets.remove_icon_red}
                      alt="remove"
                      className="object-contain hover:cursor-pointer"
                      onClick={() => removeCart(food._id)}
                    />
                    <p>{cartItem[food._id]}</p>
                    <img
                      src={assets.add_icon_green}
                      alt="add"
                      className="object-contain hover:cursor-pointer"
                      onClick={() => addCart(food._id)}
                    />
                  </div>
                )}
                <p className="text-green-700 font-bold text-lg text-right">
                  ₹{food.price * 10}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-gray-600 font-semibold mt-20">
          😞 No food items found.
        </div>
      )}
    </div>
  );
};

export default SearchFood;

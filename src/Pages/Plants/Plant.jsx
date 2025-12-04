import React, { useState, useMemo, useEffect } from 'react';
import { plantPromise } from '../Home/TopPlant';
import { NavLink } from 'react-router';
import { FaStar, FaBars, FaTimes } from 'react-icons/fa';

const Plant = () => {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [category, setCategory] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  // Fetch plants
  useEffect(() => {
    plantPromise.then(setPlants).catch(console.error);
  }, []);

  // Observe dark mode changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(plants.map((p) => p.category)));

  const filteredPlants = useMemo(() => {
    let result = plants;

    if (searchQuery) {
      result = result.filter((plant) =>
        plant.plantName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category) {
      result = result.filter((plant) => plant.category === category);
    }

    if (sortBy === 'priceLow')
      result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === 'priceHigh')
      result = [...result].sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating')
      result = [...result].sort((a, b) => b.rating - a.rating);

    return result;
  }, [plants, searchQuery, sortBy, category]);

  return (
    <div
      className={`px-8 sm:px-35 mx-auto py-12 transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-gray-200' : 'bg-green-50 text-gray-800'
      }`}
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 transition-colors duration-300 ${
          isDark ? 'text-green-300' : 'text-green-700'
        }`}
      >
        All Indoor Plants
      </h2>

      {/* Top Bar: Hamburger, Search, Sort */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 w-full">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setSidebarOpen(true)}
            className="sm:hidden px-3 py-2 bg-green-600 text-white rounded-lg"
          >
            <FaBars />
          </button>

          <input
            type="text"
            placeholder="Search plants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-colors duration-300 ${
              isDark
                ? 'border-gray-700 bg-gray-800 text-gray-200 focus:ring-green-400'
                : 'border-green-200 bg-white text-gray-800 focus:ring-green-600'
            }`}
          />
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={`border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 transition-colors duration-300 ${
            isDark
              ? 'border-gray-700 bg-gray-800 text-gray-200 focus:ring-green-400'
              : 'border-green-200 bg-white text-gray-800 focus:ring-green-600'
          }`}
        >
          <option value="">Sort By</option>
          <option value="priceLow">Price (Low to High)</option>
          <option value="priceHigh">Price (High to Low)</option>
          <option value="rating">Rating (High to Low)</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar */}
        <aside
          className={`hidden md:block md:w-1/4 rounded-2xl p-4 shadow-inner transition-colors duration-300 ${
            isDark ? 'bg-gray-800' : 'bg-green-50'
          }`}
        >
          <h3
            className={`text-lg md:text-xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-700'
            }`}
          >
            Categories
          </h3>
          <ul className="flex flex-col gap-3">
            <li
              onClick={() => setCategory('')}
              className={`cursor-pointer px-3 py-2 rounded-lg hover:bg-green-100 transition ${
                category === '' ? 'bg-green-400 font-semibold' : ''
              } ${isDark ? 'hover:bg-gray-700 bg-gray-700 text-gray-200' : ''}`}
            >
              All
            </li>
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setCategory(cat)}
                className={`cursor-pointer px-3 py-2 rounded-lg hover:bg-green-100 transition ${
                  category === cat ? 'bg-green-400 font-semibold' : ''
                } ${isDark ? 'hover:bg-gray-700 bg-gray-700 text-gray-200' : ''}`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Mobile Sidebar Modal */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
            <div
              className={`w-64 p-6 shadow-lg h-full relative transition-colors duration-300 ${
                isDark ? 'bg-gray-800 text-gray-200' : 'bg-green-50 text-gray-800'
              }`}
            >
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-4 right-4 text-lg"
              >
                <FaTimes />
              </button>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="flex flex-col gap-3">
                <li
                  onClick={() => {
                    setCategory('');
                    setSidebarOpen(false);
                  }}
                  className={`cursor-pointer px-3 py-2 rounded-lg hover:bg-green-100 transition ${
                    category === '' ? 'bg-green-400 font-semibold' : ''
                  } ${isDark ? 'hover:bg-gray-700 bg-gray-700 text-gray-200' : ''}`}
                >
                  All
                </li>
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => {
                      setCategory(cat);
                      setSidebarOpen(false);
                    }}
                    className={`cursor-pointer px-3 py-2 rounded-lg hover:bg-green-100 transition ${
                      category === cat ? 'bg-green-400 font-semibold' : ''
                    } ${isDark ? 'hover:bg-gray-700 bg-gray-700 text-gray-200' : ''}`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Plant Grid */}
        <div className="flex-1">
          {filteredPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {filteredPlants.map((plant) => (
                <div
                  key={plant.plantId}
                  className={`rounded-3xl shadow-lg overflow-hidden relative transform hover:scale-105 transition-all duration-300 ${
                    isDark ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
                  }`}
                >
                  {plant.isFeatured && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
                      Featured
                    </span>
                  )}
                  {plant.isNew && (
                    <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">
                      New
                    </span>
                  )}

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={plant.image}
                      alt={plant.plantName}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  <div className="p-5 flex flex-col gap-2">
                    <h3 className="text-xl font-bold">{plant.plantName}</h3>
                    <p
                      className={`text-sm font-semibold px-3 py-1 rounded-full shadow-sm w-fit my-3 transition-colors duration-300 ${
                        isDark
                          ? 'bg-green-700 text-gray-200'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {plant.category}
                    </p>

                    <div className="flex justify-between items-center mt-1">
                      <span className={`font-bold text-lg ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                        ${plant.price}
                      </span>
                      <span className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            className={i < plant.rating ? 'text-yellow-500' : 'text-gray-400'}
                          />
                        ))}
                      </span>
                    </div>

                    {plant.stock === 0 ? (
                      <span className="mt-1 font-semibold text-red-500">Out of Stock</span>
                    ) : (
                      <span className="mt-1 font-semibold text-green-600">
                        {plant.availableStock} left
                      </span>
                    )}

                    <NavLink
                      to={`/plant/${plant.plantId}`}
                      className={`mt-3 text-center py-2 rounded-full font-semibold transition-all duration-300 ${
                        isDark
                          ? 'bg-green-600 hover:bg-green-500 text-white'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                    >
                      View Details
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mt-12">
              <p className={`text-lg md:text-xl font-semibold ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                No plants found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plant;

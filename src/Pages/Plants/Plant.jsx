import React, { use } from 'react';
import { plantPromise } from '../Home/TopPlant';
import { NavLink } from 'react-router';

const Plant = () => {
  const plants = use(plantPromise);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Page Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-10">
        All Indoor Plants
      </h2>

      {/* Plant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-gray-800">
                {plant.plantName}
              </h3>
              <p className="text-sm text-green-800 font-semibold bg-green-100 px-3 py-1 rounded-full shadow-sm w-fit my-3">
  {plant.category}
</p>


              <div className="flex justify-between items-center mt-1">
                <span className="text-green-600 font-semibold">
                  ${plant.price}
                </span>
                <span className="text-yellow-500 font-medium">
                  ⭐ {plant.rating}
                </span>
              </div>

              {/* Button */}
              <NavLink
                to={`/plant/${plant.plantId}`}
                className="mt-3 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-full font-semibold transition-all duration-300"
              >
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plant;

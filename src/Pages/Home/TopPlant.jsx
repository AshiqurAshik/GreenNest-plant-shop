import React, { use } from 'react';
import { NavLink } from 'react-router';

export const plantPromise = fetch('/plants.json')
  .then((res) => res.json())
  .catch((err) => console.error(err));

const TopPlant = () => {
  const plants = use(plantPromise);

  const topPlants = plants.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Top Indoor Plants
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {topPlants.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative h-56 sm:h-64 md:h-64 overflow-hidden rounded-t-3xl">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-full object-cover transition-transform ease-linear hover:scale-[1.05]"
              />
            </div>

            <div className="p-4 sm:p-5 flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {plant.plantName}
              </h3>
              <p className="text-sm text-green-800 font-semibold bg-green-100 px-3 py-1 rounded-full shadow-sm w-fit my-2">
                {plant.category}
              </p>

              <div className="flex justify-between items-center mx-1 sm:mx-2">
                <p className="text-green-600 font-semibold">${plant.price}</p>
                <p className="text-yellow-500 font-medium">⭐ {plant.rating}</p>
              </div>

              <NavLink
                to={`/plant/${plant.plantId}`}
                className="mt-3 text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                View Details
              </NavLink>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <NavLink
          to="/plant"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 text-sm sm:text-base"
        >
          View All
        </NavLink>
      </div>
    </div>
  );
};

export default TopPlant;

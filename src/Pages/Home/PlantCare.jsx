import React from 'react';
import { FaWater, FaSun, FaLeaf, FaSeedling } from 'react-icons/fa';

const PlantCare = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-200 to-green-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
          Plant Care Tips
        </h2>
        <p className="text-green-700 max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
          Simple tips and guidance to help your indoor plants thrive and stay healthy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-200">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-200 flex items-center justify-center mb-3 md:mb-4">
            <FaWater className="text-green-600 text-2xl md:text-3xl" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-1 md:mb-2">Water Regularly</h3>
          <p className="text-green-800 text-sm md:text-base">
            Ensure your plants get the right amount of water to stay healthy and vibrant.
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-200">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-200 flex items-center justify-center mb-3 md:mb-4">
            <FaSun className="text-yellow-500 text-2xl md:text-3xl" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-1 md:mb-2">Provide Sunlight</h3>
          <p className="text-green-800 text-sm md:text-base">
            Place your plants where they receive adequate sunlight for proper growth.
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-200">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-300 flex items-center justify-center mb-3 md:mb-4">
            <FaLeaf className="text-green-700 text-2xl md:text-3xl" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-1 md:mb-2">Prune Dead Leaves</h3>
          <p className="text-green-800 text-sm md:text-base">
            Trim yellow or dead leaves to encourage new growth and keep plants tidy.
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-200">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-100 flex items-center justify-center mb-3 md:mb-4">
            <FaSeedling className="text-green-600 text-2xl md:text-3xl" />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-green-900 mb-1 md:mb-2">Use Good Soil</h3>
          <p className="text-green-800 text-sm md:text-base">
            Plant your greenery in nutrient-rich soil for optimal health and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlantCare;

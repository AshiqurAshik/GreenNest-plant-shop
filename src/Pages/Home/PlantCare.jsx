import React from 'react';
import { FaWater, FaSun, FaLeaf, FaSeedling } from 'react-icons/fa';

const PlantCare = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-20 to-green-50 py-20">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
          Plant Care Tips
        </h2>
        <p className="text-green-700 max-w-2xl mx-auto text-lg">
          Simple tips and guidance to help your indoor plants thrive and stay
          healthy.
        </p>
      </div>

      {/* Tips Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-200">
          <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center mb-4">
            <FaWater className="text-green-600 text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-green-900 mb-2">
            Water Regularly
          </h3>
          <p className="text-green-800 text-sm">
            Ensure your plants get the right amount of water to stay healthy and
            vibrant.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-200">
          <div className="w-20 h-20 rounded-full bg-yellow-200 flex items-center justify-center mb-4">
            <FaSun className="text-yellow-500 text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-green-900 mb-2">
            Provide Sunlight
          </h3>
          <p className="text-green-800 text-sm">
            Place your plants where they receive adequate sunlight for proper
            growth.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-200">
          <div className="w-20 h-20 rounded-full bg-green-300 flex items-center justify-center mb-4">
            <FaLeaf className="text-green-700 text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-green-900 mb-2">
            Prune Dead Leaves
          </h3>
          <p className="text-green-800 text-sm">
            Trim yellow or dead leaves to encourage new growth and keep plants
            tidy.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-green-200">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <FaSeedling className="text-green-600 text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-green-900 mb-2">
            Use Good Soil
          </h3>
          <p className="text-green-800 text-sm">
            Plant your greenery in nutrient-rich soil for optimal health and
            growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlantCare;

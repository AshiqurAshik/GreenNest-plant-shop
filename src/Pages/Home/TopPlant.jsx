import React, { use } from 'react';
import { NavLink } from 'react-router';

export const plantPromise = fetch('/plants.json')
  .then((res) => res.json())
  .catch((err) => console.error(err));

const TopPlant = () => {
  const plants = use(plantPromise);
  const [isDark, setIsDark] = React.useState(
    typeof window !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  const topPlants = plants.slice(0, 4);

  return (
    <div
      className={`py-10 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-green-50'
      }`}
    >
      <div className="max-w-7xl mx-auto py-5 px-4">
        <h2
          className={`text-3xl sm:text-4xl font-extrabold mb-8 text-center transition-colors duration-300 ${
            isDark ? 'text-green-300' : 'text-gray-800'
          }`}
        >
          Top Indoor Plants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {topPlants.map((plant) => (
            <div
              key={plant.plantId}
              className={`rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105 shadow-2xl transition-colors duration-300 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative h-56 sm:h-64 md:h-64 overflow-hidden rounded-t-3xl">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-full h-full object-cover transition-transform ease-linear hover:scale-[1.05]"
                />
              </div>

              <div className="p-4 sm:p-5 flex flex-col gap-2">
                <h3
                  className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                    isDark ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  {plant.plantName}
                </h3>
                <p
                  className={`text-sm font-semibold px-3 py-1 rounded-full shadow-sm w-fit my-2 transition-colors duration-300 ${
                    isDark
                      ? 'bg-green-700 text-gray-200'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {plant.category}
                </p>

                <div className="flex justify-between items-center mx-1 sm:mx-2">
                  <p
                    className={`font-semibold transition-colors duration-300 ${
                      isDark ? 'text-green-300' : 'text-green-600'
                    }`}
                  >
                    ${plant.price}
                  </p>
                  <p
                    className={`font-medium transition-colors duration-300 ${
                      isDark ? 'text-yellow-400' : 'text-yellow-500'
                    }`}
                  >
                    ⭐ {plant.rating}
                  </p>
                </div>

                <NavLink
                  to={`/plant/${plant.plantId}`}
                  className={`mt-3 text-center py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
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

        <div className="flex justify-center mt-10">
          <NavLink
            to="/plant"
            className={`font-semibold py-2 px-6 rounded-full text-sm sm:text-base transition-all duration-300 ${
              isDark
                ? 'bg-green-600 hover:bg-green-500 text-white'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            View All
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopPlant;

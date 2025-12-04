import React, { useEffect, useState } from 'react';
import { FaWater, FaSun, FaLeaf, FaSeedling } from 'react-icons/fa';

const PlantCare = () => {
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    // Listen for dark mode changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`py-16 md:py-20 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gradient-to-r from-emerald-200 to-green-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 md:mb-16">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 transition-colors duration-300 ${
            isDark ? 'text-green-300' : 'text-green-900'
          }`}
        >
          Plant Care Tips
        </h2>
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-green-700'
          }`}
        >
          Simple tips and guidance to help your indoor plants thrive and stay healthy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[
          {
            icon: <FaWater />,
            title: 'Water Regularly',
            desc: 'Ensure your plants get the right amount of water to stay healthy and vibrant.',
            bg: isDark ? 'bg-gray-800' : 'bg-white/40',
            iconBg: isDark ? 'bg-green-700' : 'bg-green-200',
            iconColor: isDark ? 'text-green-200' : 'text-green-600',
            textColor: isDark ? 'text-gray-200' : 'text-green-900',
            descColor: isDark ? 'text-gray-300' : 'text-green-800',
          },
          {
            icon: <FaSun />,
            title: 'Provide Sunlight',
            desc: 'Place your plants where they receive adequate sunlight for proper growth.',
            bg: isDark ? 'bg-gray-800' : 'bg-white/40',
            iconBg: isDark ? 'bg-yellow-600' : 'bg-yellow-200',
            iconColor: isDark ? 'text-yellow-300' : 'text-yellow-500',
            textColor: isDark ? 'text-gray-200' : 'text-green-900',
            descColor: isDark ? 'text-gray-300' : 'text-green-800',
          },
          {
            icon: <FaLeaf />,
            title: 'Prune Dead Leaves',
            desc: 'Trim yellow or dead leaves to encourage new growth and keep plants tidy.',
            bg: isDark ? 'bg-gray-800' : 'bg-white/40',
            iconBg: isDark ? 'bg-green-600' : 'bg-green-300',
            iconColor: isDark ? 'text-green-200' : 'text-green-700',
            textColor: isDark ? 'text-gray-200' : 'text-green-900',
            descColor: isDark ? 'text-gray-300' : 'text-green-800',
          },
          {
            icon: <FaSeedling />,
            title: 'Use Good Soil',
            desc: 'Plant your greenery in nutrient-rich soil for optimal health and growth.',
            bg: isDark ? 'bg-gray-800' : 'bg-white/40',
            iconBg: isDark ? 'bg-green-500' : 'bg-green-100',
            iconColor: isDark ? 'text-green-200' : 'text-green-600',
            textColor: isDark ? 'text-gray-200' : 'text-green-900',
            descColor: isDark ? 'text-gray-300' : 'text-green-800',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`rounded-3xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border transition-colors duration-300 ${
              isDark ? 'border-gray-700' : 'border-green-200'
            } ${item.bg}`}
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 md:mb-4 transition-colors duration-300 ${item.iconBg}`}
            >
              <span className={`text-2xl md:text-3xl ${item.iconColor}`}>{item.icon}</span>
            </div>
            <h3 className={`text-lg md:text-xl font-semibold mb-1 md:mb-2 ${item.textColor}`}>
              {item.title}
            </h3>
            <p className={`text-sm md:text-base ${item.descColor}`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCare;

import React, { useEffect, useState } from 'react';

const expertPromise = fetch('/expert.json')
  .then((res) => res.json())
  .catch((err) => console.error(err));

const ExpertSec = () => {
  const [experts, setExperts] = useState([]);
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    expertPromise.then((data) => {
      if (data) setExperts(data);
    });

    // Observe dark mode changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  if (!experts.length) {
    return (
      <div
        className={`text-center py-16 font-semibold text-lg transition-colors duration-300 ${
          isDark ? 'text-gray-200' : 'text-green-700'
        }`}
      >
        Loading experts...
      </div>
    );
  }

  return (
    <div
      className={`w-full py-12 md:py-16 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-emerald-100'
      }`}
    >
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2
            className={`text-3xl sm:text-4xl md:text-4xl font-extrabold transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-900'
            }`}
          >
            Meet Our Green Experts
          </h2>
          <p
            className={`mt-2 sm:mt-3 max-w-2xl mx-auto text-base sm:text-lg md:text-lg transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-green-800'
            }`}
          >
            Our passionate plant care specialists are here to help your plants thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className={`rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4 sm:p-6 md:p-6 text-center border transition-colors duration-300 ${
                isDark
                  ? 'bg-gray-800 border-gray-700 hover:border-green-400'
                  : 'bg-white/80 backdrop-blur-md border-green-200 hover:border-green-400'
              }`}
            >
              <div
                className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 shadow-md transition-colors duration-300 ${
                  isDark ? 'border-green-300' : 'border-green-400'
                }`}
              >
                <img
                  src={expert.image}
                  alt={`Photo of ${expert.name}, ${expert.role}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3
                className={`mt-4 sm:mt-5 text-lg sm:text-xl md:text-xl font-semibold transition-colors duration-300 ${
                  isDark ? 'text-green-300' : 'text-green-900'
                }`}
              >
                {expert.name}
              </h3>
              <p
                className={`mt-1 text-sm sm:text-base md:text-base font-medium transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-green-700'
                }`}
              >
                {expert.role}
              </p>

              <div
                className={`mt-3 sm:mt-4 w-10 sm:w-12 h-1 rounded-full transition-colors duration-300 ${
                  isDark ? 'bg-green-300' : 'bg-green-500'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExpertSec;

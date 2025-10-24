import React, { use } from 'react';

const expertPromise = fetch('/expert.json')
  .then((res) => res.json())
  .catch((err) => console.error(err));

const ExpertSec = () => {
  const experts = use(expertPromise);

  if (!experts) {
    return (
      <div className="text-center py-16 text-green-700 font-semibold text-lg">
        Loading experts...
      </div>
    );
  }

  return (
    <div className="w-full bg-emerald-100 py-12 md:py-16">
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-green-900">
            Meet Our Green Experts
          </h2>
          <p className="mt-2 sm:mt-3 text-green-800 max-w-2xl mx-auto text-base sm:text-lg md:text-lg">
            Our passionate plant care specialists are here to help your plants thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center p-4 sm:p-6 md:p-6 text-center border border-green-200 hover:border-green-400"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-green-400 shadow-md">
                <img
                  src={expert.image}
                  alt={`Photo of ${expert.name}, ${expert.role}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl md:text-xl font-semibold text-green-900">
                {expert.name}
              </h3>
              <p className="text-green-700 font-medium mt-1 text-sm sm:text-base md:text-base">
                {expert.role}
              </p>

              <div className="mt-3 sm:mt-4 w-10 sm:w-12 h-1 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExpertSec;

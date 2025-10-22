import React, { use } from 'react';

const expertPromise = fetch('/expert.json')
  .then((res) => res.json())
  .catch((err) => console.error(err));

const ExpertSec = () => {
  const experts = use(expertPromise);

  return (
    // Full-width background wrapper
    <div className="w-full bg-emerald-100 py-16">
      <section className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">
            Meet Our Green Experts
          </h2>
          <p className="mt-3 text-green-800 max-w-2xl mx-auto">
            Our passionate plant care specialists are here to help your plants
            thrive.
          </p>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center p-6 text-center border border-green-200 hover:border-green-400"
            >
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-400 shadow-md">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="mt-5 text-xl font-semibold text-green-900">
                {expert.name}
              </h3>
              <p className="text-green-700 font-medium mt-1">{expert.role}</p>

              {/* Decorative Line */}
              <div className="mt-4 w-12 h-1 bg-green-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExpertSec;

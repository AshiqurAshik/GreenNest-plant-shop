import React, { useState, use, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { plantPromise } from '../../Pages/Home/TopPlant';
import ErrorPlant from '../../Error/ErrorPlant';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Auth Provider/AuthContext';

const PlantDetails = () => {
  const plants = use(plantPromise);
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('specs');
  const { user } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  // Observe class changes on <html> to detect dark mode
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

  if (!plants)
    return (
      <p className="text-center mt-20 text-green-700 dark:text-green-300 text-lg font-medium animate-pulse">
        Loading...
      </p>
    );

  const plant = plants.find((p) => p.plantId === parseInt(id));
  if (!plant) return <ErrorPlant />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('You must be logged in to book!');
      return;
    }
    toast.success(`${plant.plantName} booked successfully!`);
    e.target.reset();
  };

  return (
    <div className={`max-w-6xl mx-auto my-12 px-4 sm:px-6 lg:px-8 space-y-12`}>
      {/* Hero + Form Section */}
      <section
        className={`flex flex-col lg:flex-row transition-colors duration-300 rounded-3xl overflow-hidden shadow-xl ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        {/* Image */}
        <div className="lg:w-1/2 flex-shrink-0">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-full lg:h-[500px] object-cover"
          />
        </div>

        {/* Details + Form */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h1
              className={`text-3xl lg:text-4xl font-extrabold transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-900'
              }`}
            >
              {plant.plantName}
            </h1>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(plant.rating)
                      ? 'text-yellow-400'
                      : `text-green-200 ${isDark ? 'dark:text-green-700' : ''}`
                  }
                />
              ))}
              <span
                className={`font-semibold ml-2 transition-colors duration-300 ${
                  isDark ? 'text-green-300' : 'text-green-700'
                }`}
              >
                {plant.rating} / 5
              </span>
            </div>
            <p
              className={`text-2xl font-bold transition-colors duration-300 ${
                isDark ? 'text-green-300' : 'text-green-800'
              }`}
            >
              ${plant.price}
            </p>
            <p
              className={`font-medium transition-colors duration-300 ${
                isDark ? 'text-green-200' : 'text-green-600'
              }`}
            >
              Stock: {plant.availableStock}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {plant.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm font-semibold shadow-sm transition-colors duration-300 ${
                    isDark
                      ? 'bg-green-800 text-green-100'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <h2
              className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-green-400' : 'text-green-900'
              }`}
            >
              Book a Consultation
            </h2>

            {!user && (
              <p
                className={`font-medium p-3 rounded-lg shadow-inner border transition-colors duration-300 ${
                  isDark
                    ? 'bg-red-900 text-red-400 border-red-700'
                    : 'bg-red-50 text-red-600 border-red-200'
                }`}
              >
                Please{' '}
                <Link to="/login" className="font-bold underline">
                  log in
                </Link>{' '}
                to book this consultation.
              </p>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`border rounded-lg p-3 focus:outline-none focus:ring-2 transition-colors duration-300 ${
                user
                  ? `border-green-300 focus:ring-green-500 ${
                      isDark ? 'dark:border-green-400 dark:focus:ring-green-300' : ''
                    }`
                  : `border-gray-300 bg-gray-50 text-gray-400 cursor-not-allowed ${
                      isDark ? 'dark:bg-gray-800 dark:border-gray-600 dark:text-gray-500' : ''
                    }`
              }`}
              required
              disabled={!user}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`border rounded-lg p-3 focus:outline-none focus:ring-2 transition-colors duration-300 ${
                user
                  ? `border-green-300 focus:ring-green-500 ${
                      isDark ? 'dark:border-green-400 dark:focus:ring-green-300' : ''
                    }`
                  : `border-gray-300 bg-gray-50 text-gray-400 cursor-not-allowed ${
                      isDark ? 'dark:bg-gray-800 dark:border-gray-600 dark:text-gray-500' : ''
                    }`
              }`}
              required
              disabled={!user}
            />

            <button
              type="submit"
              className={`${
                user
                  ? `bg-green-700 hover:bg-green-800 transition-transform transform hover:-translate-y-1 text-white ${
                      isDark ? 'dark:bg-green-600 dark:hover:bg-green-500' : ''
                    }`
                  : 'bg-gray-400 cursor-not-allowed'
              } font-bold py-3 px-6 rounded-full shadow-lg w-fit`}
              disabled={!user}
            >
              Book Now
            </button>
          </form>
        </div>
      </section>

      {/* Tabs Section */}
      <section
        className={`p-8 rounded-3xl shadow-xl transition-colors duration-300 ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        {/* Tabs */}
        <div
          className={`flex gap-4 border-b-2 mb-6 overflow-x-auto transition-colors duration-300 ${
            isDark ? 'border-green-700' : 'border-green-100'
          }`}
        >
          {['specs', 'benefits', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-2 px-6 font-semibold rounded-full transition-all ${
                activeTab === tab
                  ? `bg-green-700 text-white shadow-lg ${isDark ? 'dark:bg-green-600' : ''}`
                  : `text-green-700 hover:bg-green-50 ${
                      isDark ? 'dark:text-green-300 dark:hover:bg-green-800' : ''
                    }`
              }`}
            >
              {tab === 'specs'
                ? 'Specifications'
                : tab === 'benefits'
                ? 'Benefits & Care Tips'
                : 'User Reviews'}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        {activeTab === 'specs' && (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 font-medium transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-700'
            }`}
          >
            <p>Height: {plant.height}</p>
            <p>Pot Size: {plant.potSize}</p>
            <p>Watering: {plant.watering}</p>
            <p>Sunlight: {plant.sunlight}</p>
            <p>Humidity: {plant.humidity}</p>
            <p>Growth Rate: {plant.growthRate}</p>
            <p>Toxicity: {plant.toxicity}</p>
            <p>Origin: {plant.origin}</p>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className={`space-y-4 transition-colors duration-300 ${isDark ? 'text-green-300' : 'text-green-700'}`}>
            <div>
              <h3 className={`font-bold text-lg mb-2 ${isDark ? 'text-green-400' : 'text-green-900'}`}>
                Benefits:
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {plant.benefits?.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`font-bold text-lg mb-2 ${isDark ? 'text-green-400' : 'text-green-900'}`}>
                Care Tips:
              </h3>
              <p>{plant.careTips}</p>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            {plant.reviews && plant.reviews.length > 0 ? (
              plant.reviews.map((review, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl shadow-lg border transition-colors duration-300 ${
                    isDark ? 'bg-gray-800 border-green-700' : 'bg-green-50 border-green-100'
                  }`}
                >
                  <p className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-900'}`}>{review.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.round(review.rating) ? 'text-yellow-400' : isDark ? 'text-green-700' : 'text-green-200'}
                        />
                      ))}
                    </div>
                    <span className={`font-medium ${isDark ? 'text-green-300' : 'text-green-700'}`}>
                      {review.rating}
                    </span>
                  </div>
                  <p className={`mt-2 ${isDark ? 'text-green-300' : 'text-green-700'}`}>{review.comment}</p>
                </div>
              ))
            ) : (
              <p className={`font-medium ${isDark ? 'text-green-300' : 'text-green-700'}`}>No reviews yet.</p>
            )}
          </div>
        )}
      </section>

      <ToastContainer />
    </div>
  );
};

export default PlantDetails;

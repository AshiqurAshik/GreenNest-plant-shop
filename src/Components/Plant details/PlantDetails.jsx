import React, { useState, use } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { plantPromise } from '../../Pages/Home/TopPlant';
import ErrorPlant from '../../Error/ErrorPlant';
import { FaStar } from 'react-icons/fa';

const PlantDetails = () => {
  const plants = use(plantPromise);
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('specs');

  if (!plants)
    return (
      <p className="text-center mt-20 text-green-700 text-lg font-medium animate-pulse">
        Loading...
      </p>
    );

  const plant = plants.find((p) => p.plantId === parseInt(id));

  if (!plant) return <ErrorPlant />;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`${plant.plantName} booked successfully!`);
    e.target.reset();
  };

  return (
    <div className="max-w-6xl mx-auto my-12 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero + Form Section */}
      <section className="flex flex-col lg:flex-row bg-white shadow-xl rounded-3xl overflow-hidden">
        {/* Image */}
        <div className="lg:w-1/2 flex-shrink-0">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-full lg:h-[500px] object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-green-900/70 backdrop-blur-md text-white px-3 py-1 rounded-md text-sm font-semibold">
            Provider: {plant.providerName}
          </div>
        </div>

        {/* Details + Form */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
          <div className="space-y-3">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-green-900">{plant.plantName}</h1>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.round(plant.rating) ? 'text-yellow-400' : 'text-green-200'}
                />
              ))}
              <span className="text-green-700 font-semibold ml-2">{plant.rating} / 5</span>
            </div>
            <p className="text-2xl font-bold text-green-800">${plant.price}</p>
            <p className="text-green-600 font-medium">Stock: {plant.availableStock}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {plant.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-green-900">Book a Consultation</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-green-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 w-fit"
            >
              Book Now
            </button>
          </form>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white shadow-xl rounded-3xl p-8">
        {/* Tabs */}
        <div className="flex gap-4 border-b-2 border-green-100 mb-6 overflow-x-auto">
          {['specs', 'benefits', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-2 px-6 font-semibold rounded-full transition-all ${
                activeTab === tab
                  ? 'bg-green-700 text-white shadow-lg'
                  : 'text-green-700 hover:bg-green-50'
              }`}
            >
              {tab === 'specs' ? 'Specifications' : tab === 'benefits' ? 'Benefits & Care Tips' : 'User Reviews'}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-green-700 font-medium">
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
          <div className="space-y-4 text-green-700">
            <div>
              <h3 className="text-green-900 font-bold text-lg mb-2">Benefits:</h3>
              <ul className="list-disc list-inside space-y-1">
                {plant.benefits?.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-green-900 font-bold text-lg mb-2">Care Tips:</h3>
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
                  className="p-4 rounded-xl shadow-lg border border-green-100 bg-green-50"
                >
                  <p className="font-semibold text-green-900">{review.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < Math.round(review.rating) ? 'text-yellow-400' : 'text-green-200'}
                        />
                      ))}
                    </div>
                    <span className="text-green-700 font-medium">{review.rating}</span>
                  </div>
                  <p className="mt-2 text-green-700">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-green-700 font-medium">No reviews yet.</p>
            )}
          </div>
        )}
      </section>

      <ToastContainer />
    </div>
  );
};

export default PlantDetails;

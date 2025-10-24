import React, { use } from 'react';
import { useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { plantPromise } from '../../Pages/Home/TopPlant';
import ErrorPlant from '../../Error/ErrorPlant';

const PlantDetails = () => {
  const plants = use(plantPromise);
  const { id } = useParams();

  if (!plants)
    return <p className="text-center mt-10 text-green-700">Loading...</p>;

  const plant = plants.find((p) => p.plantId === parseInt(id));

  if (!plant)
    return <ErrorPlant></ErrorPlant>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    toast.success(`${plant.plantName} booked successfully!`, {});

    e.target.reset();
    document.getElementById('bookModal').close();
  };

  return (
    <div className="max-w-6xl mx-auto my-10 space-y-8">
      <section className="bg-white rounded-3xl shadow-2xl p-6">
        <div className="md:flex md:gap-10">
          <div className="md:w-1/2">
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-[400px] md:h-full object-cover rounded-2xl"
            />
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-green-900">
              {plant.plantName}
            </h1>
            <p className="text-green-800 mt-3">{plant.description}</p>
            <p className="text-green-600 font-semibold mt-2">
              Category: {plant.category}
            </p>
            <p className="text-green-600 font-semibold mt-1">
              Price: ${plant.price}
            </p>
            <p className="text-yellow-500 font-medium mt-1">
              Rating: ⭐ {plant.rating}
            </p>
            <p className="text-green-700 mt-1">Stock: {plant.availableStock}</p>
            <p className="text-green-700 mt-1">Care Level: {plant.careLevel}</p>
            <p className="text-green-700 mt-1">
              Provider: {plant.providerName}
            </p>

            <button
              onClick={() => document.getElementById('bookModal').showModal()}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      
      <dialog id="bookModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <button
            type="button"
            className="absolute top-3 right-3 btn btn-sm mt-2"
            onClick={() => document.getElementById('bookModal').close()}
          >
            ✕
          </button>

          <h3 className="font-bold text-lg text-green-900 mb-4 text-center">
            Book Consultation for {plant.plantName}
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-green-300 rounded-lg p-2 focus:outline-none focus:border-green-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-green-300 rounded-lg p-2 focus:outline-none focus:border-green-500"
              required
            />
            <div className="modal-action flex justify-end">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full font-semibold"
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <ToastContainer />
    </div>
  );
};

export default PlantDetails;

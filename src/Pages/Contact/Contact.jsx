import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    e.target.reset();
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-green-800 drop-shadow-sm">
            Contact <span className="text-green-600">GreenNest</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg sm:text-xl max-w-3xl mx-auto">
            We’d love to hear from you! Whether you have questions, suggestions,
            or want to share your plant journey, reach out below.
          </p>
        </div>

        {/* Grid: Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="text-gray-700 text-lg sm:text-xl leading-8 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
              Get in Touch
            </h2>
            <p className="mb-3">
              Email:{' '}
              <span className="font-semibold text-green-700">info@greennest.com</span>
            </p>
            <p className="mb-3">
              Phone:{' '}
              <span className="font-semibold text-green-700">+880 1234 567890</span>
            </p>
            <p className="mb-6">
              Address:{' '}
              <span className="font-semibold text-green-700">
                123 Green Street, Dhaka, Bangladesh
              </span>
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
              Connect With Us
            </h2>
            <div className="flex justify-center md:justify-start gap-5 mt-2">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 text-2xl"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6 text-center">
              Send a Message
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                rows="5"
                required
                placeholder="Your Message"
                className="border border-green-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
              />
              <button
                type="submit"
                className="bg-green-600 text-white font-semibold py-3 rounded-full hover:bg-green-700 transition duration-200 mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Contact;

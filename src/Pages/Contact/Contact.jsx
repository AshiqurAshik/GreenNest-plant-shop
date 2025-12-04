import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

  // Observe dark mode changes
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

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    e.target.reset();
  };

  return (
    <div
      className={`py-20 px-4 sm:px-6 lg:px-20 transition-colors duration-300 ${
        isDark
          ? 'bg-gray-900 text-gray-300'
          : 'bg-gradient-to-b from-green-50 to-white text-gray-800'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-5xl sm:text-6xl font-extrabold drop-shadow-sm transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-800'
            }`}
          >
            Contact{' '}
            <span className={isDark ? 'text-green-400' : 'text-green-600'}>
              GreenNest
            </span>
          </h1>
          <p
            className={`mt-4 text-lg sm:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            We’d love to hear from you! Whether you have questions, suggestions,
            or want to share your plant journey, reach out below.
          </p>
        </div>

        {/* Grid: Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className={`text-lg sm:text-xl leading-8 text-center md:text-left transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-green-300' : 'text-green-700'
              }`}
            >
              Get in Touch
            </h2>
            <p className="mb-3">
              Email:{' '}
              <span
                className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-green-300' : 'text-green-700'
                }`}
              >
                info@greennest.com
              </span>
            </p>
            <p className="mb-3">
              Phone:{' '}
              <span
                className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-green-300' : 'text-green-700'
                }`}
              >
                +880 1234 567890
              </span>
            </p>
            <p className="mb-6">
              Address:{' '}
              <span
                className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-green-300' : 'text-green-700'
                }`}
              >
                123 Green Street, Dhaka, Bangladesh
              </span>
            </p>

            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-green-300' : 'text-green-700'
              }`}
            >
              Connect With Us
            </h2>
            <div className="flex justify-center md:justify-start gap-5 mt-2">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition-colors duration-300 ${
                  isDark ? 'text-green-300 hover:text-green-400' : 'text-green-700 hover:text-green-900'
                }`}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition-colors duration-300 ${
                  isDark ? 'text-green-300 hover:text-green-400' : 'text-green-700 hover:text-green-900'
                }`}
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl transition-colors duration-300 ${
                  isDark ? 'text-green-300 hover:text-green-400' : 'text-green-700 hover:text-green-900'
                }`}
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`rounded-3xl p-8 transition-colors duration-300 ${
              isDark
                ? 'bg-gray-800 shadow-gray-700'
                : 'bg-white shadow-2xl'
            }`}
          >
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-6 text-center transition-colors duration-300 ${
                isDark ? 'text-green-300' : 'text-green-700'
              }`}
            >
              Send a Message
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Your Name"
                className={`border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors duration-300 ${
                  isDark
                    ? 'border-gray-700 bg-gray-900 text-gray-300 focus:ring-green-400'
                    : 'border-green-200 bg-white text-gray-800 focus:ring-green-600'
                }`}
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className={`border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-colors duration-300 ${
                  isDark
                    ? 'border-gray-700 bg-gray-900 text-gray-300 focus:ring-green-400'
                    : 'border-green-200 bg-white text-gray-800 focus:ring-green-600'
                }`}
              />
              <textarea
                rows="5"
                required
                placeholder="Your Message"
                className={`border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 resize-none transition-colors duration-300 ${
                  isDark
                    ? 'border-gray-700 bg-gray-900 text-gray-300 focus:ring-green-400'
                    : 'border-green-200 bg-white text-gray-800 focus:ring-green-600'
                }`}
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

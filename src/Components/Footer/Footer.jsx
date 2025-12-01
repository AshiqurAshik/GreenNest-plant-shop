import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-green-50 text-green-900 py-6 border-t border-green-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-green-700 hover:text-green-800 transition duration-200"
        >
          <span className="text-green-500">🌿</span> GreenNest
        </NavLink>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-green-800 font-medium items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-green-600 transition duration-200 ${
                isActive ? 'text-green-700 border-b-2 border-green-700' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/plant"
            className={({ isActive }) =>
              `hover:text-green-600 transition duration-200 ${
                isActive ? 'text-green-700 border-b-2 border-green-700' : ''
              }`
            }
          >
            Plant
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-green-600 transition duration-200 ${
                isActive ? 'text-green-700 border-b-2 border-green-700' : ''
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-green-600 transition duration-200 ${
                isActive ? 'text-green-700 border-b-2 border-green-700' : ''
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-green-600 transition duration-200 ${
                isActive ? 'text-green-700 border-b-2 border-green-700' : ''
              }`
            }
          >
            Blog
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://facebook.com"
            className="text-green-700 hover:text-green-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            className="text-green-700 hover:text-green-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            className="text-green-700 hover:text-green-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm text-green-800">
        &copy; {new Date().getFullYear()} - All rights reserved by GreenNest
      </div>
    </footer>
  );
};

export default Footer;

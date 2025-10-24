import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
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
        <div className="flex gap-6 text-green-800 font-medium">
          <NavLink
            to="/"
            className="hover:text-green-600 transition duration-200"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-green-600 transition duration-200"
          >
            About
          </NavLink>
          <NavLink
            to="/plant"
            className="hover:text-green-600 transition duration-200"
          >
            Plant
          </NavLink>
          <NavLink
            to="/profile"
            className="hover:text-green-600 transition duration-200"
          >
            Profile
          </NavLink>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://facebook.com"
            className="text-green-700 hover:text-green-900 transition duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            className="text-green-700 hover:text-green-900 transition duration-200"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://twitter.com"
            className="text-green-700 hover:text-green-900 transition duration-200"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-green-800">
        &copy; {new Date().getFullYear()} - All rights reserved by GreenNest
      </div>
    </footer>
  );
};

export default Footer;

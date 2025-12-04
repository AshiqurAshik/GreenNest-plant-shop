import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  // Observe changes to <html> class to detect theme toggle
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`py-6 border-t transition-colors duration-300 ${
        isDark ? 'bg-gray-900 border-gray-700 text-gray-200' : 'bg-green-50 border-green-200 text-green-900'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        {/* Logo */}
        <NavLink
          to="/"
          className={`flex items-center gap-2 text-2xl font-bold transition duration-200 ${
            isDark ? 'text-green-400 hover:text-green-300' : 'text-green-700 hover:text-green-800'
          }`}
        >
          <span className={isDark ? 'text-green-300' : 'text-green-500'}>🌿</span> GreenNest
        </NavLink>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 font-medium items-center">
          {['/', '/plant', '/about', '/contact', '/blog'].map((path, index) => {
            const names = ['Home', 'Plant', 'About Us', 'Contact', 'Blog'];
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isDark
                      ? isActive
                        ? 'text-green-300 border-b-2 border-green-300'
                        : 'text-gray-200 hover:text-green-400 hover:border-green-400'
                      : isActive
                      ? 'text-green-700 border-b-2 border-green-700'
                      : 'text-black hover:text-green-700 hover:border-green-500'
                  }`
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
            <a
              key={i}
              href={['https://facebook.com', 'https://instagram.com', 'https://twitter.com'][i]}
              className={`transition duration-200 ${
                isDark ? 'text-gray-200 hover:text-green-400' : 'text-green-700 hover:text-green-900'
              }`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`mt-4 text-center text-sm transition-colors duration-300 ${
          isDark ? 'text-gray-400' : 'text-green-800'
        }`}
      >
        &copy; {new Date().getFullYear()} - All rights reserved by GreenNest
      </div>
    </footer>
  );
};

export default Footer;

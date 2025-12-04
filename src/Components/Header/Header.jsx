import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { FiSun, FiMoon } from 'react-icons/fi';
import profileImg from '../../assets/Profile-icon.png';
import { AuthContext } from '../../Auth Provider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    if (saved === 'dark') document.documentElement.classList.add('dark');
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('theme', nextTheme);
  };

  const handleLogout = () => {
    signOutUser()
      .then(() => toast.success('User logged out successfully!'))
      .catch((error) => toast.error('Error logging out: ' + error.message));
  };

  const navClasses = ({ isActive }) =>
    `transition duration-200 px-3 py-2 rounded-md font-semibold text-lg ${
      isActive
        ? `border-b-2 ${
            theme === 'dark'
              ? 'border-green-300 text-green-300'
              : 'border-green-700 text-green-700'
          }`
        : `${
            theme === 'dark'
              ? 'text-gray-200 hover:text-green-400 hover:border-green-400'
              : 'text-black hover:text-green-700 hover:border-green-500'
          }`
    }`;

  return (
    <header
      className={`sticky top-0 z-50 shadow-sm border-t transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gray-900 border-gray-700'
          : 'bg-green-50 border-green-200'
      }`}
    >
      <div className="w-11/12 mx-auto sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
              theme === 'dark'
                ? 'text-green-400 hover:text-green-200'
                : 'text-green-700 hover:text-green-800'
            }`}
          >
            Green
            <span
              className={theme === 'dark' ? 'text-green-300' : 'text-green-500'}
            >
              Nest
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-4 items-center">
            <NavLink to="/" className={navClasses}>
              Home
            </NavLink>
            <NavLink to="/plant" className={navClasses}>
              Plant
            </NavLink>
            <NavLink to="/about" className={navClasses}>
              About Us
            </NavLink>
            <NavLink to="/blog" className={navClasses}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navClasses}>
              Contact
            </NavLink>
            {user && (
              <NavLink to="/profile" className={navClasses}>
                Profile
              </NavLink>
            )}

            {/* Dark Mode Toggle in Nav */}
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-full transition-transform duration-500 ${
                theme === 'dark'
                  ? 'text-gray-200 hover:text-green-400'
                  : 'text-green-700 hover:text-green-900'
              }`}
            >
              {theme === 'light' ? <FiSun size={22} /> : <FiMoon size={22} />}
            </button>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Profile */}
            {user && (
              <div className="relative">
                <img
                  onClick={() => setShowProfileInfo(!showProfileInfo)}
                  src={user.photoURL || profileImg}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
                />
                {showProfileInfo && (
                  <div
                    className={`absolute right-0 mt-2 w-52 shadow-lg rounded-lg p-4 border z-50 transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 text-gray-100'
                        : 'bg-white border-green-200 text-green-900'
                    }`}
                  >
                    <p className="font-semibold">{user.displayName}</p>
                    <p className="text-sm">{user.email}</p>
                  </div>
                )}
              </div>
            )}

            {user ? (
              <button
                className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link
                className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-200"
                to="/login"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2 focus:outline-none ${
                  theme === 'dark' ? 'text-gray-200' : 'text-green-700'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-lg transform transition-transform duration-300 z-50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      >
        <div
          className={`flex justify-between items-center p-4 border-b ${
            theme === 'dark' ? 'border-gray-700' : 'border-green-200'
          }`}
        >
          <h2
            className={`text-lg font-bold ${
              theme === 'dark' ? 'text-green-400' : 'text-green-700'
            }`}
          >
            Menu
          </h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className={theme === 'dark' ? 'text-gray-200' : 'text-green-700'}
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <NavLink
            to="/"
            className={navClasses}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/plant"
            className={navClasses}
            onClick={() => setMobileMenuOpen(false)}
          >
            Plant
          </NavLink>
          <NavLink
            to="/about"
            className={navClasses}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/blog"
            className={navClasses}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={navClasses}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
          {user && (
            <NavLink
              to="/profile"
              className={navClasses}
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </NavLink>
          )}

          {/* Mobile Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center p-2 rounded-md mt-2 transition-colors duration-300 ${
              theme === 'dark' ? 'text-gray-200 hover:text-green-400' : 'text-green-700 hover:text-green-900'
            }`}
          >
            {theme === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
            <span className="ml-2 font-medium">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </header>
  );
};

export default Header;

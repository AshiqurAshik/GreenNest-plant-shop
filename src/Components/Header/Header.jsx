import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import profileImg from '../../assets/Profile-icon.png';
import { AuthContext } from '../../Auth Provider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    signOutUser()
      .then(() => toast.success('User logged out successfully!'))
      .catch((error) => toast.error('Error logging out: ' + error.message));
  };

  const navClasses = ({ isActive }) =>
    `transition duration-200 px-3 py-2 rounded-md font-semibold text-lg ${
      isActive
        ? 'text-green-700 border-b-2 border-green-700'
        : 'text-gray-700 hover:text-green-700 hover:border-b-2 hover:border-green-500'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-green-50 shadow-sm border-t border-green-200">
      <div className="w-11/12 mx-auto sm:px-6 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-green-700 tracking-wide hover:text-green-800"
          >
            Green<span className="text-green-500">Nest</span>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6 items-center">
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
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {user && (
              <div className="relative">
                <img
                  onClick={() => setShowProfileInfo(!showProfileInfo)}
                  src={user.photoURL || profileImg}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-green-600 cursor-pointer"
                />
                {showProfileInfo && (
                  <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg p-4 border border-green-200 z-50">
                    <p className="text-green-900 font-semibold">
                      {user.displayName}
                    </p>
                    <p className="text-green-700 text-sm">{user.email}</p>
                  </div>
                )}
              </div>
            )}

            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-200"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-green-700 focus:outline-none"
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

      {/* Mobile Menu Modal */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-green-200">
          <h2 className="text-lg font-bold text-green-700">Menu</h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-green-700 focus:outline-none"
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

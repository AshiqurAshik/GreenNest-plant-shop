import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import profileImg from '../../assets/Profile-icon.png';
import { AuthContext } from '../../Auth Provider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const { user, signOutUser } = use(AuthContext);
  const [showProfileInfo, setShowProfileInfo] = useState(false);

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast.success('User logged out successfully!');
      })
      .catch((error) => {
        console.error(error.message);
        toast.error('Error logging out: ' + error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm relative">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  `transition duration-200 mr-2 text-lg font-semibold ${
                    isActive
                      ? 'text-green-700 border-b-2 border-green-700 pb-1'
                      : 'text-gray-700 hover:text-green-700 hover:border-b-2 hover:border-green-500 pb-1'
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `transition duration-200 mr-2 text-lg font-semibold ${
                    isActive
                      ? 'text-green-700 border-b-2 border-green-700 pb-1'
                      : 'text-gray-700 hover:text-green-700 hover:border-b-2 hover:border-green-500 pb-1'
                  }`
                }
                to="/plant"
              >
                Plant
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `transition duration-200 mr-2 text-lg font-semibold ${
                    isActive
                      ? 'text-green-700 border-b-2 border-green-700 pb-1'
                      : 'text-gray-700 hover:text-green-700 hover:border-b-2 hover:border-green-500 pb-1'
                  }`
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="text-2xl ml-5 font-bold text-green-700 tracking-wide hover:text-green-800 transition duration-200"
        >
          Green<span className="text-green-500">Nest</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                `transition duration-200 mr-2 text-lg font-semibold ${
                  isActive
                    ? 'text-green-700 border-b-2 border-green-700 pb-1'
                    : 'text-gray-700 hover:text-green-700 hover:border-b-2 hover:border-green-500 pb-1'
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `transition duration-200 mr-2 text-lg font-semibold ${
                  isActive
                    ? 'text-green-700 border-b-2 border-green-700 pb-1'
                    : 'text-gray-700 hover:text-green-700 hover:border-b-2 hover:border-green-500 pb-1'
                }`
              }
              to="/plant"
            >
              Plant
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `transition duration-200 mr-2 text-lg font-semibold ${
                  isActive
                    ? 'text-green-700 border-b-2 border-green-700 pb-1'
                    : 'text-gray-700 hover:text-green-700 hover:border-b-2 hover:border-green-500 pb-1'
                }`
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex gap-3 items-center mr-5 relative">
        <div className="relative">
          <img
            onClick={() => setShowProfileInfo(!showProfileInfo)}
            className="w-10 h-10 rounded-full border-2 border-green-600 object-cover cursor-pointer"
            src={user?.photoURL || profileImg}
            alt="Profile"
          />
          {showProfileInfo && user && (
            <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg p-4 z-50 border border-green-200">
              <p className="text-green-900 font-semibold">{user.displayName}</p>
              <p className="text-green-700 text-sm">{user.email}</p>
            </div>
          )}
        </div>

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
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;

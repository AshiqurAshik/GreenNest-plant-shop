import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import profileImg from '../../assets/Profile-icon.png';
import { AuthContext } from '../../Auth Provider/AuthContext';

const Header = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogout = () => {
    signOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                `transition duration-200 mr-2  text-lg font-semibold ${
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
      <div className="navbar-end flex gap-3 items-center mr-5">
        <img
          className="w-10 h-10 rounded-full border-2 border-green-600 object-cover"
          src={profileImg}
          alt="Profile"
        />

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
    </div>
  );
};

export default Header;

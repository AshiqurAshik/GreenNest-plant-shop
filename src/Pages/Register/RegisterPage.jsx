import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Auth Provider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const { createUser, addProfileInfo } = useContext(AuthContext);

  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' &&
      document.documentElement.classList.contains('dark')
  );

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

  const validatePassword = (password) => {
    if (password.length < 6) return 'Password must be at least 6 characters.';
    if (!/[A-Z]/.test(password))
      return 'Password must contain an uppercase letter.';
    if (!/[a-z]/.test(password))
      return 'Password must contain a lowercase letter.';
    return '';
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    const validationError = validatePassword(password);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    createUser(email, password)
      .then(() => {
        toast.success('User registered successfully!');
        addProfileInfo(name, photoURL)
          .then(() => toast.success('Profile updated successfully!'))
          .catch(() => toast.error('Profile update failed!'));
      })
      .catch(() => toast.error('Registration failed! Please check your email.'));
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen px-4 transition-colors duration-300 ${
        isDark
          ? 'bg-gray-900 text-gray-300'
          : 'bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800'
      }`}
    >
      <div className="w-full max-w-5xl flex flex-col lg:flex-row rounded-3xl shadow-2xl overflow-hidden transition-colors duration-300">
        {/* Left Panel */}
        <div
          className={`lg:w-1/2 p-10 flex flex-col justify-center items-center text-center transition-colors duration-300 ${
            isDark
              ? 'bg-gray-800 text-gray-300'
              : 'bg-green-600 text-white'
          }`}
        >
          <h1 className="text-3xl font-bold mb-4">
            Join the GreenNest Family 🌿
          </h1>
          <p className="text-lg max-w-sm opacity-90">
            Create your account to start growing your own indoor garden. Get tips, guides, and connect with fellow plant enthusiasts.
          </p>
        </div>

        {/* Right Panel: Form */}
        <div
          className={`lg:w-1/2 p-10 flex justify-center items-center transition-colors duration-300 ${
            isDark
              ? 'bg-gray-900 text-gray-300'
              : 'bg-white text-gray-800'
          }`}
        >
          <div className="w-full max-w-md">
            <h2
              className={`text-3xl font-bold mb-6 text-center transition-colors duration-300 ${
                isDark ? 'text-green-300' : 'text-green-800'
              }`}
            >
              Create Your Account
            </h2>

            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label
                  className={`block mb-1 font-medium transition-colors duration-300 ${
                    isDark ? 'text-green-300' : 'text-green-700'
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                    isDark
                      ? 'border-gray-600 bg-gray-700 text-gray-300 focus:ring-green-400'
                      : 'border-green-300 bg-white text-gray-800 focus:ring-green-600'
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  className={`block mb-1 font-medium transition-colors duration-300 ${
                    isDark ? 'text-green-300' : 'text-green-700'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                    isDark
                      ? 'border-gray-600 bg-gray-700 text-gray-300 focus:ring-green-400'
                      : 'border-green-300 bg-white text-gray-800 focus:ring-green-600'
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  className={`block mb-1 font-medium transition-colors duration-300 ${
                    isDark ? 'text-green-300' : 'text-green-700'
                  }`}
                >
                  Profile Picture URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photo URL"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                    isDark
                      ? 'border-gray-600 bg-gray-700 text-gray-300 focus:ring-green-400'
                      : 'border-green-300 bg-white text-gray-800 focus:ring-green-600'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block mb-1 font-medium transition-colors duration-300 ${
                    isDark ? 'text-green-300' : 'text-green-700'
                  }`}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                    isDark
                      ? 'border-gray-600 bg-gray-700 text-gray-300 focus:ring-green-400'
                      : 'border-green-300 bg-white text-gray-800 focus:ring-green-600'
                  }`}
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 ${
                  isDark
                    ? 'bg-green-700 hover:bg-green-600 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                Sign Up
              </button>

              <p
                className={`text-center text-sm mt-6 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Already have an account?{' '}
                <Link
                  to="/login"
                  className={`font-medium transition-colors duration-300 ${
                    isDark ? 'text-green-300 hover:underline' : 'text-green-600 hover:underline'
                  }`}
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </div>
  );
};

export default RegisterPage;

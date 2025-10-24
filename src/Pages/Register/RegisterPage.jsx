import React, { useState, useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Auth Provider/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const { createUser, addProfileInfo } = useContext(AuthContext);

  // Separate validation function
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
      .then((result) => {
        toast.success('User registered successfully!');
        console.log(result.user);

        addProfileInfo(name, photoURL)
          .then(() => {
            toast.success('Profile updated successfully!');
            console.log('Profile updated:', result.user);
          })
          .catch((err) => {
            console.log('Profile update error:', err.message);
            toast.error('Profile update failed!');
          });
      })
      .catch((err) => {
        console.log(err.message);
        toast.error('Registration failed! Please check your email.');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-green-100">
        <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Sign Up
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-green-700 mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-green-700 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          <div>
            <label className="block text-green-700 mb-1 font-medium">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          <div>
            <label className="block text-green-700 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </div>
  );
};

export default RegisterPage;

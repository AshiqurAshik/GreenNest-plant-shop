import React from 'react';
import { Link } from 'react-router';
import errorImg from '../assets/error page.png';

const ErrorPlant = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-4">
      <img
        src={errorImg}
        alt="Plant Not Found"
        className="w-full max-w-lg "
      />
      <h2 className="text-4xl font-bold text-green-700 mb-2">
        Plant Not Found
      </h2>

      <Link
        to="/"
        className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200 shadow-md"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPlant;

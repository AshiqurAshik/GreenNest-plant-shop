import React from 'react';

const PlantLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[300px]">
      
      <svg
        className="animate-spin-slow h-16 w-16 text-green-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C10.343 2 9 3.343 9 5c0 3 3 7 3 7s3-4 3-7c0-1.657-1.343-3-3-3zM7 14h10v2H7v-2zm-2 4h14v2H5v-2z" />
      </svg>

      
      <p className="mt-4 text-green-600 font-semibold animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default PlantLoader;

import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Auth Provider/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
  const { addProfileInfo, user } = useContext(AuthContext);
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;

    addProfileInfo(name, photoURL)
      .then(() => {
        toast.success('Profile updated successfully!');
        document.getElementById('profile_modal').close();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (!user) {
    return (
      <div
        className={`flex justify-center items-center min-h-screen px-4 transition-colors duration-300 ${
          isDark ? 'bg-gray-900 text-gray-300' : 'bg-green-50 text-gray-800'
        }`}
      >
        <div
          className={`rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 border transition-colors duration-300 ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-green-100'
          }`}
        >
          <h1 className="text-3xl font-bold text-center text-green-800">
            No User Logged In
          </h1>
          <p
            className={`text-lg text-center transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-green-600'
            }`}
          >
            You need to login to view your profile and update information.
          </p>
          <Link
            to="/login"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex justify-center items-center min-h-screen px-4 transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-gray-300' : 'bg-green-50 text-gray-800'
      }`}
    >
      <div
        className={`w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border transition-colors duration-300 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-green-100'
        }`}
      >
        <div
          className={`md:w-1/2 flex items-center justify-center p-8 transition-colors duration-300 ${
            isDark ? 'bg-gray-700' : 'bg-green-100'
          }`}
        >
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-green-600"
            />
          ) : (
            <div
              className={`w-64 h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center font-bold text-6xl transition-colors duration-300 ${
                isDark
                  ? 'bg-gray-600 text-gray-300'
                  : 'bg-green-200 text-green-600'
              }`}
            >
              {user.displayName?.charAt(0) || 'U'}
            </div>
          )}
        </div>

        <div className="md:w-1/2 flex flex-col justify-center p-8 gap-6">
          <h1
            className={`text-3xl md:text-4xl font-bold text-center md:text-left transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-800'
            }`}
          >
            My Profile
          </h1>
          <hr
            className={`border transition-colors duration-300 ${
              isDark ? 'border-gray-600' : 'border-green-200'
            }`}
          />

          <h2
            className={`text-2xl md:text-3xl font-semibold transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-700'
            }`}
          >
            {user.displayName || 'User Name'}
          </h2>
          <p
            className={`text-lg md:text-xl transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-green-600'
            }`}
          >
            {user.email}
          </p>

          <button
            className="w-1/2 md:w-1/3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
            onClick={() => document.getElementById('profile_modal').showModal()}
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id="profile_modal" className="modal modal-bottom sm:modal-middle">
        <div
          className={`modal-box rounded-2xl shadow-lg border p-6 transition-colors duration-300 ${
            isDark
              ? 'bg-gray-800 border-gray-700 text-gray-300'
              : 'bg-white border-green-100 text-gray-800'
          }`}
        >
          <h3
            className={`font-bold text-2xl mb-4 text-center transition-colors duration-300 ${
              isDark ? 'text-green-300' : 'text-green-700'
            }`}
          >
            Update Profile
          </h3>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label
                className={`block font-medium mb-1 transition-colors duration-300 ${
                  isDark ? 'text-green-300' : 'text-green-700'
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
                className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                  isDark
                    ? 'border-gray-600 bg-gray-700 text-gray-300 focus:ring-green-400'
                    : 'border-green-300 bg-white text-gray-800 focus:ring-green-600'
                }`}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                className={`block font-medium mb-1 transition-colors duration-300 ${
                  isDark ? 'text-green-300' : 'text-green-700'
                }`}
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                defaultValue={user.photoURL}
                className={`w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                  isDark
                    ? 'border-gray-600 bg-gray-700 text-gray-300 focus:ring-green-400'
                    : 'border-green-300 bg-white text-gray-800 focus:ring-green-600'
                }`}
                placeholder="Enter your photo URL"
              />
            </div>

            <div className="modal-action flex justify-end gap-4">
              <button
                type="button"
                className={`px-5 py-2 font-medium rounded-lg transition-colors duration-300 ${
                  isDark
                    ? 'bg-gray-600 hover:bg-gray-500 text-gray-200'
                    : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
                }`}
                onClick={() => document.getElementById('profile_modal').close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;

import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Auth Provider/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
  const { addProfileInfo, user } = useContext(AuthContext);

  const handleUpdate = (e) => {
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
      <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 border border-green-100">
          <h1 className="text-3xl font-bold text-green-800">
            No User Logged In
          </h1>
          <p className="text-green-600 text-lg text-center">
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
    <div className="flex justify-center items-center min-h-screen bg-green-50 px-4">
     
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-green-100">
       
        <div className="md:w-1/2 bg-green-100 flex items-center justify-center p-8">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-green-600"
            />
          ) : (
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-bold text-6xl">
              {user.displayName?.charAt(0) || 'U'}
            </div>
          )}
        </div>

       
        <div className="md:w-1/2 flex flex-col justify-center p-8 gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center md:text-left">
            My Profile
          </h1>
          <hr />

          <h2 className="text-2xl md:text-3xl font-semibold text-green-700">
            {user.displayName || 'User Name'}
          </h2>
          <p className="text-green-600 text-lg md:text-xl">{user.email}</p>

          <button
            className="w-1/2 md:w-1/3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
            onClick={() => document.getElementById('profile_modal').showModal()}
          >
            Update Profile
          </button>
        </div>
      </div>

      
      <dialog id="profile_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white rounded-2xl shadow-lg border border-green-100">
          <h3 className="font-bold text-2xl text-green-700 mb-4 text-center">
            Update Profile
          </h3>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-green-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-green-700 font-medium mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                defaultValue={user.photoURL}
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Enter your photo URL"
              />
            </div>

            <div className="modal-action flex justify-end gap-4">
              <button
                type="button"
                className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-5"
                onClick={() => document.getElementById('profile_modal').close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white font-medium px-5"
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

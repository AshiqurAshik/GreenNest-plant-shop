import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Auth Provider/AuthContext';
import { toast } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';

const LoginForm = () => {
  const { SignInUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    SignInUser(email, password)
      .then(() => {
        toast.success('User logged in successfully!');
        navigate(location.state?.from || '/');
      })
      .catch(() => {
        toast.error('Login failed! Please check your email and password.');
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success('Logged in with Google successfully!');
        navigate(location.state?.from || '/');
      })
      .catch(() => {
        toast.error('Google Sign-In failed. Please try again.');
      });
  };

  const handleForgotPassword = () => {
    if (!resetEmail) {
      toast.error('Please enter your email to reset password.');
      return;
    }

    const actionCodeSettings = {
      url: window.location.origin + '/login',
      handleCodeInApp: true,
    };

    sendPasswordResetEmail(auth, resetEmail, actionCodeSettings)
      .then(() => {
        toast.success(
          `Password reset email sent! Check your Gmail inbox for ${resetEmail}`
        );
        window.open('https://mail.google.com', '_blank');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100">
        <div className="lg:w-1/2 bg-green-600 text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Welcome to GreenNest 🌱
          </h1>
          <p className="text-center opacity-90 text-lg max-w-sm">
            Discover the joy of growing your own plants. Log in to explore our
            collection and book expert consultations.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center p-10">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
              Login to Your Account
            </h2>
            <form onSubmit={handleLogin} className="space-y-5">
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
                  onChange={(e) => setResetEmail(e.target.value)}
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
              <div className="flex justify-between items-center text-sm">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-green-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
              >
                Login
              </button>
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="btn bg-white text-black border-[#e5e5e5] w-full flex items-center justify-center gap-2 py-3 rounded-lg mt-3 hover:bg-gray-100 transition"
              >
                <svg
                  aria-label="Google logo"
                  width="18"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?{' '}
              <Link
                to="/register"
                className="text-green-600 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

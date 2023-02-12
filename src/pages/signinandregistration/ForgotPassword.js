import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const ForgotPassword = () => {
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState('');
  const { resetPassword } = useAuthContext();
  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(userEmail)
      .then(() => {
        toast.success('Please check your email for reset link🚀');
        e.target.reset();
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
      });
  };
  return (
    <section className="mb-32 bg-white">
      <div className="container mx-auto mt-24 flex items-center justify-center px-6">
        <form onSubmit={handleReset} className="w-full max-w-md">
          <h1 className="text-4xl text-gray-800 capitalize sm:text-3xl">
            Recover Password
          </h1>
          <p className="mt-12 text-gray-400">
            Please enter your email and we will send you a password reset link.
          </p>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
              type="email"
              placeholder="Email address"
              required
              className="block w-full py-3 text-gray-800 bg-white border px-11 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-10"
            />
          </div>
          {error && (
            <p className="font-primary font-semibold text-red-600">{error}</p>
          )}

          <div className="mt-6">
            <button className="px-12 py-3 text-sm tracking-wide text-gray-800 capitalize border border-secondary-700">
              Reset Password
            </button>

            <Link to="/" className="block mt-4 text-gray-800">
              Go Home
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;

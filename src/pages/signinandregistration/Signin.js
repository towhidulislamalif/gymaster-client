import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const Signin = () => {
  const { dispatch, profile, signIn, state } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const submit = (e) => {
    e.preventDefault();

    signIn(state.email, state.password)
      .then((userCredential) => {
        toast.success('Signed in successfully 🚀');
        dispatch({ type: 'ERROR' });
        navigate(from, { replace: true });
        // reset form fields
        e.target.reset();
      })
      .catch((err) => {
        console.error(err.message);
        dispatch({ type: 'ERROR', payload: err.message });
      });
  };

  return (
    <section className="mt-24 mb-36 bg-white">
      <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
        <div className="w-full">
          <h1 className="text-4xl font-semibold tracking-wider text-gray-800 capitalize">
            Login
          </h1>
          {/* form */}
          <form
            onSubmit={submit}
            className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
          >
            <div>
              <input
                onChange={(e) =>
                  dispatch({
                    type: 'INPUT',
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="block w-full px-5 py-3 mt-2 text-gray-800 placeholder-gray-400 bg-white border border-gray-400  focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-10"
              />
            </div>

            <div>
              <input
                onChange={(e) =>
                  dispatch({
                    type: 'INPUT',
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                className="block w-full px-5 py-3 mt-2 text-gray-800 placeholder-gray-400 bg-white border border-gray-400  focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-10"
              />
              {state.error && (
                <p className="font-primary font-semibold text-red-600">
                  {state.error}
                </p>
              )}

              <Link
                className="block mt-4 text-secondary-400"
                to="/forgot-password"
              >
                Forgot Password
              </Link>
            </div>

            <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide capitalize border border-secondary-700 hover:opacity-90">
              <span className="font-bold text-gray-800">Sign In</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 rtl:-scale-x-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>
          <Link className="block mt-4 text-gray-800" to="/sign-up">
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signin;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { useAuthContext } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, signout } = useAuthContext();
  const menus = [
    {
      item: 'Users',
      path: '/users',
    },
  ];

  const signoutUser = () => {
    setOpen(false);
    signout().then(() => toast.success('Sign-out successful.'));
  };

  return (
    <nav className="font-primary">
      {/* top */}
      <div className="bg-primary text-white">
        <div className="container px-6 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 text-sm sm:text-base">
              <div className="flex items-center gap-1">
                <HiOutlinePhone />
                <span>০১৭৭৬৯৬৩৯০৭</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineMail />
                <span>info@example.com</span>
              </div>
            </div>
            <div
              className={
                user?.uid
                  ? 'flex sm:flex-row items-center gap-2 ml-auto'
                  : 'hidden lg:flex items-center gap-2'
              }
            >
              <span className="text-sm sm:text-base">
                সকল প্রোডাক্টের উপর ৩০% ছাড়!
              </span>
              <button className="font-body text-sm sm:text-base py-2 px-2 rounded-md transition-colors duration-300 bg-white hover:bg-[#ccc] text-primary">
                বিস্তারিত
              </button>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base">
              {!user?.uid && (
                <>
                  <Link
                    className="font-medium transition-colors duration-300 transform hover:text-[#cccccc]"
                    to="/sign-in"
                  >
                    লগ ইন
                  </Link>
                  <Link
                    className="font-medium transition-colors duration-300 transform hover:text-[#cccccc]"
                    to="sign-up"
                  >
                    রেজিস্টার
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 flex-grow">
            <img
              className="w-auto"
              src="assets/logo/logo.svg"
              alt="brand-logo"
            />
            <h3 className="text-2xl sm:text-3xl text-primary">
              GYMASTER
              <span>&reg;</span>
            </h3>
          </Link>

          <div className="hidden sm:flex items-center flex-grow relative">
            <input
              type="text"
              placeholder="অনুসন্ধান করুন.."
              className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-400 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-10"
            />
            <img
              src="assets/icons/search.svg"
              alt=""
              className="absolute top-0 right-0 cursor-pointer px-3.5 py-3.5 bg-primary hover:opacity-90"
            />
          </div>

          <div className="flex items-center justify-end gap-6 flex-grow">
            <div className="relative inline-block">
              <img
                onClick={() => setOpen(!open)}
                title={user?.email}
                src="assets/icons/user.svg"
                alt=""
                className="cursor-pointer transition duration-300 hover:opacity-70"
              />
              {open && (
                <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl">
                  {menus.map((menu, index) => (
                    <Link
                      key={index}
                      onClick={() => setOpen(false)}
                      to={menu.path}
                      className="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-500 hover:bg-[#cccccc]"
                    >
                      {menu.item}
                    </Link>
                  ))}
                  {user?.uid && (
                    <button
                      onClick={signoutUser}
                      className="block text-start w-full px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-500 hover:bg-[#cccccc]"
                    >
                      Sign Out
                    </button>
                  )}
                </div>
              )}
            </div>
            <div className="relative cursor-pointer transition duration-300 hover:opacity-90">
              <img src="assets/icons/cart.svg" alt="" />
              <span className="absolute -top-5 -right-4 h-6 w-6 border rounded-full text-center bg-primary text-white">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

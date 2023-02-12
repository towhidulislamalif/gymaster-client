import React from 'react';
// icons
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="font-primary container px-6 py-8 mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* brand details */}
          <div>
            <Link className="flex items-center gap-2">
              <img src="assets/logo/footer-logo.svg" alt="brand-logo" />
              <h3 className="text-3xl text-white">
                GYMASTER
                <span>&reg;</span>
              </h3>
            </Link>

            <p className="block mt-12 text-white">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
            <div className="flex items-center gap-2 mt-3 text-white">
              <HiOutlineLocationMarker className="text-xl mb-4" />
              <span>3768 Stratford Court, Raleigh NC 27604</span>
            </div>
            <div className="flex items-center gap-2 mt-3 text-white">
              <HiOutlinePhone className="text-xl" />
              <span>+1 620-263-8162</span>
            </div>
            <div className="flex items-center gap-2 mt-3 text-white">
              <HiOutlineMail className="text-xl" />
              <span>info@furnimart.com</span>
            </div>
          </div>

          {/* links */}
          <div className="text-white">
            <div className="text-lg font-bold uppercase">Product</div>

            <p className="block mt-5">Overview</p>
            <p className="block mt-3">Features</p>
            <p className="block mt-3">Solutions</p>
            <p className="block mt-3">Tutorials</p>
            <p className="block mt-3">Pricing</p>
            <p className="block mt-3">Releases</p>
          </div>

          <div className="text-white">
            <div className="text-lg font-bold uppercase">Resources</div>

            <p className="block mt-5">Blog</p>
            <p className="block mt-3">Newsletter</p>
            <p className="block mt-3">Events</p>
            <p className="block mt-3">Help centre</p>
            <p className="block mt-3">Tutorials</p>
            <p className="block mt-3">Support</p>
          </div>

          <div className="text-white">
            <div className="text-lg font-bold uppercase">Social</div>

            <p className="block mt-5">Twitter</p>
            <p className="block mt-3">LinkedIn</p>
            <p className="block mt-3">Facebook</p>
            <p className="block mt-3">GitHub</p>
            <p className="block mt-3">AngelList</p>
            <p className="block mt-3">Dribbble</p>
          </div>

          <div className="text-white">
            <div className="text-lg font-bold uppercase">Legal</div>

            <p className="block mt-5">Terms</p>
            <p className="block mt-3">Privacy</p>
            <p className="block mt-3">Cookies</p>
            <p className="block mt-3">Licenses</p>
            <p className="block mt-3">Settings</p>
            <p className="block mt-3">Contact</p>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="sm:flex sm:items-center sm:justify-between">
          {/* copyright */}
          <p className="text-white">
            © 2022 Furniture Store LLC. All rights reserved.
          </p>
          {/* social */}
          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a href="#" target="_blank" className="mx-2" aria-label="twitter">
              <img src="assets/social/twitter.svg" alt="twitter" />
            </a>
            <a href="#" target="_blank" className="mx-2" aria-label="linkedin">
              <img src="assets/social/linkedin.svg" alt="linkedin" />
            </a>
            <a href="#" target="_blank" className="mx-2" aria-label="facebook">
              <img src="assets/social/facebook.svg" alt="facebook" />
            </a>
            <a href="#" target="_blank" className="mx-2" aria-label="github">
              <img src="assets/social/github.svg" alt="github" />
            </a>
            <a href="#" target="_blank" className="mx-2" aria-label="dribbble">
              <img src="assets/social/dribbble.svg" alt="twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

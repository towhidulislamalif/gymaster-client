import React from 'react';
import { Link } from 'react-router-dom';
import { sliderdata } from '../../api/Sliderdata';
import Banner from './Banner';
import Blogs from './Blogs';
import Categories from './Categories';
import '../../App.css';

const Homepage = () => {
  const links = [
    'হোম',
    'জিমের সরঞ্জাম',
    'জিমের সরঞ্জাম',
    'সাপ্লিমেন্টস',
    ' হ্যান্ড গ্রিপ',
    ' পুশ আপ বার',
    'আমাদের সম্পর্কে',
    'যোগাযোগ',
  ];
  return (
    <>
      {/* bottom nav */}
      <div className="hidden md:block font-body py-3 bg-[#d3d3d3]">
        <div className="flex items-center justify-center gap-4">
          {links.map((link, index) => (
            <Link className="text-sm md:text-base text-[#667085]" key={index}>
              {link}
            </Link>
          ))}
        </div>
      </div>
      <Banner slides={sliderdata} />
      <Categories />
      <Blogs />
    </>
  );
};

export default Homepage;
// black: {
//     100: "#d8cedb",
//     200: "#b29cb7",
//     300: "#8b6b94",
//     400: "#653970",
//     500: "#3e084c",
//     600: "#32063d",
//     700: "#25052e",
//     800: "#19031e",
//     900: "#0c020f"
// },

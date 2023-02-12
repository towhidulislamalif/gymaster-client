import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
  const categories = [
    {
      categories: 'জিমের সরঞ্জাম',
      img: 'assets/categories/category-img-one.png',
    },
    {
      categories: 'জিমের পোশাক',
      img: 'assets/categories/category-img-two.png',
    },
    {
      categories: 'সাপ্লিমেন্টস',
      img: 'assets/categories/category-img-three.png',
    },
  ];
  return (
    <section className="mt-16 mb-24 bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-primary font-semibold text-2xl text-secondary-700">
            ক্যাটাগোরি সমূহ
          </h1>

          <Link className="flex items-center gap-3 font-bold text-primary">
            <span>আরও দেখুন</span>
            <img src="assets/icons/arrow.svg" alt="" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

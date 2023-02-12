import React from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
  const blogs = [
    {
      category: 'লাইফস্টাইল',
      title: 'জেনে নিন, ডাম্বেল নিয়ে সহজে ব্যায়ামের নিয়ম!',
      description:
        'ডাম্বেল নিয়ে ব্যায়ামের সঙ্গে আগেই পরিচিত হয়েছেন আপনি আজ ডাম্বেল নিয়ে আরো কিছু ব্যায়ামের সঙ্গে...',
      img: 'assets/blogs/blog-img-one.png',
      author: {
        img: 'assets/author/author-one.png',
        name: 'ইফতেখার আহমেদ',
        created: '২০ শে জুলাই, ২০২২',
      },
    },
    {
      category: 'সুস্থতা',
      title: 'ফিট থাকতে শরীরচর্চা ও ডায়েট কেন জরুরী?',
      description:
        'মহামারী করোনা ভাইরাসের আতঙ্কে দীর্ঘদিন সবকিছু বন্ধ থাকার পর স্বল্প পরিসরে কাজগুলো শুরু হচ্ছে...',
      img: 'assets/blogs/blog-img-two.png',
      author: {
        img: 'assets/author/author-two.png',
        name: 'তাওসিফ হক',
        created: '২১ শে জুলাই, ২০২২',
      },
    },
    {
      category: 'স্বাস্থ্য টিপস',
      title: 'সুস্থ থাকতে নিত্যদিনের অভ্যাসে আনুন ৬ বদল',
      description:
        'অস্বাস্থ্যকর খাদ্যাভ্যাস ও জীবনযাপনের কারণে আজকাল ডায়াবেটিস, হাইপার টেনশন, স্থূলতা ও হার্টের রোগের মতো...',
      img: 'assets/blogs/blog-img-three.png',
      author: {
        img: 'assets/author/author-three.png',
        name: 'সাকিব রহমান',
        created: '২৩ শে জুলাই, ২০২২',
      },
    },
  ];

  return (
    <section className="mb-16 bg-white">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between gap-3 ">
          <div>
            <h1 className="text-2xl font-primary font-semibold capitalize lg:text-3xl text-secondary-700">
              আমাদের ব্লগ সমূহ
            </h1>
            <p className="mt-5 mb-16 text-secondary-400">
              সুস্থ থাকতে আমাদের ব্লগ সমূহ পড়ুন, সর্বশেষ স্বাস্থ্য পরামর্শ নিন
            </p>
          </div>

          <button className="px-4 py-2 text-sm md:text-base tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:opacity-90">
            ব্লগগুলো দেখুন
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <Blog key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

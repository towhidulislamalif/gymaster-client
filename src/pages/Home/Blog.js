import React from 'react';

const Blog = ({ blog }) => {
  const { author, category, description, img, title } = blog;
  return (
    <div>
      <img
        className="object-cover object-center w-full h-64 lg:h-80"
        src={img}
        alt=""
      />

      <div className="mt-8">
        <span className="uppercase text-primary">{category}</span>

        <div className="flex justify-between">
          <h1 className="mt-4 md:text-lg font-semibold text-secondary-700">
            {title}
          </h1>
          <img src="assets/icons/arrow.svg" alt="" className="mt-4 md:mt-2" />
        </div>

        <p className="mt-2 text-sm md:text-base text-secondary-400">
          {description}
        </p>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            <img src={author.img} alt="author" />
            <div>
              <span className="text-sm text-secondary-700">{author.name}</span>
              <p className="text-sm text-secondary-400">{author.created}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

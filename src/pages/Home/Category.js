import React from 'react';

const Category = ({ category }) => {
  const { categories, img } = category;
  return (
    <div>
      <img
        className="object-cover object-center w-full h-64 lg:h-80"
        src={img}
        alt=""
      />
      <div className="mt-6">
        <h3 className="font-primary font-bold text-2xl text-center uppercase text-primary">
          {categories}
        </h3>
      </div>
    </div>
  );
};

export default Category;

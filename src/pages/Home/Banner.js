import React, { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Banner = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slide">
      <HiChevronLeft className="prevSlide" onClick={prevSlide} />
      <HiChevronRight className="nextSlide" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? 'slide active' : 'slide'}
          >
            {index === current && (
              <div key={index} className="banner">
                <img className="slideimg" src={slide.image} alt="banner" />
                <div className="banner__content">
                  <h1 className="banner__title">{slide.title}</h1>
                  <p className="banner__discount">{slide.discount}</p>
                  <Link className="banner__btn" to={slide.path}>
                    {slide.label}
                  </Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Banner;

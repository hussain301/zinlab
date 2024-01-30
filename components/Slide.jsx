/** @format */

'use client';
import React from 'react';
import Slider from 'react-slick';
import Tile from '../ui/Tile';

const Slide = ({ heading, tiles }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <section className='container px-16 mt-16'>
      <h1 className='text-3xl font-bold my-5'>{heading}</h1>
      <Slider {...settings}>
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            icon={tile.icon}
            heading={tile.heading}
            text={tile.text}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Slide;

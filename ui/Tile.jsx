/** @format */

import React from 'react';

const Tile = ({ icon, heading, text }) => {
  return (
    <div className='w-52 h-48  hover:shadow-lg transition-all duration-200 border bg-white p-5 rounded-lg '>
      <div className='mb-4'>{icon}</div>
      <h2 className='text-lg font-semibold  text-gray-800 mb-2'>{heading}</h2>
      <p className='text-sm text-gray-500'>{text}</p>
    </div>
  );
};

export default Tile;

/** @format */

import React from 'react';
import { RiEditBoxFill,RiFindReplaceFill } from 'react-icons/ri';
import { PiCropFill } from 'react-icons/pi';
import { MdOutlineCropRotate } from 'react-icons/md';


import Tile from '../ui/Tile';
const Bookmarks = () => {
    const tiles = [
      {
        icon: <RiEditBoxFill className='w-14 h-14 text-orange-500' />,
        heading: 'Edit PDF',
        text: 'use the best pdf tool to edit pdf in your browser',
      },
      {
        icon: <PiCropFill className='w-14 h-14 text-orange-500' />,
        heading: 'Crop PDF',
        text: 'use the best pdf tool to crop pdf in your browser',
      },
      {
        icon: <RiFindReplaceFill className='w-14 h-14 text-orange-500' />,
        heading: 'Replace Text',
        text: 'replace easyly text in your pdf in your browser',
      },
      {
        icon: <MdOutlineCropRotate className='w-14 h-14 text-orange-500' />,
        heading: 'Rotate PDF',
        text: 'rotate and save your pdf in your browser ',
      },
    ];
  return (
    <section className='container px-16 mt-16'>
      <h1 className='text-3xl font-bold my-5'>Your Bookmarks</h1>
      <div className='flex gap-5 '>
        {tiles.map((tile, index) => (
          <Tile
            key={index}
            icon={tile.icon}
            heading={tile.heading}
            text={tile.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Bookmarks;

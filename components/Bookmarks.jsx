/** @format */

import React from 'react';


import Tile from '../ui/Tile';
 
const Bookmarks = ({tiles, title}) => {

  return (
    <section className='container px-16 mt-16'>
      <h1 className='text-3xl font-bold my-5'>{title}</h1>
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


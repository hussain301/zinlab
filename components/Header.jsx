// Header.jsx
import React from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { IoMdSearch } from 'react-icons/io';
import Link from 'next/link';
const menuItems = [
  'Stock Video',
  'Video Templates',
  'Music',
  'Sound Effects',
  'Graphic Templates',
  'Graphics',
  'Presentation Templates',
  'Photos',
  'Fonts',
  'Add-ons',
  'More',
];

const Header = () => (
  <header className='flex flex-col justify-between border-top shadow-sm px-8 pt-3 '>
    <div className='flex justify-between'>
      <h2 className='flex items-center space-x-1'>
        <span className='p-1 rounded-md bg-blue-500'>
          <BsFillGearFill className='text-3xl text-white ' />
        </span>
        <span className='font-bold text-2xl tracking-tighter'>ZinTools</span>
      </h2>
      <div className='relative w-1/2 '>
        <input
          id='search'
          type='text'
          placeholder='Search for Movies, TV Shows, Themes & Cast '
          className=' text-[16px] text-gray-500 px-6 py-2 bg-gray-200 focus:outline-none rounded-full pr-10 w-full'
        />{' '}
        <div className='absolute right-12 top-1/2 transform -translate-y-1/2'>
          |
        </div>
        <label htmlFor='search'>
          <IoMdSearch className='absolute top-1/2 text-2xl right-3 transform -translate-y-1/2' />
        </label>
      </div>
      <div className='flex gap-3 px items-center'>
        <button className='px-3 py-2 text-gray-500 font-semibold'>
          Log in
        </button>
        <button className='px-3 py-2 bg-blue-500 text-white rounded-full'>
          Sign up
        </button>
      </div>
    </div>
   <nav className='mt-6'>
      <ul className='flex gap-8 text-sm font-semibold text-gray-500'>
        {menuItems.map((item) => (
          <li key={item} className='border-b-2 pb-5 border-b-transparent hover:border-b-purple-500 transition-all duration-200'>
            <Link href={`/${item.toLowerCase().replace(' ', '-')}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
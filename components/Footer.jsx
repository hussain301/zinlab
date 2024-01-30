/** @format */

'use client';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsFillGearFill } from 'react-icons/bs';
import Link from 'next/link';
const Footer = () => {
  const footerLinks = [
    { name: 'Privacy Policy', link: '#' },
    { name: 'Terms and conditions', link: '#' },
    { name: 'Cookies Policy', link: '#' },
    { name: 'About us', link: '#' },
    { name: 'EULA', link: '#' },
    { name: 'Contact', link: '#' },
  ];
  const links = [
    {
      category: 'Internal Links',
      links: [
        { name: 'Documentaries' },
        { name: 'Themes' },
        { name: 'Chrome casts' },
      ],
    },
    {
      category: 'Enterprise',
      links: [
        { name: 'Download Chrome Browser' },
        { name: 'Chrome Browser for Enterprise' },
        { name: 'Chrome Browser Devices' },
        { name: 'ChromeOS' },
        { name: 'Google Cloud' },
        { name: 'Google Workspace' },
      ],
    },
    {
      category: 'Internal Links',
      links: [
        { name: 'Documentaries' },
        { name: 'Themes' },
        { name: 'Chrome casts' },
      ],
    },
    {
      category: 'Enterprise',
      links: [
        { name: 'Download Chrome Browser' },
        { name: 'Chrome Browser for Enterprise' },
        { name: 'Chrome Browser Devices' },
        { name: 'ChromeOS' },
        { name: 'Google Cloud' },
        { name: 'Google Workspace' },
      ],
    },
  ];
  return (
    <footer className='bg-gray-200 py-8 mt-56'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center space-x-4 mb-4'>
          <p className='text-gray-600'>Follow us:</p>
          <div className='flex space-x-4'>
            <Link
              href='#'
              className='text-gray-600 text-xl hover:text-gray-800'
            >
              <FaFacebook />
            </Link>
            <Link
              href='#'
              className='text-gray-600 text-xl hover:text-gray-800'
            >
              <FaTwitter />
            </Link>
            <Link
              href='#'
              className='text-gray-600 text-xl hover:text-gray-800'
            >
              <FaInstagram />
            </Link>
            <Link
              href='#'
              className='text-gray-600 text-xl hover:text-gray-800'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <hr className='border-gray-300  mb-4' />
        <div className='grid grid-cols-5 py-10 gap-4'>
          {links.map((linkCategory, index) => (
            <div
              key={index}
              className='flex flex-col space-y-4'
            >
              <h2 className='text-lg font-semibold'>{linkCategory.category}</h2>
              {linkCategory.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href='#'
                  className='text-gray-600 text-sm hover:text-gray-800'
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
          <div className='col-span-1'></div>
        </div>
        <hr className='border-gray-300 mt-4 mb-4' />
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <BsFillGearFill className='text-gray-600 text-4xl mr-2 ' />
            <p className='text-white text-2xl bg-blue-500 font-semi p-2 rounded-sm uppercase '>
              zinTools
            </p>
          </div>
          <ul className='flex space-x-4 py-5'>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href='#'
                  className='text-gray-600 text-sm hover:text-gray-800'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

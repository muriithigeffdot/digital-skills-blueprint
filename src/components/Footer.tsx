import React from 'react';
import Editable from './ui/Editable';
import { Facebook, Youtube, Linkedin, Globe } from 'lucide-react';

const TikTokIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='lucide lucide-music'>
    <path d='M9 18V5l12-2v13'/>
    <circle cx='6' cy='18' r='3'/>
    <circle cx='18' cy='16' r='3'/>
  </svg>
);

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-gray-800 py-8 mt-12'>
      <div className='container mx-auto px-4 text-center text-gray-600 dark:text-gray-400'>
        <h3 className='text-lg font-semibold'><Editable path='footer.contact' /></h3>
        <p className='mt-2'><Editable path='footer.email' /></p>
        <div className='flex justify-center items-center space-x-4 mt-4'>
          <a href='#' target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-primary transition-colors'><Facebook size={24} /></a>
          <a href='#' target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-primary transition-colors'><TikTokIcon /></a>
          <a href='#' target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-primary transition-colors'><Youtube size={24} /></a>
          <a href='#' target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-primary transition-colors'><Linkedin size={24} /></a>
          <a href='#' target='_blank' rel='noopener noreferrer' className='text-gray-500 hover:text-primary transition-colors'><Globe size={24} /></a>
        </div>
        <p className='text-sm mt-4'>&copy; 2025 YSD Digital Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

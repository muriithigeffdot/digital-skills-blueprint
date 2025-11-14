import React from 'react';
import { Link } from 'react-router-dom';
import Editable from './ui/Editable';

const Header = () => {
  return (
    <header className='bg-card shadow-md'>
      <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold text-primary'>
          <Editable path='header.brand' as='h1' />
        </div>
        <ul className='flex items-center space-x-6'>
          <li><Link to='/' className='hover:text-primary'><Editable path='header.nav.home' /></Link></li>
          <li><Link to='/modules' className='hover:text-primary'><Editable path='header.nav.modules' /></Link></li>
          <li><Link to='/resources' className='hover:text-primary'><Editable path='header.nav.resources' /></Link></li>
          <li><Link to='/announcements' className='hover:text-primary'><Editable path='header.nav.announcements' /></Link></li>
          <li><Link to='/feedback' className='hover:text-primary'><Editable path='header.nav.feedback' /></Link></li>
          <li><Link to='/dashboard' className='hover:text-primary'><Editable path='header.nav.dashboard' /></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

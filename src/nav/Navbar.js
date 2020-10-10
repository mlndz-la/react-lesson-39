import React, {  } from 'react';

import TopNavbar from './top-navbar/TopNavbar';
import BodyNavbar from './body-navbar/BodyNavbar';

import './css/navbar.css';

const Navbar = () => {
  return (
      <div>
        <div className='navbar-container'>
          <TopNavbar />
          <BodyNavbar />
        </div>
      </div>
  );
}

export default Navbar;
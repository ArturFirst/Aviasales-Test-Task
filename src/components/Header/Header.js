import React from 'react';

import './header.scss';

const Header = () => {
  return (
    <header className='header logo'>
      <img
        src='./img/logo.svg'
        width='90'
        height='90'
        alt='Logo' />
    </header>
  )
}

export default Header;

import '../styles/components/normalize.css';
import '../styles/components/layout/Header.css';
import React from 'react';

function Header() {
  return (
    <>
      <a href='#' className='header__logo-link'>
        <img
          src='images/inicio/logo.png'
          alt='Logo CryptoWeb'
          className='header__img'
        />
        <p className='header__title'>
          Crypto<span>Web</span>
        </p>
      </a>
    </>
  );
}

export default Header;

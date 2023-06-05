import '../styles/components/normalize.css';
import '../styles/components/layout/Footer.css';

function Footer() {
  return (
    <footer>
      <a href='#' className='header__logo-link footer__logo'>
        <img
          src='images/inicio/logo.png'
          alt='Logo CryptoWeb'
          className='header__img'
        />
        <p className='header__title'>
          Crypto<span>Web</span>
        </p>
      </a>
      <p className='footer__copyr'>Copyright 2022 CryptoWeb, Inc.</p>
    </footer>
  );
}

export default Footer;

import '../styles/components/normalize.css';
import '../styles/components/layout/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className='header__list'>
        <Link to='/' className='header__list-links active'>
          <li>Inicio</li>
        </Link>
        <Link to='/nosotros' className='header__list-links'>
          <li>Nosotros</li>
        </Link>
        <Link to='/novedades' className='header__list-links'>
          <li>Noticias</li>
        </Link>
        <Link to='/servicios' className='header__list-links'>
          <li>Servicios</li>
        </Link>
        <Link to='/contacto' className='header__list-links'>
          <li>Contacto</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

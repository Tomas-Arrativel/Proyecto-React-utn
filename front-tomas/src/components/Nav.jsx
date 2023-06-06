import '../styles/components/normalize.css';
import '../styles/components/layout/Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className='header__list'>
        <NavLink to='/' className='header__list-links'>
          <li>Inicio</li>
        </NavLink>
        <NavLink to='/nosotros' className='header__list-links'>
          <li>Nosotros</li>
        </NavLink>
        <NavLink to='/novedades' className='header__list-links'>
          <li>Noticias</li>
        </NavLink>
        <NavLink to='/servicios' className='header__list-links'>
          <li>Servicios</li>
        </NavLink>
        <NavLink to='/contacto' className='header__list-links'>
          <li>Contacto</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;

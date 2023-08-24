import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li className={s.name}>
            <NavLink to="/" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              main
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/about" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              about
            </NavLink>
          </li>
        </ul>
        {/* <button
          type="button"
          onClick={() => document.body.setAttribute('data-theme', 'dark-theme')}
        >
          dark-theme
        </button> */}
      </nav>
    </header>
  );
};

export default Header;

import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink to="/voting" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              voting
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/breeds" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              breeds
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/gallery" className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
              gallery
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import s from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={s.container}>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;

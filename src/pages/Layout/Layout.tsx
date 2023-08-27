import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import s from './Layout.module.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Modal from '../Modal/Modal';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <div className={s.layout}>
      <Modal />
      <Navigation />
      <div className={s.appBody}>
        {!isHomePage && <SearchPanel />}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

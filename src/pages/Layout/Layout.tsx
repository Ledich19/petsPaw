import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import s from './Layout.module.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import Modal from '../Modal/Modal';

const Layout = () => {
  return (
    <div className={s.layout}>
      <Modal />
      <Navigation />
      <div className={s.appBody}>
        <SearchPanel />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

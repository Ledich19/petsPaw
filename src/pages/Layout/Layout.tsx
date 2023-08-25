import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import s from './Layout.module.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

const Layout = () => {
  return (
    <div className={s.layout}>
      <Navigation />
      <div className={s.appBody}>
        <SearchPanel />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

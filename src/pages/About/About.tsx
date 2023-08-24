import { Outlet } from 'react-router-dom';
import s from './About.module.scss';

const About = () => {
  return (
    <div className={s.about}>
      About
      <Outlet />
    </div>
  );
};
export default About;

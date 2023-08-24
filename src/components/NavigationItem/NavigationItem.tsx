import { NavLink } from 'react-router-dom';
import s from './NavigationItem.module.scss';

type NavigationItemProps = {
  img?: string;
  color?: Color;
  text: string;
  to: string;
};
type Color = keyof typeof colorMapping;

const colorMapping = {
  blue: 'var(--mainBlue)',
  green: 'var(--mainGreen)',
  yellow: 'var(--mainYellow)',
  white: '#FFFFFF',
};

const NavigationItem = ({ img, color = 'white', text, to }: NavigationItemProps) => {
  if (!text || !to) {
    return null;
  }

  return (
    <div className={s.container}>
      <div style={{ backgroundColor: colorMapping[color] }} className={s.imgWrapper}>
        <img className={s.img} src={img} alt="" />
      </div>
      <NavLink to={to} className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
        {text}
      </NavLink>
    </div>
  );
};

NavigationItem.defaultProps = {
  img: '/img/no-image.png',
  color: 'white',
};

export default NavigationItem;

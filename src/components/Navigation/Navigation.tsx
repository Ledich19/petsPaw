import s from './Navigation.module.scss';
import NavigationItem from '../NavigationItem/NavigationItem';
import Switcher from '../Switcher/Switcher';

const Navigation = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.heder}>
          <span className={s.logo}>
            <span className="icon-paw" />
            <span className={s.logoText}>PetsPaw</span>
          </span>
          <Switcher />
        </div>
        <div className={`${s.title}`}>Hi!👋</div>
        <div className={s.welcome}>Welcome to MacPaw Bootcamp 2023</div>
        <div className={s.subTitle}>Lets start using The Cat API</div>

        <nav className={s.navigation}>
          <NavigationItem img="/img/voting.png" color="blue" text="voting" to="/voting" />
          <NavigationItem img="/img/breeds.png" color="green" text="breeds" to="/breeds" />
          <NavigationItem img="/img/gallery.png" color="yellow" text="gallery" to="/gallery" />
        </nav>
      </div>
    </header>
  );
};

export default Navigation;

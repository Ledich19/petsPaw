import { useState } from 'react';
import s from './Switcher.module.scss';

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);

    if (newCheckedState) {
      document.body.setAttribute('data-theme', 'dark-theme');
    } else {
      document.body.removeAttribute('data-theme');
    }
  };

  return (
    <div className={s.page}>
      <input
        checked={isChecked}
        onChange={handleCheck}
        type="checkbox"
        id="themeSwitch"
        name="theme-switch"
        className={s.theme__input}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="themeSwitch" className={s.themeSwitch__label}>
        <span />
      </label>
    </div>
  );
};

Switcher.defaultProps = {};

export default Switcher;

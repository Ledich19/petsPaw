import { MouseEvent } from 'react';

import s from './Button.module.scss';

type ButtonProps = {
  size: 'small' | 'big';
  type: Action;
  handler: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};
type Action = keyof typeof actionMapping;

const actionMapping = {
  like: 'icon-like',
  dislike: 'icon-dislike',
  fav: 'icon-fav',
  favCheck: 'icon-fav-color',
  update: 'icon-update',
  close: 'icon-close',
};

const Button = ({ size, type, handler, className }: ButtonProps) => {
  const classNameSize = size === 'big' ? s.bigBtn : s.smallBtn;
  return (
    <button
      onClick={handler}
      type="button"
      aria-label="Лайк"
      className={`${classNameSize} ${className}`}
    >
      <span className={`${actionMapping[type]}`} />
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

export default Button;

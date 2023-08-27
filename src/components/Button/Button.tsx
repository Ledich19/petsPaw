import { MouseEvent } from 'react';

import s from './Button.module.scss';

type ButtonProps = {
  size: 'small' | 'big';
  type: Action;
  handler: (e: MouseEvent<HTMLButtonElement>) => void;
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

const Button = ({ size, type, handler }: ButtonProps) => {
  const className = size === 'big' ? s.bigBtn : s.smallBtn;
  return (
    <button onClick={handler} type="button" aria-label="Лайк" className={className}>
      <span className={`${actionMapping[type]}`} />
    </button>
  );
};

Button.defaultProps = {};

export default Button;

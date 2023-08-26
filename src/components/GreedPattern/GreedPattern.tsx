import { ReactNode } from 'react';
import s from './GreedPattern.module.scss';

type ItemProps = {
  children: ReactNode[];
};

const GreedPattern = ({ children }: ItemProps) => {
  return (
    <div className={s.gridContainer}>
      <div className={s.gridParent}>{children}</div>
    </div>
  );
};

export default GreedPattern;

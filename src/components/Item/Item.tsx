import { FaGithub } from 'react-icons/fa';
import s from './Item.module.scss';

type ItemProps = {
  value?: string;
};

const Item = ({ value }: ItemProps) => {
  return <div className={s.item}>{value || 'value'}</div>;
};

Item.defaultProps = {
  value: 'defaultValue',
};

export default Item;

import { ChangeEvent } from 'react';
import s from './Select.module.scss';

type SelectProps = {
  type?: 1 | 2;
  options: {
    text: string;
    value: string;
  }[];
  multiple?: boolean;
  handler: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, multiple, handler, type }: SelectProps) => {
  const activeClass = type === 2 ? s.selectTypeTwo : s.selectTypeOne;
  return (
    <select onChange={handler} multiple={multiple} className={activeClass}>
      {options.map((option) => {
        return (
          <option key={option.value} className={s.option} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
};

Select.defaultProps = {
  type: 1,
  multiple: false,
};

export default Select;

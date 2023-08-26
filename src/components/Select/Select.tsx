import { ChangeEvent } from 'react';
import s from './Select.module.scss';

type SelectProps = {
  options: string[];
  prefix: string;
  multiple?: boolean;
  handler: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, prefix, multiple, handler }: SelectProps) => {
  return (
    <select onChange={handler} multiple={multiple} className={s.select}>
      {options.map((option) => {
        return (
          <option key={option} className={s.option} value={option}>
            {prefix} {option}
          </option>
        );
      })}
    </select>
  );
};

Select.defaultProps = {
  multiple: false,
};

export default Select;

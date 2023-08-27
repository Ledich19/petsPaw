import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setSearchBreeds } from '../../redux/breedsReducer';
import Button from '../Button/Button';
import s from './SearchPanel.module.scss';

const SearchPanel = () => {
  const dispatch = useAppDispatch();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchBreeds(e.target.value));
  };

  return (
    <div className={s.container}>
      <div className={s.search}>
        <input
          onChange={handleSearch}
          required
          type="text"
          className={s.searchTerm}
          placeholder="Search for breeds by name"
        />
        <button type="submit" className={s.searchButton}>
          <span className="icon-search" />
        </button>
      </div>
      <Button handler={() => {}} size="big" type="like" />
      <Button handler={() => {}} size="big" type="fav" />
      <Button handler={() => {}} size="big" type="dislike" />
    </div>
  );
};

SearchPanel.defaultProps = {};

export default SearchPanel;

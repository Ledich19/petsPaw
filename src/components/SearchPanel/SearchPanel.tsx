import Button from '../Button/Button';
import s from './SearchPanel.module.scss';

const SearchPanel = () => {
  return (
    <div className={s.container}>
      <div className={s.search}>
        <input
          required
          type="text"
          className={s.searchTerm}
          placeholder="What are you looking for?"
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

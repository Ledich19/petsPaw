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
      <button type="button" aria-label="Лайк" className={s.btn}>
        <span className="icon-like" />
      </button>
      <button type="button" className={s.btn}>
        <span className="icon-fav" />
      </button>
      <button type="button" className={s.btn}>
        <span className="icon-dislike" />
      </button>
    </div>
  );
};

SearchPanel.defaultProps = {};

export default SearchPanel;

import s from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.loader}>
        <div className={s.roller} />
        <div className={s.roller} />
      </div>

      <div id={s.loader2} className={s.loader}>
        <div className={s.roller} />
        <div className={s.roller} />
      </div>

      <div id={s.loader3} className={s.loader}>
        <div className={s.roller} />
        <div className={s.roller} />
      </div>
    </div>
  );
};

Loader.defaultProps = {};

export default Loader;

import s from './BackBtn.module.scss';

const BackBtn = () => {
  return (
    <button onClick={() => window.history.back()} type="button" className={s.btn}>
      <span className="icon-back" />
    </button>
  );
};

BackBtn.defaultProps = {};

export default BackBtn;

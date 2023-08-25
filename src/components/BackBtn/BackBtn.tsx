import s from './BackBtn.module.scss';

const BackBtn = () => {
  return (
    <button type="button" className={s.btn}>
      <span className="icon-back" />
    </button>
  );
};

BackBtn.defaultProps = {};

export default BackBtn;

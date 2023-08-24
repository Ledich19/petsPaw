import s from './HelloPage.module.scss';

const HelloPage = () => {
  return (
    <div className={s.hello}>
      <div className={s.wrapper}>
        <img className={s.img} src="img/hello.png" alt="man to hug cat" />
      </div>
    </div>
  );
};

export default HelloPage;

import s from './Title.module.scss';

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <div className={s.title}>{text}</div>;
};

export default Title;

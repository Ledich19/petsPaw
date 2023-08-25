import s from './ActionLogItem.module.scss';

type ActionLogItemProps = {
  id: string;
  date: string;
  reaction: StatusType;
};

export type StatusType = keyof typeof statusMapping;

const statusMapping = {
  like: `${s.green} icon-like`,
  dislike: `${s.yellow} icon-dislike`,
  favorites: `${s.red} icon-fav`,
};

const ActionLogItem = ({ id, date, reaction }: ActionLogItemProps) => {
  const now = new Date(date);
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return (
    <div className={s.container}>
      <div className={s.time}>
        {hours}:{minutes}
      </div>
      <div className={s.imageId}>
        Image ID: <span className={s.id}>{id}</span> was added to Favourites
      </div>
      {reaction && <span className={statusMapping[reaction]} />}
    </div>
  );
};

ActionLogItem.defaultProps = {};

export default ActionLogItem;

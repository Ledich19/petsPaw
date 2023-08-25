import { UserActionLog } from '../../../app/types';
import ActionLogItem from '../ActionLogItem/ActionLogItem';
import s from './ActionLogList.module.scss';

type ActionLogListProps = {
  userActionLogs: UserActionLog[];
};

const ActionLogList = ({ userActionLogs }: ActionLogListProps) => {
  return (
    <div className={s.story}>
      <div className={s.wrapper}>
        {[...userActionLogs].reverse().map((log) => {
          return (
            <ActionLogItem key={log.imgId} id={log.imgId} date={log.date} reaction={log.reaction} />
          );
        })}
      </div>
    </div>
  );
};

export default ActionLogList;

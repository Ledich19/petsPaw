import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import BackBtn from '../BackBtn/BackBtn';
import Title from '../Title/Title';
import s from './VotingBody.module.scss';
import { NO_IMAGE } from '../../app/variables';
import Loader from '../Loader/Loader';
import VotesPanel from './VotesPanel/VotesPanel';
import { getImage } from '../../redux/votesReducer';
import ActionLogItem from './ActionLogItem/ActionLogItem';
import ActionLogList from './ActionLogList/ActionLogList';

type VotingBodyProps = {
  title: string;
};

const VotingBody = ({ title }: VotingBodyProps) => {
  const dispatch = useAppDispatch();
  const { imgForVotes, userActionLogs } = useAppSelector((store) => store.votes);
  useEffect(() => {
    if (!imgForVotes) {
      dispatch(getImage());
    }
  }, []);

  return (
    <div className={s.voteBody}>
      <div className={s.header}>
        <BackBtn />
        <Title text="voting" />
      </div>
      <div className={s.main}>
        <div className={s.imageBox}>
          <img src={imgForVotes?.url || NO_IMAGE} alt="" />
          {!imgForVotes?.url && <Loader />}
        </div>
        <VotesPanel imageId={imgForVotes?.id || null} className={s.buttons} />
      </div>
      <ActionLogList userActionLogs={userActionLogs || []} />
    </div>
  );
};

VotingBody.defaultProps = {};

export default VotingBody;

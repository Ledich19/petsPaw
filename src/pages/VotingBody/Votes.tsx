import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import s from './Votes.module.scss';
import { NO_IMAGE } from '../../app/variables';
import VotesPanel from './VotesPanel/VotesPanel';
import { getImage } from '../../redux/votesReducer';
import ActionLogList from './ActionLogList/ActionLogList';
import Loader from '../../components/Loader/Loader';
import Title from '../../components/Title/Title';
import BackBtn from '../../components/BackBtn/BackBtn';

const Votes = () => {
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

Votes.defaultProps = {};

export default Votes;

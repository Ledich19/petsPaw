import s from './Votes.module.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import VotingBody from '../../components/VotingBody/VotingBody';

const Votes = () => {
  return (
    <div className={s.container}>
      <SearchPanel />
      <VotingBody />
    </div>
  );
};

export default Votes;

import s from './Breeds.module.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import VotingBody from '../../components/VotingBody/VotingBody';

const Breeds = () => {
  return (
    <div className={s.breeds}>
      <SearchPanel />
      <VotingBody />
    </div>
  );
};

export default Breeds;

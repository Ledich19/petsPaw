import { getImage, voteImage } from '../../../redux/votesReducer';
import s from './VotesPanel.module.scss';
import { useAppDispatch } from '../../../app/hooks';

type VotesPanelProps = {
  imageId: string | null;
  className?: string;
};

const VotesPanel = ({ imageId, className }: VotesPanelProps) => {
  const dispatch = useAppDispatch();

  const like = () => {
    if (imageId) {
      dispatch(voteImage(imageId, 'like'));
    }
  };
  const dislike = () => {
    if (imageId) {
      dispatch(voteImage(imageId, 'dislike'));
    }
  };
  const fav = () => {
    if (imageId) {
      dispatch(getImage());
    }
  };

  return (
    <div className={`${s.btnBlock} ${className}`}>
      <button onClick={like} type="button" aria-label="Лайк" className={s.like}>
        <span className="icon-like" />
      </button>
      <button onClick={fav} type="button" className={s.fav}>
        <span className="icon-fav" />
      </button>
      <button onClick={dislike} type="button" className={s.dislike}>
        <span className="icon-dislike" />
      </button>
    </div>
  );
};

VotesPanel.defaultProps = {
  className: '',
};

export default VotesPanel;

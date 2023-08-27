import s from './GalleryItem.module.scss';
import Button from '../../../components/Button/Button';

type GalleryItemProps = {
  url: string;
  id: string;
};

const GalleryItem = ({ url, id }: GalleryItemProps) => {
  return (
    <div className={s.breedItem}>
      <img className={s.img} src={url || '/img/no-image.png'} alt="" />
      <div className={s.mask}>
        <Button handler={() => {}} size="small" type="fav" />
      </div>
    </div>
  );
};

export default GalleryItem;

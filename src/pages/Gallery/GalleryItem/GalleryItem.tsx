import { NavLink } from 'react-router-dom';
import s from './GalleryItem.module.scss';
import { useGetImageByIdQuery } from '../../../services/imagesAPI';
import Button from '../../../components/Button/Button';

type GalleryItemProps = {
  url: string;
  id: string;
};

const GalleryItem = ({ url, id }: GalleryItemProps) => {
  // const { data, error, isLoading } = useGetImageByIdQuery(imgId);
  // console.log(data);

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

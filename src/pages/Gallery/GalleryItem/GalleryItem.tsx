import { NavLink } from 'react-router-dom';
import s from './GalleryItem.module.scss';
import { useGetImageByIdQuery } from '../../../services/imagesAPI';

type GalleryItemProps = {
  imgId: string;
  name: string;
  id: string;
};

const GalleryItem = ({ imgId, name, id }: GalleryItemProps) => {
  const { data, error, isLoading } = useGetImageByIdQuery(imgId);
  console.log(data);

  return (
    <div className={s.breedItem}>
      <img className={s.img || '/img/no-image.png'} src={data ? data?.url : ''} alt={name} />
      <div className={s.mask}>
        <NavLink to={id} className={(info) => (info.isActive ? s.activeLink : s.navLink)}>
          {name}
        </NavLink>
      </div>
    </div>
  );
};

export default GalleryItem;

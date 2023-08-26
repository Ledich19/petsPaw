import { useParams } from 'react-router-dom';
import { useState } from 'react';
import BackBtn from '../../../components/BackBtn/BackBtn';
import Loader from '../../../components/Loader/Loader';
import Title from '../../../components/Title/Title';
import { Breed } from '../../../app/types';
import { useGetImagesQuery } from '../../../services/imagesAPI';
import { useGetBreedByIdQuery } from '../../../services/breedsAPI';
import s from './BreedImages.module.scss';

type BreedImagesProps = {
  breedId: string;
  name: string;
};
const BreedImages = ({ breedId, name }: BreedImagesProps) => {
  const [activeImg, setActiveImg] = useState(0);
  const LIMIT_BREED_SLIDER_IMG = 5;
  const { data, error, isLoading } = useGetImagesQuery({
    breed_ids: breedId,
    limit: LIMIT_BREED_SLIDER_IMG,
  });

  const activeImgHandler = (index: number) => {
    setActiveImg(index);
  };

  return (
    <div className={s.breedImages}>
      {!isLoading || <Loader />}
      <img className={s.image} src={data ? data[activeImg].url : ''} alt={name} />

      <div className={s.dots}>
        {data?.map((img, i) => {
          return (
            <button
              type="button"
              aria-label=" "
              onClick={() => activeImgHandler(i)}
              key={img.id}
              className={i === activeImg ? s.dotActive : s.dot}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BreedImages;

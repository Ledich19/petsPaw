import { useParams } from 'react-router-dom';
import BackBtn from '../../components/BackBtn/BackBtn';
import Loader from '../../components/Loader/Loader';
import Title from '../../components/Title/Title';
import { useGetBreedByIdQuery } from '../../services/breedsAPI';
import s from './BreedInfo.module.scss';
import BreedImages from './BreedImages/BreedImages';

const BreedInfo = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetBreedByIdQuery(id || '');

  if (!data) {
    return null;
  }

  const keyword = 'cats for ';
  const startIndex = (data?.description || '').indexOf(keyword);
  const extractedText =
    startIndex >= 0 ? data?.description.slice(startIndex + keyword.length) : data?.description;

  return (
    <div className={s.breedInfo}>
      <div className={s.header}>
        <BackBtn />
        <Title text="BreedInfo" />
      </div>

      <div className={s.wrap}>
        <div className={s.breedContent}>
          {isLoading && <Loader />}

          <BreedImages name={data?.name || ''} breedId={id || ''} />

          <div className={s.infoBox}>
            <div className={s.title}>{data?.name}</div>
            <div className={s.description}>{extractedText}</div>

            <div className={s.aboutBreed}>
              <div className={s.column}>
                <div className={s.aboutItem}>
                  Temperament: <span className={s.aboutText}>{data?.temperament}</span>
                </div>
              </div>
              <div className={s.column}>
                <div className={s.aboutItem}>
                  Origin: <span className={s.aboutText}>{data?.origin}</span>
                </div>
                <div className={s.aboutItem}>
                  Weight: <span className={s.aboutText}>{data?.weight.metric} kg</span>
                </div>
                <div className={s.aboutItem}>
                  Life span: <span className={s.aboutText}>{data?.life_span}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedInfo;

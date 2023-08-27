import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import BackBtn from '../../components/BackBtn/BackBtn';
import Loader from '../../components/Loader/Loader';
import Select from '../../components/Select/Select';
import Title from '../../components/Title/Title';
import { useGetBreedsQuery } from '../../services/breedsAPI';
import s from './Breeds.module.scss';
import BreedsItem from './BreedsItem/BreedsItem';
import { setLimitBreeds, setNameBreeds, setSortDirectionBreeds } from '../../redux/breedsReducer';
import GreedPattern from '../../components/GreedPattern/GreedPattern';

const Breeds = () => {
  const dispatch = useAppDispatch();
  const { search, breedId, limit, sortDirectionFromAZ } = useAppSelector((store) => store.breeds);
  const { data, error, isLoading } = useGetBreedsQuery(search);

  const names = data
    ? [
        { text: 'All Breeds', value: '' },
        ...data.map((breed) => ({ text: breed.name, value: breed.id })),
      ]
    : [];

  const step = 5;
  const limits = [];
  const limitCount = data?.length || 0;
  for (let limitItem = step; limitItem <= limitCount; limitItem += step) {
    limits.push({ text: `Limit:${limitItem}`, value: `Limit: ${limitItem}` });
  }

  const isData = data || [];
  const filteredData =
    breedId && breedId !== 'All Breeds' ? isData.filter((breed) => breed.id === breedId) : isData;
  const dataVisible = filteredData.slice(0, parseInt(limit, 10));

  if (sortDirectionFromAZ) {
    dataVisible.sort();
  } else {
    dataVisible.sort().reverse();
  }

  const nameHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setNameBreeds(e.target.value));
  };
  const limitHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimitBreeds(e.target.value));
  };
  const sortAZHandler = () => {
    dispatch(setSortDirectionBreeds(true));
  };
  const sortZAHandler = () => {
    dispatch(setSortDirectionBreeds(false));
  };
  return (
    <div className={s.breeds}>
      <div className={s.header}>
        <BackBtn />
        <Title text="Breeds" />
        <Select handler={nameHandler} options={names} />
        <Select handler={limitHandler} options={limits} />
        <button onClick={sortAZHandler} type="button" className={s.button}>
          <span className="icon-sort-color-20" />
        </button>
        <button onClick={sortZAHandler} type="button" className={s.button}>
          <span className="icon-sort-revert-color-20" />
        </button>
      </div>

      <GreedPattern>
        {isLoading && <Loader />}
        {dataVisible?.map((breed) => {
          return (
            <BreedsItem
              key={breed.id}
              imgId={breed.reference_image_id}
              name={breed.name}
              id={breed.id}
            />
          );
        }) || ''}
      </GreedPattern>
    </div>
  );
};

export default Breeds;

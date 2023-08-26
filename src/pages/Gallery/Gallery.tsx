import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import BackBtn from '../../components/BackBtn/BackBtn';
import Loader from '../../components/Loader/Loader';
import Select from '../../components/Select/Select';
import Title from '../../components/Title/Title';
import { useGetBreedsQuery } from '../../services/breedsAPI';
import s from './Gallery.module.scss';
import { setLimitBreeds, setNameBreeds, setSortDirectionBreeds } from '../../redux/breedsReducer';
import GalleryItem from './GalleryItem/GalleryItem';

const Breeds = () => {
  // const dispatch = useAppDispatch();
  // const { search, name, limit, sortDirectionFromAZ } = useAppSelector((store) => store.breeds);
  // const { data, error, isLoading } = useGetBreedsQuery(search);
  // // console.log(data);

  // const names = data ? ['All Breeds', ...data.map((breed) => breed.name)] : [];

  // const step = 5;
  // const limits = [];
  // const limitCount = data?.length || 0;
  // for (let limitItem = step; limitItem <= limitCount; limitItem += step) {
  //   limits.push(limitItem);
  // }

  // const isData = data || [];
  // const filteredData =
  //   name && name !== 'All Breeds' ? isData.filter((breed) => breed.name === name) : isData;
  // const dataVisible = filteredData.slice(0, parseInt(limit, 10));

  // if (sortDirectionFromAZ) {
  //   dataVisible.sort();
  // } else {
  //   dataVisible.sort().reverse();
  // }

  // const nameHandler = (e: ChangeEvent<HTMLSelectElement>) => {
  //   dispatch(setNameBreeds(e.target.value));
  // };
  // const limitHandler = (e: ChangeEvent<HTMLSelectElement>) => {
  //   dispatch(setLimitBreeds(e.target.value));
  // };
  // const sortAZHandler = () => {
  //   dispatch(setSortDirectionBreeds(true));
  // };
  // const sortZAHandler = () => {
  //   dispatch(setSortDirectionBreeds(false));
  // };
  return (
    <div className={s.breeds}>
      {' '}
      hghjgjhjbjkbkj
      {/* <div className={s.header}>
        <BackBtn />
        <Title text="Breeds" />
        <Select handler={nameHandler} prefix="" options={names} />
        <Select handler={limitHandler} prefix="Limit:" options={limits} />
        <button onClick={sortAZHandler} type="button" className={s.button}>
          <span className="icon-sort-color-20" />
        </button>
        <button onClick={sortZAHandler} type="button" className={s.button}>
          <span className="icon-sort-revert-color-20" />
        </button>
      </div>
      {isLoading && <Loader />}

      <div className={s.gridContainer}>
        {isLoading && <Loader />}
        <div className={s.gridParent}>
          {dataVisible?.map((breed) => {
            return (
              <GalleryItem
                key={breed.id}
                imgId={breed.reference_image_id}
                name={breed.name}
                id={breed.id}
              />
            );
          }) || ''}
        </div>
      </div> */}
    </div>
  );
};

export default Breeds;

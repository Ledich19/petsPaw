import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import BackBtn from '../../components/BackBtn/BackBtn';
import Loader from '../../components/Loader/Loader';
import Select from '../../components/Select/Select';
import Title from '../../components/Title/Title';
import { useGetBreedsQuery } from '../../services/breedsAPI';
import s from './Gallery.module.scss';
import GalleryItem from './GalleryItem/GalleryItem';
import GreedPattern from '../../components/GreedPattern/GreedPattern';
import { useGetImagesQuery } from '../../services/imagesAPI';
import Button from '../../components/Button/Button';
import { setBreed, setLimit, setOrder, setType } from '../../redux/galleryReducer';
import { setStateModal } from '../../redux/stateReducer';

const Breeds = () => {
  const dispatch = useAppDispatch();
  const breeds = useGetBreedsQuery('');
  const { order, type, breed, limit } = useAppSelector((store) => store.gallery);
  const { data, isFetching, refetch } = useGetImagesQuery({
    breed_ids: breed,
    limit,
    order,
    mime_types: type,
  });

  const orderData = [
    { text: 'Random', value: 'RANDOM' },
    { text: 'Asc', value: 'ASC' },
    { text: 'Desc', value: 'DESC' },
  ];
  const typeData = [
    { text: 'All', value: 'gif,jpg,png' },
    { text: 'Static', value: 'jpg,png' },
    { text: 'Animated', value: 'gif' },
  ];
  const breedsData = breeds.data
    ? [
        { text: 'None', value: '' },
        ...breeds.data.map((breedItem) => ({ text: breedItem.name, value: breedItem.id })),
      ]
    : [];
  const limitData = Array(5)
    .fill('')
    .map((_, i) => ({ text: `${(i + 1) * 5} items per page`, value: `${(i + 1) * 5}` }));

  const orderHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'RANDOM' || e.target.value === 'ASC' || e.target.value === 'DESC') {
      dispatch(setOrder(e.target.value));
    }
  };
  const typeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(e.target.value));
  };
  const bredHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBreed(e.target.value));
  };
  const limitHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLimit(e.target.value));
  };
  const updateHandler = () => {
    refetch();
  };
  const handleOpenModal = () => {
    dispatch(setStateModal(true));
  };
  return (
    <div className={s.gallery}>
      <div className={s.header}>
        <div className={s.headerWrapper}>
          <BackBtn />
          <Title text="Gallery" />
        </div>
        <button type="button" onClick={handleOpenModal} className={s.upload}>
          <span className="icon-upload" /> Upload
        </button>
      </div>
      <div className={s.options}>
        <div className={s.optionsItem}>
          <div className={s.label}>order</div>
          <Select type={2} handler={orderHandler} options={orderData} />
        </div>

        <div className={s.optionsItem}>
          <div className={s.label}>type</div>
          <Select type={2} handler={typeHandler} options={typeData} />
        </div>

        <div className={s.optionsItem}>
          <div className={s.label}>breed</div>
          <Select type={2} handler={bredHandler} options={breedsData} />
        </div>

        <div className={s.witBtn}>
          <div className={s.optionsItem}>
            <div className={s.label}>limit</div>
            <Select type={2} handler={limitHandler} options={limitData} />
          </div>
          <Button handler={updateHandler} size="small" type="update" />
        </div>
      </div>

      <GreedPattern>
        {isFetching && <Loader />}
        {data?.map((image) => {
          return <GalleryItem key={image.id} url={image.url} />;
        }) || ''}
      </GreedPattern>
    </div>
  );
};

export default Breeds;

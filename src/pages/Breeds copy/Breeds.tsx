import BackBtn from '../../components/BackBtn/BackBtn';
import Loader from '../../components/Loader/Loader';
import Select from '../../components/Select/Select';
import Title from '../../components/Title/Title';
import { useGetBreedsQuery } from '../../services/breedsAPI';
import s from './Breeds.module.scss';

const Breeds = () => {
  const { data, error, isLoading } = useGetBreedsQuery('bulbasaur');
  console.log(data);

  const names = data ? data.map((breed) => breed.name) : [];

  return (
    <div className={s.breeds}>
      {/* <div className={s.breeds}></div> */}
      <div className={s.header}>
        <BackBtn />
        <Title text="Breeds" />
        <Select prefix="" options={names} />
        <Select prefix="Limit:" options={['5', '10', '15', '20']} />
        <button type="button" className={s.button}>
          <span className="icon-sort-color-20" />
        </button>
        <button type="button" className={s.button}>
          <span className="icon-sort-revert-color-20" />
        </button>
      </div>
      {isLoading && <Loader />}

      <div className={s.gridContainer}>
        <div className={s.gridParent}>
          {data
            ? data.map((breed, i) => {
                console.log(i % 10);
                return (
                  <div key={breed.id} className={s.breedItem}>
                    &nbsp;
                  </div>
                );
              })
            : ''}
        </div>
      </div>

      {/* <SearchPanel />
      <VotingBody /> */}
    </div>
  );
};

export default Breeds;

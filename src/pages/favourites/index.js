import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import updateOnLoad from '../../components/onload/onLoad';
import Card from '../../components/card';
import styles from '../index.module.css';
import ClicableElement from '../../components/Clicable';

const Favourites = () => {
  const { favourites, trendingList } = useSelector((state) => state.main);

  const [viewdList, updateList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    updateOnLoad(trendingList, 'trending', 'fetchTrending', 'getTrending');
    updateOnLoad(favourites, 'favourites', '', 'getFavourites');
  }, []);

  const FilterFavourites = trendingList.filter((item) => favourites.find((fav) => fav === item.id));

  useEffect(() => {
    updateList(FilterFavourites);
  }, [favourites]);

  return (
    <section className={styles.mainContainer}>
      <ClicableElement
        child={(
          <div className={styles.goBack}>
            <IoIosArrowBack />
            <span>Go Back</span>
          </div>
        )}
        click={() => navigate(-1)}
      />
      {' '}
      <h1>Favourites</h1>
      <div>
        {!!viewdList
          && !!viewdList.length
          && viewdList?.map((item) => (
            <Card key={item.CoinId} coinObject={item} />
          ))}
      </div>
    </section>
  );
};

export default Favourites;

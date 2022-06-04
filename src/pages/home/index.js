import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import updateOnLoad from '../../components/onload/onLoad';
import Card from '../../components/card';
import styles from '../index.module.css';

const Home = () => {
  const { favourites, trendingList } = useSelector(
    (state) => state.main,
  );

  const onLoadList = () => {
    updateOnLoad(trendingList, 'trending', 'fetchTrending', 'getTrending');
    updateOnLoad(favourites, 'favourites', '', 'getFavourites');
  };

  useEffect(() => {
    onLoadList();
  }, []);

  return (
    <section className={styles.mainContainer}>
      <h1>Rising Coins</h1>
      <div>
        {trendingList.map((item) => (
          <Card
            key={item.CoinId}
            coinObject={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

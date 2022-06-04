import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import updateOnLoad from '../../components/onload/onLoad';
import Card from '../../components/card';
import styles from '../index.module.css';

const Home = () => {
  const { favourites, trendingList } = useSelector(
    (state) => state.main,
  );

  useEffect(() => {
    updateOnLoad(trendingList, 'trending', 'fetchTrending', 'getTrending');
    updateOnLoad(favourites, 'favourites', '', 'getFavourites');
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

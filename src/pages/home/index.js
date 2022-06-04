import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { IoIosArrowBack } from 'react-icons/io';
import updateOnLoad from '../../components/onload/onLoad';
import Card from '../../components/card';

// {favourites,singleCoin,trendingList}
const Home = () => {
  const { favourites, trendingList } = useSelector(
    (state) => state.main,
  );
  // const navigate = useNavigate();

  useEffect(() => {
    updateOnLoad(trendingList, 'trending', 'fetchTrending', 'getTrending');
    updateOnLoad(favourites, 'favourites', '', 'getFavourites');
  }, []);

  return (
    <section>
      {/* <IoIosArrowBack onClick={() => navigate(-1)} /> */}
      <h1>Trending List</h1>
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

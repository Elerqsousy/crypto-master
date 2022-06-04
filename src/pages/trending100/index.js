import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import api from '../../redux/api';
import updateOnLoad100 from '../../components/onload/onLoad';
import Trending100Card from '../../components/trending100Card';

// {favourites,singleCoin,trendingList}
const Trending100 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { favourites } = useSelector(
    (state) => state.main,
  );

  const { list } = useSelector((state) => state.trending100);

  useEffect(() => {
    updateOnLoad100(favourites, 'favourites', '', 'getFavourites');
  }, []);

  useEffect(() => {
    dispatch(api.fetchTrending100(favourites));
  }, [favourites.length]);

  return (
    <section>
      <div>
        <IoIosArrowBack onClick={() => navigate(-1)} />
        <h1>Favourites List</h1>
      </div>
      <div>
        {list.map((item) => (
          <Trending100Card
            key={item.CoinId}
            coinObject={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending100;

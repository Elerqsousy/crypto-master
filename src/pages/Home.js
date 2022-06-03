import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import updateOnLoad from '../components/onLoad';
// import api from '../redux/api';
// import local from '../redux/local';

const Home = () => {
  const test = 'Hello from Home pgae';
  const main = useSelector((state) => state.main);

  useEffect(() => {
    updateOnLoad(main.trendingList, 'trending', 'fetchTrending', 'getTrending');
    console.log(main);
  }, []);

  return <h1>{test}</h1>;
};

export default Home;

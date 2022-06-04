import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { v4 as uuid } from 'uuid';
import api from '../../redux/api';
import Trending100Card from '../../components/trending100Card';
import styles from '../index.module.css';
import ClicableElement from '../../components/Clicable';

const Trending100 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.trending100);

  useEffect(() => {
    dispatch(api.fetchTrending100([]));
  }, []);

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
      <h1>Trending 100 Coins</h1>
      <div>
        {list.map((item, id = uuid()) => (
          <Trending100Card
            key={id}
            coinObject={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending100;

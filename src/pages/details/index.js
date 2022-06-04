import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useEffect } from 'react';
import { deleteFavourite, setFavourite } from '../../redux/mainSlice';
import styles from '../index.module.css';
import ClicableElement from '../../components/Clicable';

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { singleCoin, favourites } = useSelector((state) => state.main);

  const {
    description,
    id,
    name,
    img,
    links,
    ChnagePercentage,
    currentPrice,
  } = singleCoin;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const viewedData = singleCoin ? (
    <article className={`${styles.mainContainer} ${styles.customArticle}`}>
      <div className={styles.detailsHeader}>
        <img src={img?.large} alt={`${name} logo`} />
        <div className={styles.headerDetialsContainer}>
          <div className={styles.likeContainer}>
            <ClicableElement child={<h1 className={styles.header}>{name}</h1>} click={() => window.open(links?.homepage[0], '_blank').focus()} />
            {favourites.filter((item) => item === id).length ? (
              <MdFavorite
                onClick={() => dispatch(deleteFavourite(id))}
                className={styles.favouritIcon}
              />
            ) : (
              <MdFavoriteBorder onClick={() => dispatch(setFavourite(id))} />
            )}
          </div>
          <div className={styles.percentContainer}>
            <span>
              $
              {currentPrice}
            </span>
            <span>
              Last 24hrs
              {' '}
              {Number(ChnagePercentage).toFixed(2)}
              {' '}
              %
            </span>
          </div>
        </div>
      </div>
      <div className={styles.detailsDetails}>{description?.en}</div>
    </article>
  ) : (
    ''
  );

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
      {viewedData}
    </section>
  );
};

export default Details;

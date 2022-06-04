import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../redux/api';
import styles from '../card/card.module.css';

const Trending100Card = ({
  coinObject,
}) => {
  const {
    id, name, img, price, ChangePercent, rank, lastUpdated,
  } = coinObject;

  const dispatch = useDispatch();

  return (
    <article>
      <div className={styles.imgContainer}>
        <img src={img} alt={`${name} logo`} />
      </div>
      <div>
        <div className={`${styles.cardMainInfo} ${styles.favCard}`}>
          <Link to={`/${id}`} onClick={() => { dispatch(api.fetchSingleCoin(id)); }}>
            <h3 className={styles.cardHeader}>{name}</h3>
          </Link>
          <div className={styles.generalInfo}>
            <span>
              #
              {' '}
              {rank}
            </span>
            <span>{ChangePercent}</span>
          </div>
        </div>
        <span>
          $
          {price}
        </span>
        <div>
          <span>
            {lastUpdated}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Trending100Card;

Trending100Card.propTypes = {
  coinObject: PropTypes.shape({
    root: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ChangePercent: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
    lastUpdated: PropTypes.string.isRequired,
  }).isRequired,
};

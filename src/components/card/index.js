import {
  MdFavorite,
  MdFavoriteBorder,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavourite, setFavourite } from '../../redux/mainSlice';
import api from '../../redux/api';
import styles from './card.module.css';

const Card = ({
  coinObject,
}) => {
  const {
    id, name, img, price,
  } = coinObject;

  const { favourites } = useSelector(
    (state) => state.main,
  );

  const dispatch = useDispatch();

  const isFavourite = favourites.filter((item) => item === id).length
    ? <MdFavorite onClick={() => dispatch(deleteFavourite(id))} />
    : <MdFavoriteBorder onClick={() => dispatch(setFavourite(id))} />;

  return (
    <article>
      <div className={styles.imgContainer}>
        <img src={img} alt={`${name} logo`} />
      </div>
      <div>
        <div className={styles.cardMainInfo}>
          {isFavourite}
          <Link to={`/${id}`} onClick={() => { dispatch(api.fetchSingleCoin(id)); }}>
            <h3 className={styles.cardHeader}>{name}</h3>
          </Link>
        </div>
        <span>
          $
          {price}
        </span>
      </div>
    </article>
  );
};

export default Card;

Card.propTypes = {
  coinObject: PropTypes.shape({
    root: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

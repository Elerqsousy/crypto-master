import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../../redux/api';

const Trending100Card = ({
  coinObject,
}) => {
  const {
    id, name, img, price, ChangePercent, rank, lastUpdated,
  } = coinObject;

  const dispatch = useDispatch();

  return (
    <article>
      <div>
        <img src={img} alt={`${name} logo`} />
      </div>
      <div>
        <div>
          <div>
            <Link to={`/${id}`} onClick={() => { dispatch(api.fetchSingleCoin(id)); }}>
              <h3>{name}</h3>
            </Link>
          </div>
          <div>
            <span>{rank}</span>
            <span>{ChangePercent}</span>
          </div>
        </div>
        <span>
          $
          {price}
        </span>
      </div>
      <span>
        {lastUpdated}
      </span>
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
    ChangePercent: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
  }).isRequired,
};

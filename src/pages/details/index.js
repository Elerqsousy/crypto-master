import {
  MdFavorite,
  MdFavoriteBorder,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { deleteFavourite, setFavourite } from '../../redux/mainSlice';

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
    lastUpdaed,
    ChnagePercentage,
    currentPrice,
    priceArray,
  } = singleCoin;

  const isFavourite = favourites.filter((item) => item === id).length ? (
    <MdFavorite onClick={() => dispatch(deleteFavourite(id))} />
  ) : (
    <MdFavoriteBorder onClick={() => dispatch(setFavourite(id))} />
  );

  return (
    <section>
      <IoIosArrowBack onClick={() => navigate(-1)} />
      {console.log(name, priceArray)}
      <article>
        <div>
          <img src={img?.large} alt={`${name} logo`} />
          <div>
            <div>
              <Link to={links?.homepage} onClick={() => window.open(links?.homepage, '_blank').focus()}>
                <h1>{name}</h1>
              </Link>
              {isFavourite}
            </div>
            <div>
              <span>
                $
                {currentPrice}
              </span>
              <span>
                {Number(ChnagePercentage).toFixed(2)}
                %
              </span>
            </div>
          </div>
        </div>
        <p>{description?.en}</p>
        <div>
          <span>{lastUpdaed}</span>
        </div>
      </article>
    </section>
  );
};

export default Details;

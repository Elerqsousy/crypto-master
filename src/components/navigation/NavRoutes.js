import { AiFillHome as Home } from 'react-icons/ai';
import { MdFavorite as Favorites } from 'react-icons/md';
import top from '../../assets/100.svg';

const routLinks = [
  {
    path: '/',
    text: 'Home',
    img: <Home />,
  },
  {
    path: '/favourites',
    text: 'Favourites',
    img: <Favorites />,
  },
  {
    path: '/trending100',
    text: 'Top 100',
    img: <img src={top} alt="top 100" />,
  },
];

export default routLinks;

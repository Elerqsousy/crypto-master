import { BiUserCircle as Profile } from 'react-icons/bi';
import { AiFillHome as Home } from 'react-icons/ai';
import { MdFavorite as Favorites } from 'react-icons/md';
import top from '../../assets/100.svg';
// import { HiMenu } from "react-icons/hi";
// import { MdFavoriteBorder } from "react-icons/md";
// import { AiOutlineFall} from "react-icons/ai";
// import { AiOutlineRise} from "react-icons/ai";
// import { IoIosArrowBack } from "react-icons/io";

const routLinks = [
  {
    path: '/',
    text: 'Home',
    img: Home,
  },
  {
    path: '/profile',
    text: 'Profile',
    img: Profile,
  },
  {
    path: '/trending100',
    text: 'Top 100',
    img: <img src={top} alt="top 100" />,
  },
  {
    path: '/favourites',
    text: 'Favourites',
    img: Favorites,
  },
];

export default routLinks;

import { BiUserCircle as Profile } from 'react-icons/bi';
import { AiFillHome as Home } from 'react-icons/ai';
import { MdFavorite as Favorites } from 'react-icons/md';
// import { HiMenu } from "react-icons/hi";
// import { MdFavoriteBorder } from "react-icons/md";

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
    path: '/favorites',
    text: 'Favorites',
    img: Favorites,
  },
];

export default routLinks;

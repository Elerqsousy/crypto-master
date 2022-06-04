import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import logo from '../../assets/colored-logo.png';
import routLinks from './NavRoutes';
import SearchBar from './SearchBar';
import styles from './navigation.module.css';

export default function Nav() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <nav className={styles.rightNav}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <SearchBar />
          </li>
          {routLinks.map((rout) => (
            <li key={uuid()} className={styles.navLink}>
              <NavLink to={rout.path}>
                {window.innerWidth < 768 ? rout.img : rout.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import logo from '../../assets/colored-logo.png';
import routLinks from './NavRoutes';
import SearchBar from './SearchBar';

export default function Nav() {
  return (
    <header className="header" style={{ display: 'flex' }}>
      <div className="left-nav">
        <img src={logo} alt="logo" />
      </div>
      <nav className="right-nav">
        <ul className="nav-links">
          <li className="nav-link">
            <SearchBar />
          </li>
          {routLinks.map((rout) => (
            <li key={uuid()} className="nav-link">
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
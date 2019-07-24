import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = () => (
  <header className={[style.header]}>
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={style.activeLink}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={style.activeLink}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/pets" activeClassName={style.activeLink}>
            PETS
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

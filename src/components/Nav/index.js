import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/season-select'>Season Selector</NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard'>Leaderboard</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/wrong'>404</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/">Books</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/categories">Categories</NavLink>
    </nav>
    <button className="icon-button" type="button"><span className="material-icons primary-color">person</span></button>
  </header>
);

export default Header;



import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" style={{ marginRight: '10px' }} activeClassName="active">Home</NavLink>
      <NavLink to="/browse" style={{ marginRight: '10px' }} activeClassName="active">Browse Characters</NavLink>
      <NavLink to="/comics" style={{ marginRight: '10px' }} activeClassName="active">Comics</NavLink>
    </nav>
  );
};

export default Navbar;

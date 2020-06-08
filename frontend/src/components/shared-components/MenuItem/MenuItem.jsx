import React from 'react';
import classes from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <NavLink
      to={props.path}
      className={classes.MenuItem}
      activeClassName={classes.ActiveMenu}
    >
      {props.children}
    </NavLink>
  );
};

export default MenuItem;

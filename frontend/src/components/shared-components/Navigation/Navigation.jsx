import React from 'react';
import classes from './Navigation.module.css';
import MenuItem from '../MenuItem/MenuItem';

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <MenuItem path="/projects">Projects</MenuItem>
      <MenuItem path="/about">About</MenuItem>
      <MenuItem path="/work-experience">Work Experience</MenuItem>
    </div>
  );
};

export default Navigation;

import React from 'react';
import classes from './Link.module.css';

const Link = (props) => (
  <a className={classes.Link} {...props}>
    {props.children}
  </a>
);
export default Link;

import React from 'react';
import classes from './Heading.module.css';

const Heading = (props) => (
  <h1 className={classes.Heading}>{props.children}</h1>
);
export default Heading;

import React from 'react';
import classes from './SkillTag.module.css';

const SkillTag = (props) => (
  <span className={classes.SkillTag}>{props.children}</span>
);

export default SkillTag;

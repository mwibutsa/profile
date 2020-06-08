import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) =>
  props.open ? (
    <div className={classes.Modal} onClick={props.onClick}>
      <div className={classes.ModalContainer}>{props.children}</div>
    </div>
  ) : null;
export default Modal;

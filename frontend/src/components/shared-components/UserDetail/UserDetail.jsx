import React from 'react';
import classes from './UserDetail.module.css';

const UserDetail = (props) => {
  return (
    <div className={classes.UserDetail}>
      <div className={classes.ImageAvatar}>
        <img
          src={
            props.image ||
            'https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png'
          }
          alt=""
        />
    
      </div>

      <span className={classes.UserTitle}>{props.title || 'Software developer'}</span>
      <div className={classes.DetailSection}>

      </div>
    </div>
  );
};

export default UserDetail;

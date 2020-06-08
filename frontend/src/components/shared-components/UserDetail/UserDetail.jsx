import React from 'react';
import classes from './UserDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationArrow,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Heading from '../Heading/Heading';

const UserDetail = (props) => {
  const { email, firstName, lastName, location, profileImage } = props.user;
  return (
    <div className={classes.UserDetail}>
      <div className={classes.ImageAvatar}>
        <img
          src={
            profileImage ||
            'https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png'
          }
          alt=""
        />
      </div>

      <div className={classes.DetailSection}>
        <Heading>{props.title || 'Software developer'}</Heading>
        <div className={classes.DetailInfo}>
          <FontAwesomeIcon icon={faUser} />
          <span>{firstName + ' ' + lastName}</span>
        </div>

        <div className={classes.DetailInfo}>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href={`mailto:${email}`} target="blank">
            <span>{email}</span>
          </a>
        </div>

        <div className={classes.DetailInfo}>
          <FontAwesomeIcon icon={faLocationArrow} />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

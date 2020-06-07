import React from 'react';
import UserDetail from '../../shared-components/UserDetail/UserDetail';
import Navigation from '../../shared-components/Navigation/Navigation';
import classes from './PageLayout.module.css';

const PageLayout = (props) => {
  return (
    <div className={classes.PageLayoutContainer}>
      <div className={classes.PageLayout}>
        <div className={classes.LeftSide}>
          <UserDetail />
        </div>
        <div className={classes.RightSide}>
          <Navigation />
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageLayout;

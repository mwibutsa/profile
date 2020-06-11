import React, { useEffect } from "react";
import UserDetail from "../../shared-components/UserDetail/UserDetail";
import Navigation from "../../shared-components/Navigation/Navigation";
import classes from "./PageLayout.module.css";
import { getUserProfile } from "../../../redux/actions/user-action";
import { connect } from "react-redux";
import PageSpinner from "../../shared-components/PageSpinner/PageSpinner";
import AboutPage from "../AboutPage/AboutPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import { Switch, Route } from "react-router-dom";
import WorkExperiencePage from "../WorkExperience/WorkExperience";

const PageLayout = (props) => {
  const { getProfile } = props;

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  let userDetail = <PageSpinner />;
  let user = {};

  if (!props.loading) {
    userDetail = <UserDetail user={props.user} />;
    user = props.user;
  }

  return (
    <div className={classes.PageLayoutContainer}>
      <div className={classes.PageLayout}>
        <div className={classes.LeftSide}>{userDetail}</div>
        <div className={classes.RightSide}>
          <Navigation />
          <div>
            <Switch>
              <Route path="/projects" component={ProjectsPage} />
              {props.user && (
                <React.Fragment>
                  <Route
                    path="/about"
                    render={(props) => <AboutPage {...props} user={user} />}
                  />
                  <Route
                    path="/"
                    render={(props) => <AboutPage {...props} user={user} />}
                    exact
                  />
                  <Route
                    path="/work-experience"
                    component={WorkExperiencePage}
                  />
                </React.Fragment>
              )}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.profile.user,
  loading: state.profile.loading,
  error: state.profile.error,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getUserProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);

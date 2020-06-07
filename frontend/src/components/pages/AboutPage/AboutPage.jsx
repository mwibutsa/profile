import React, { useState, useEffect } from 'react';
import classes from './AboutPage.module.css';
import PageLayout from '../PageLayout/PageLayout';
import Heading from '../../shared-components/Heading/Heading';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../redux/actions/user-action';
const AboutPage = (props) => {
  const { getProfile } = props;
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <PageLayout>
      <div className={classes.AboutPage}>
        <Heading>Professional summary</Heading>
        <div className={classes.Text}>
          <p>
            Hello, I’m a full-stack software engineer, I have experience in
            building web and mobile applications using Python Django, Nodejs,
            React, React-native, and UI/UX design. In addition to my experience,
            I have practical knowledge about DevOps, most specifically
            deployment, containerization with Docker, unit test, integration
            test, and using popular tools to connect development teams. In fact,
            I can be part of any technical department including but not limited
            to Backend, Frontend, UI/UX Design, and DevOps. I am a natural good
            team player with both remote and onsite experience.
          </p>
        </div>
        <Heading>Skills</Heading>
      </div>
    </PageLayout>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.user,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getUserProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);

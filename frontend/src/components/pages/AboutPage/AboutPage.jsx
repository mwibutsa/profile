import React from "react";
import classes from "./AboutPage.module.css";
import Heading from "../../shared-components/Heading/Heading";
import PageSpinner from "../../shared-components/PageSpinner/PageSpinner";
import Skills from "../../Skills/Skills";

const AboutPage = (props) => {
  let pageContent = <PageSpinner />;
  if (!props.loading) {
    pageContent = <p>{props.user.professionalSummary}</p>;
  }
  return (
    <div className={classes.AboutPage}>
      <Heading>Professional summary</Heading>
      <div className={classes.Text}>{pageContent}</div>
      <Heading>Skills</Heading>
      <Skills />
    </div>
  );
};

export default AboutPage;

import React, { useEffect } from "react";
import classes from "./WorkExperience.module.css";
import Timeline from "../../Timeline/Timeline";
import { connect } from "react-redux";
import { getWorkExperience } from "../../../redux/actions/work-experience";
import PageSpinner from "../../shared-components/PageSpinner/PageSpinner";

const WorkExperience = (props) => {
  const { getExperience } = props;

  useEffect(() => {
    getExperience();
  }, [getExperience]);

  let content = <PageSpinner />;
  if (!props.loading) {
    content = <Timeline data={props.experience} />;
  }
  return (
    <div className={classes.WorkExperience}>
      Work WorkExperience
      {content}
    </div>
  );
};

const mapStateToProps = (state) => ({
  experience: state.workExperience.experience,
  loading: state.workExperience.loading,
  error: state.workExperience.error,
});

const mapDispatchToProps = (dispatch) => ({
  getExperience: () => dispatch(getWorkExperience()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);

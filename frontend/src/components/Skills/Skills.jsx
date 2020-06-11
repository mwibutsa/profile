import React, { useEffect } from "react";
import SkillTag from "../shared-components/SkillTag/SkillTag";
import { connect } from "react-redux";
import { getUserSkills } from "../../redux/actions/skills-action";
import PageSpinner from "../shared-components/PageSpinner/PageSpinner";
import classes from "./Skills.module.css";

const Skills = (props) => {
  const { getSkills } = props;

  useEffect(() => {
    getSkills();
  }, [getSkills]);

  let content = <PageSpinner />;
  if (!props.loading) {
    content = props.skills.map((skill) => (
      <SkillTag key={skill.id}>{skill.skillName}</SkillTag>
    ));
  }

  return <div className={classes.Skills}>{content}</div>;
};

const mapStateToProps = (state) => ({
  loading: state.userSkills.loading,
  skills: state.userSkills.skills,
  error: state.userSkills.error,
});

const mapDispatchToProps = (dispatch) => ({
  getSkills: () => dispatch(getUserSkills()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skills);

import React, { useEffect, useState } from 'react';
import classes from './ProjectsPage.module.css';
import { connect } from 'react-redux';
import { getUserProjects } from '../../../redux/actions/projects-action';
import PageSpinner from '../../shared-components/PageSpinner/PageSpinner';
import ProjectCard from '../../ProjectCard/ProjectCard';
import ProjectVideo from '../../ProjectVideo/ProjectVideo';
import Modal from '../../shared-components/Modal/Modal';

const ProjectsPage = (props) => {
  const { getProjects } = props;

  const [showVideo, setShowVideo] = useState(false);
  const [activeProject, setActiveProject] = useState({});

  const showVideoHandler = (project) => {
    setActiveProject(project);
    setShowVideo(true);
  };

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  let content = <PageSpinner />;
  if (!props.loading) {
    content = props.projects.map((project) => (
      <ProjectCard
        {...project}
        key={project.id}
        onClick={() => showVideoHandler(project)}
      />
    ));
  }

  return (
    <React.Fragment>
      <div className={classes.ProjectsPage}>{content}</div>{' '}
      <Modal open={showVideo} onClick={() => setShowVideo(false)}>
        <ProjectVideo project={activeProject} />
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  projects: state.userProjects.projects,
  loading: state.userProjects.loading,
  error: state.userProjects.error,
});

const mapDispatchToProps = (dispatch) => ({
  getProjects: () => dispatch(getUserProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);

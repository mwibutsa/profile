import React from 'react';
import classes from './ProjectVideo.module.css';

const ProjectVideo = (props) => {
  console.log(props);
  return (
    <div className={classes.ProjectVideo}>
      <iframe
        src={`${props.project.projectVideoUrl}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullscreen
        title={props.project.projectVideoUrl}
      ></iframe>
    </div>
  );
};

export default ProjectVideo;

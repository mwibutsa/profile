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
      ></iframe>
    </div>
  );
};

export default ProjectVideo;

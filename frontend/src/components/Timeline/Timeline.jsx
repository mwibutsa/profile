import React from "react";
import classes from "./Timeline.module.css";
import TimelineItem from "./TimelineItem/TimelineItem";

const Timeline = (props) => (
  <div className={classes.Timeline}>
    {props.data &&
      props.data.map((experience) => (
        <TimelineItem {...experience} key={experience.id} />
      ))}
  </div>
);

export default Timeline;

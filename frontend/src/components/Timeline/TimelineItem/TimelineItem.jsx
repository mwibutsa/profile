import React from "react";
import classes from "./TimelineItem.module.css";
import moment from "moment";

const TimelineItem = (props) => {
  const endDate = props.endDate
    ? moment(props.endDate).format("MMMM, YYYY")
    : "I currently work here.";
  return (
    <div className={classes.TimelineItem}>
      <div className={classes.TimelineItemContent}>
        <div className={classes.TitleContainer}>
          <div className={classes.Title}>
            {props.employer || "Company name"}
          </div>
          <div className={classes.JobTitle}>{props.jobTitle}</div>
        </div>

        <p className={classes.Description}>{props.jobDescription}</p>
        <span className={classes.Circle}></span>
        <div className={classes.TimePeriod}>
          <span>{moment(props.startDate).format("MMMM, YYYY")}</span> -{" "}
          <span>{endDate}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

import React from 'react';
import classes from './ProjectCard.module.css';
import Heading from '../shared-components/Heading/Heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faCalendar } from '@fortawesome/free-solid-svg-icons';
import SkillTag from '../shared-components/SkillTag/SkillTag';
import moment from 'moment';
import Link from '../shared-components/Link/Link';
const ProjectCard = (props) => {
  const periodMessage = props.endDate
    ? moment(props.startDate).fromNow()
    : `${moment(props.Date).format('MMMM, YYYY')} - In progress`;
  return (
    <div className={classes.ProjectCard}>
      <Heading>
        <Link href={props.projectUrl} target="blank">
          {props.projectName}
        </Link>
      </Heading>
      <div onClick={() => props.onClick()}>
        <div className={classes.AttributeContainer}>
          <FontAwesomeIcon icon={faUserAstronaut} />
          <span className={classes.OwnerName}>{props.projectOwner}</span>
        </div>
        <div className={classes.AttributeContainer}>
          <FontAwesomeIcon icon={faCalendar} />
          <span className={classes.Date}>{periodMessage}</span>
        </div>

        <div className={classes.SkillTags}>
          {props.projectStacks.map((stack) => (
            <SkillTag key={stack.id}>{stack.stackName}</SkillTag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

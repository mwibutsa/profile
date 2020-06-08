import axios from '../../axios';

import {
  GET_PROJECTS,
  GET_PROJECTS_FAILED,
  GET_PROJECTS_BEGIN,
} from '../action-types/projects';

const getProjectsBegin = () => ({ type: GET_PROJECTS_BEGIN });

const getProjectsDone = (data) => ({
  type: GET_PROJECTS,
  payload: { data: data.projects },
});

const getProjectsFailed = (error) => ({
  type: GET_PROJECTS_FAILED,
  payload: { error },
});

export const getUserProjects = () => async (dispatch) => {
  try {
    dispatch(getProjectsBegin());
    const { data } = await axios.get(`/projects`);
    dispatch(getProjectsDone(data));
  } catch (error) {
    dispatch(getProjectsFailed(error));
  }
};

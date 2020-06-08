import axios from '../../axios';
import {
  GET_SKILLS,
  GET_SKILLS_BEGIN,
  GET_SKILLS_FAILED,
} from '../action-types/skills';

const getSkillsBegin = () => ({ type: GET_SKILLS_BEGIN });

const getSkillsDone = (data) => ({
  type: GET_SKILLS,
  payload: {
    data: data.skills,
  },
});

const getSkillsFailed = (error) => ({
  type: GET_SKILLS_FAILED,
  payload: error,
});

export const getUserSkills = () => async (dispatch) => {
  try {
    dispatch(getSkillsBegin());
    const { data } = await axios(`/skills`);
    dispatch(getSkillsDone(data));
  } catch (error) {
    dispatch(getSkillsFailed(error));
  }
};

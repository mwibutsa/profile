import axios from "../../axios";
import {
  GET_WORK_EXPERIENCE,
  GET_WORK_EXPERIENCE_BEGIN,
  GET_WORK_EXPERIENCE_FAILED,
} from "../action-types/work-experience";

const getWorkExperienceBegin = () => ({ type: GET_WORK_EXPERIENCE_BEGIN });
const getWorkExperienceDone = (data) => ({
  type: GET_WORK_EXPERIENCE,
  payload: { data: data.jobs },
});

const getWorkExperienceFailed = (error) => ({
  type: GET_WORK_EXPERIENCE_FAILED,
  payload: { error },
});

export const getWorkExperience = () => async (dispatch) => {
  try {
    dispatch(getWorkExperienceBegin());
    const { data } = await axios.get(`/work-experience`);
    dispatch(getWorkExperienceDone(data));
  } catch (error) {
    dispatch(getWorkExperienceFailed(error));
  }
};

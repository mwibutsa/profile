import {
  GET_WORK_EXPERIENCE,
  GET_WORK_EXPERIENCE_BEGIN,
  GET_WORK_EXPERIENCE_FAILED,
} from "../action-types/work-experience";

const initialState = {
  experience: [],
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WORK_EXPERIENCE_BEGIN:
      return { ...state, loading: true, error: null };
    case GET_WORK_EXPERIENCE:
      return { ...state, experience: payload.data, loading: false };
    case GET_WORK_EXPERIENCE_FAILED:
      return { ...state, error: payload.error, loading: false };
    default:
      return state;
  }
};

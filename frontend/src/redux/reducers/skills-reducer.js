import {
  GET_SKILLS,
  GET_SKILLS_BEGIN,
  GET_SKILLS_FAILED,
} from '../action-types/skills';

const initialState = {
  skills: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SKILLS_BEGIN:
      return { ...state, loading: true, error: null };

    case GET_SKILLS:
      return { ...state, loading: false, skills: payload.data };

    case GET_SKILLS_FAILED:
      return { ...state, loading: false, error: payload.error };

    default:
      return state;
  }
};

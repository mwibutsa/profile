import {
  GET_PROJECTS,
  GET_PROJECTS_FAILED,
  GET_PROJECTS_BEGIN,
} from '../action-types/projects';

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROJECTS_BEGIN:
      return { ...state, loading: true, error: null };
    case GET_PROJECTS:
      return { ...state, projects: payload.data, loading: false };
    case GET_PROJECTS_FAILED:
      return { ...state, loading: false, error: payload.error };
    default:
      return state;
  }
};

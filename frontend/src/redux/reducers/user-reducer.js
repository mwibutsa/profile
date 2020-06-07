import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_BEGIN,
  GET_USER_PROFILE_FAILED,
} from '../action-types/user';

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_PROFILE_BEGIN:
      return { ...state, loading: true, error: null };

    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload.data,
        loading: false,
      };

    case GET_USER_PROFILE_FAILED:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };

    default:
      return state;
  }
};

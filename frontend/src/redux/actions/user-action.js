import axios from '../../axios';

import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_BEGIN,
  GET_USER_PROFILE_FAILED,
} from '../action-types/user';

const getUserProfileBegin = () => ({ type: GET_USER_PROFILE_BEGIN });
const getUserProfileDone = (data) => ({
  type: GET_USER_PROFILE,
  payload: { data },
});

const getUserProfileFailed = (error) => ({
  type: GET_USER_PROFILE_FAILED,
  payload: { error },
});

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserProfileBegin());
    const defaultUserId = 1;

    const { data } = await axios.get(`/user/${defaultUserId}`);
    dispatch(getUserProfileDone(data));
  } catch (err) {
    dispatch(getUserProfileFailed(err));
  }
};

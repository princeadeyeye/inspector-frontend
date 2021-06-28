/* eslint-disable linebreak-style */
import {
  GET_USER_PROFILE,
  UPDATE_USER_PROFILE,
  // DELETE_USER_PROFILE,
  CHANGE_USER_PASSWORD,
  REQUEST_NEW_PASSWORD,
  USER_PROFILE_ERROR,
  USER_PROFILE_LOADING,
  USER_PROFILE_END
} from '../actions/userProfile-actions';

const initialState = {
  profile: null,
  loadingProfile: false,
  errorProfile: false,
  passwordResponse: null
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_LOADING:
      return {
        ...state,
        loadingProfile: true
      };
    case GET_USER_PROFILE:
      return {
        ...state,
        profile: action.data,
        errorProfile: false,
      };
    case USER_PROFILE_END:
      return {
        ...state,
        loadingProfile: false
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        profile: action.data,
        loadingProfile: false,
        errorProfile: false,
      };
    case REQUEST_NEW_PASSWORD:
      return {
        ...state,
        loadingProfile: true,
        errorProfile: false,
      };
    case CHANGE_USER_PASSWORD:
      return {
        ...state,
        loadingProfile: false,
        passwordResponse: action.data,
        errorProfile: false,
      };
    case USER_PROFILE_ERROR:
      return {
        ...state,
        loadingProfile: false,
        errorProfile: action.error,
      };

    default:
      return state;
  }
};

export default userProfileReducer;

import { USER_SIGNUP_SUCCESS, USER_SIGNUP_ERROR } from '../actions/register-actions';

const userSignup = (state = { loading: false }, action) => {
  switch (action.type) {
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.data,
        error: false
      };
    case USER_SIGNUP_ERROR:
      return { ...state, error: true, errorMessage: action.error };

    default:
      return state;
  }
};

export default userSignup;

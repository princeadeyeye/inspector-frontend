import {
  LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOGIN_REQUEST
} from '../actions/login-actions';

const initialState = {
  user: null,
  loading: false,
  error: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data,
        loading: false,
        error: false,
        loginLoading: false
      };
    case LOGIN_ERROR:
      return { ...state, error: action.error, loginLoading: true };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
};

export default loginReducer;

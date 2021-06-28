import {
  LOAD_START, LOAD_END, AUTH_SUCCESS, AUTH_REMOVE
} from '../actions/global-actions';

const globalReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_END:
      return {
        ...state,
        loading: false
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.data,
        loading: false,
        error: false
      };
    case AUTH_REMOVE:
      return {
        ...state,
        user: null,
        loading: false,
        error: false
      };
    default:
      return state;
  }
};

export default globalReducer;

/* eslint-disable linebreak-style */
import {
  GET_ALL_INVESTIGATIONS,
  LOADING_INVESUGATION,
  GET_PERSONAL_INVESTIGATIONS,
  CREATE_INVESTIGATION,
  GET_AN_INVESTIGATION,
  UPDATE_AN_INVESTIGATION,
  DELETE_AN_INVESTIGATION,
  INVESTIGATION_ERROR
} from '../actions/investigation-actions';

const initialState = {
  investigations: [],
  investigation: null,
  loadingInv: false,
  errorInv: false,
};

const investigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_INVESUGATION:
      return {
        ...state,
        loadingInv: true
      };
    case GET_ALL_INVESTIGATIONS:
      return {
        ...state,
        investigations: action.data,
        loadingInv: false,
        errorInv: false,
      };
    case GET_PERSONAL_INVESTIGATIONS:
      return {
        ...state,
        investigations: action.data,
        errorInv: false,
        loadingInv: false
      };
    case CREATE_INVESTIGATION:
      return {
        ...state,
        investigation: action.data,
        loadingInv: false,
        errorInv: false,
      };
    case GET_AN_INVESTIGATION:
      return {
        ...state,
        investigation: action.data,
        loadingInv: true,
        errorInv: false,
      };
    case UPDATE_AN_INVESTIGATION:
      return {
        ...state,
        investigation: action.data,
        loadingInv: true,
        errorInv: false,
      };
    case DELETE_AN_INVESTIGATION:
      return {
        ...state,
        loadingInv: true,
        errorInv: false,
      };
    case INVESTIGATION_ERROR:
      return {
        ...state,
        loadingInv: false,
        errorInv: true,
      };

    default:
      return state;
  }
};

export default investigationReducer;

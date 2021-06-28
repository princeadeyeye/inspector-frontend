/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import globalReducer from './global-reducers';
import investigationReducer from './investigation-reducers';
import loginReducer from './login-reducers';
import registerReducer from './register-reducers';
import userProfileReducer from './userProfile-reducers';

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  global: globalReducer,
  userProfile: userProfileReducer,
  investigationData: investigationReducer

});

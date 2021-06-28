/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import globalReducer from './global-reducers';
import loginReducer from './login-reducers';
import registerReducer from './register-reducers';
import userProfileReducer from './userProfile-reducers';

export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  global: globalReducer,
  userProfile: userProfileReducer,

});

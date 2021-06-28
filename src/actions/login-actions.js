import { toast } from 'react-toastify';
import {
  setToken, removeKeys
} from '../services/jwtService';
import http from '../services/httpService';
import { loadEnd, authSuccess, authRemove } from './global-actions';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

const loadStart = () => ({
  type: LOGIN_REQUEST
});

const loginError = (error) => ({
  type: LOGIN_ERROR,
  error
});

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  data
});

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const redirect = (redirectUrl) => {
  window.location = redirectUrl;
};

export const login = (User) => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadStart());
    const { data } = await http.post('auth/login', User);
    dispatch(loginSuccess(data.data));
    dispatch(authSuccess(data.data));
    console.log(data, 'login-action-data');
    const accessToken = `Bearer ${data.token}`;
    setToken(accessToken);
    toast.success('Successfully Login');
    // dispatch(loadEnd());
    redirect('/app/dashboard');
    return true;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      dispatch(loginError(data.error));
      toast.error(data.error);
    } else {
      console.log(error, 'error');
      toast.error('Try again');
    }
    // dispatch(loadEnd());
    return false;
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch(loadStart());
    removeKeys();
    await http.post('auth/logout');
    dispatch(logoutSuccess());
    toast.success('Successfully Logout');
    redirect('/login');
    dispatch(authRemove());
    dispatch(loadEnd());
    return true;
  } catch (error) {
    toast.error(` ${error}`);
    dispatch(loadEnd());
    return false;
  }
};

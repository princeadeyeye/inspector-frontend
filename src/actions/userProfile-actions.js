import { toast } from 'react-toastify';
import http from '../services/httpService';
import { loadStart, loadEnd } from './global-actions';

export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const DELETE_USER_PROFILE = 'DELETE_USER_PROFILE';
export const CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD';
export const REQUEST_NEW_PASSWORD = 'REQUEST_NEW_PASSWORD';
export const USER_PROFILE_ERROR = 'USER_PROFILE_ERROR';
export const USER_PROFILE_LOADING = 'USER_PROFILE_LOADING';
export const USER_PROFILE_END = 'USER_PROFILE_END';

const loadingProfile = () => ({
  type: USER_PROFILE_LOADING
});

const loadingProfileEnds = () => ({
  type: USER_PROFILE_END
});

const getUserProfile = (data) => ({
  type: GET_USER_PROFILE,
  data
});

const sendProfileUpdate = (data) => ({
  type: UPDATE_USER_PROFILE,
  data
});

const removeProfile = (data) => ({
  type: DELETE_USER_PROFILE,
  data
});
const passwordChange = (data) => ({
  type: CHANGE_USER_PASSWORD,
  data
});
const passwordReset = (data) => ({
  type: REQUEST_NEW_PASSWORD,
  data
});
const userProfileError = (error) => ({
  type: USER_PROFILE_ERROR,
  error
});

export const getProfile = () => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadingProfile());
    const { data } = await http.get('auth/profile');
    dispatch(getUserProfile(data.data));
    toast.success(data.message);
    dispatch(loadingProfileEnds());
    return true;
  } catch (error) {
    dispatch(userProfileError(error));
    dispatch(loadingProfileEnds());
    return false;
  }
};

export const submitKyc = (file, fileName) => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    // dispatch(loadingProfile());
    console.log(file, 'file');
    const { data } = await http.post('kyc1?idc_file_name', { idc_file_name: file, file_name: fileName });
    console.log(data, '>>>>>>Data<<<<<<<<');
    dispatch(getUserProfile(data));
    toast.success('Profile retrieve successfully');
    dispatch(loadingProfileEnds());
    return true;
  } catch (error) {
    dispatch(userProfileError(error.response.data));
    dispatch(loadingProfileEnds());
    return false;
  }
};

export const updateProfile = ({
  email,
  fullName,
  ...values
}) => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadingProfile());
    const { data } = await http.post('updateaccountdetails', values);
    dispatch(sendProfileUpdate(data));
    toast.success('Profile has been successfully updated');
    return true;
  } catch (error) {
    dispatch(userProfileError(error));
    dispatch(loadEnd());
    return false;
  }
};

export const deleteProfile = () => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadStart());
    const { data } = await http.get('/missing-url/fund-wallet');
    dispatch(removeProfile(data));
    toast.success('Profile has been deleted');
    dispatch(loadEnd());
    return true;
  } catch (error) {
    dispatch(userProfileError(error));
    dispatch(loadEnd());
    return false;
  }
};

export const updatePassword = () => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadStart());
    const { data } = await http.get('/missing-url/fund-wallet');
    dispatch(passwordChange(data));
    toast.success('Password has been updated');
    dispatch(loadEnd());
    return true;
  } catch (error) {
    dispatch(userProfileError(error));
    dispatch(loadEnd());
    return false;
  }
};

export const resetPassword = () => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    dispatch(loadStart());
    const { data } = await http.get('/missing-url/fund-wallet');
    dispatch(passwordReset(data));
    toast.success('Password has been reset');
    dispatch(loadEnd());
    return true;
  } catch (error) {
    dispatch(userProfileError(error));
    dispatch(loadEnd());
    return false;
  }
};

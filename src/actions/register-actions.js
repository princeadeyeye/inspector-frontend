import { toast } from 'react-toastify';
// import { setToken } from '../services/jwtService';
import http from '../services/httpService';
import { authSuccess } from './global-actions';

export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS';

const UserSignupError = (error) => ({
  type: USER_SIGNUP_ERROR,
  error
});

const UserSignupSuccess = (data) => ({
  type: USER_SIGNUP_SUCCESS,
  data
});

// const redirect = (redirectUrl, history) => {
//   history.push(redirectUrl);
// };

export const register = ({
  checked,
  bankCode,
  ...user
}) => async (dispatch) => {
  if (!navigator.onLine) {
    return toast.error('Please check your internet connection');
  }
  try {
    // dispatch(loadStart());
    console.log(user, 'user>>>>>');
    const { data } = await http.post('auth/register', user);
    dispatch(UserSignupSuccess(data.data));
    dispatch(authSuccess(data.data));
    toast.success(data.message);
    // dispatch(loadEnd());
    return true;
  } catch (error) {
    console.log(error, 'Erorr>>>>>>>>');
    // const { data } = error.response;
    dispatch(UserSignupError(error));
    // toast.error(data.error);
    // dispatch(loadEnd());
    return false;
  }
};

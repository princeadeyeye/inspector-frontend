import axios from 'axios';
import { baseURLApi } from 'src/api';
import { getToken, decodeToken, removeKeys } from './jwtService';

export const tokenMiddleWare = () => {
  const token = decodeToken();
  if (token && Date.now() >= token.exp * 1000) return removeKeys();
  return getToken();
};

axios.defaults.withCredentials = true;
const httpService = axios.create({
  baseURL: baseURLApi,
  headers: {
    'Content-Type': 'application/json',
    Authorization: tokenMiddleWare()
  }
});

export default httpService;

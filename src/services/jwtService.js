import jwtDecode from 'jwt-decode';

const tokenKey = 'token';
const persist = 'persist:root';

export const getToken = () => localStorage.getItem(tokenKey);

export const decodeToken = () => {
  try {
    const token = getToken();
    const userObj = jwtDecode(token);
    console.log(userObj, 'user-obj');
    return userObj;
  } catch (ex) {
    return null;
  }
};

const keysToRemove = ['token', 'persist:root'];

export const removeKeys = () => keysToRemove.forEach((k) => localStorage.removeItem(k));

export const setToken = (token) => localStorage.setItem(tokenKey, token);

export const setToLocalStorage = (title, item) => localStorage.setItem(title, item);
export const getitemFromLocalStorage = (item) => localStorage.getItem(item);
export const removeFromLocalStorage = (item) => localStorage.removeItem(item);

export const removeToken = () => localStorage.removeItem();

export const removePersist = () => localStorage.removeItem(persist);

export default {
  setToken,
  removeToken,
  getToken,
  decodeToken,
  setToLocalStorage,
  getitemFromLocalStorage,
};

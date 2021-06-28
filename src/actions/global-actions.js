export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_REMOVE = 'AUTH_REMOVE';

// LOADING STARTS
export const loadStart = () => ({
  type: LOAD_START
});

// loading ends
export const loadEnd = () => ({
  type: LOAD_END
});

export const authSuccess = (data) => ({
  type: AUTH_SUCCESS,
  data
});

export const authRemove = () => ({
  type: AUTH_REMOVE,
});

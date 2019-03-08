import 'babel-polyfill';
import Helpers from './Helpers';
import {
  SIGNUP,
  SET_REQUEST,
  SET_USER_ERROR,
  SET_CURRENT_USER,
  SET_ADMIN,
} from './types';

export const setSignup = response => ({
  type: SIGNUP,
  payload: response,
});

export const setUserRequest = () => ({
  type: SET_REQUEST,
});

export const setUserError = error => ({
  type: SET_USER_ERROR,
  payload: error,
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const setAdmin = token => ({
  type: SET_ADMIN,
  payload: token,
});

export const userSignup = body => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await Helpers.axiosPost(
      '/auth/signup',
      body,
    );

    dispatch(setSignup(res.data));
    Helpers.statusHandler(
      res.data.message,
      res.status,
    );
    setTimeout(() => window.location.reload(true), 1000);
  } catch (err) {
    const errorMessage = err.response.data.message;
    const statusCode = err.response.status;
    Helpers.statusHandler(errorMessage, statusCode);
    dispatch(setUserError(errorMessage));
  }
};

export const userLogin = body => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await Helpers.axiosPost(
      '/auth/login',
      body,
    );

    Helpers.statusHandler(
      res.data.message,
      res.status,
    );
    const user = {
      token: res.data.token,
      user: res.data.user,
    };
    dispatch(setCurrentUser(user));
    localStorage.setItem('userDetails', JSON.stringify(user));
    window.location.href = '/';
  } catch (err) {
    const errorMessage = err.response.data.message;
    const statusCode = err.response.status;
    Helpers.statusHandler(errorMessage, statusCode);
    dispatch(setUserError(errorMessage));
  }
};

export const userData = () => async (dispatch) => {
  if (localStorage.getItem('userDetails') !== null) {
    const user = JSON.parse(localStorage.getItem('userDetails'));
    dispatch(setCurrentUser(user));
  } else {
    return false;
  }
};

export const logOut = () => {
  localStorage.removeItem('userDetails');
  return setTimeout(() => { window.location.href = '/login'; }, 500);
};

export const adminLogin = body => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await Helpers.axiosPost(
      '/auth/admin',
      body,
    );

    Helpers.statusHandler(
      res.data.message,
      res.status,
    );
    const { token } = res.data;
    dispatch(setAdmin({ token }));
    localStorage.setItem('adminToken', JSON.stringify({ token }));
    window.location.href = '/admin';
  } catch (err) {
    const errorMessage = err.response.data.message;
    const statusCode = err.response.status;
    Helpers.statusHandler(errorMessage, statusCode);
    dispatch(setUserError(errorMessage));
  }
};

import 'babel-polyfill';
import Helpers from "./Helpers";
import { SIGNUP, SET_REQUEST, SET_USER_ERROR, LOGIN, SET_CURRENT_USER, } from './types';

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

export const setLogin = response => ({
  type: LOGIN,
  payload: response,
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const userSignup = (body) => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await Helpers.axiosPost(
      '/auth/signup',
      body
    );
    
    dispatch(setSignup(res.data));
    Helpers.statusHandler(
      res.data.message,
      res.status
    );
    setTimeout(() => location.reload(true), 1000);
  } catch(err) {
    const errorMessage = err.response.data.message;
    const statusCode = err.response.status;
    Helpers.statusHandler(errorMessage, statusCode);
    dispatch(setUserError(errorMessage));
  }
}

export const userLogin = (body) => async (dispatch) => {
  dispatch(setUserRequest());
  try {
    const res = await Helpers.axiosPost(
      '/auth/login',
      body
    );
    
    dispatch(setLogin(res.data));
    Helpers.statusHandler(
      res.data.message,
      res.status
    );
    const user = {
      token: res.data.token,
      user: res.data.user
    }
    dispatch(setCurrentUser(user));
    localStorage.setItem('userDetails',JSON.stringify(user));
    setTimeout(() => location.href='/', 1000);
  } catch(err) {
    const errorMessage = err.response.data.message;
    const statusCode = err.response.status;
    Helpers.statusHandler(errorMessage, statusCode);
    dispatch(setUserError(errorMessage));
  }
}

export const userData = () => async (dispatch) => {
  if (localStorage.getItem('userDetails') !== null) {
    const user = JSON.parse(localStorage.getItem('userDetails'));
    dispatch(setCurrentUser(user));
  } else {
    return false;
  }
}

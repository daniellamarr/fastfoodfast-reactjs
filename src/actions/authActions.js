import 'babel-polyfill';
import Helpers from "./Helpers";
import { SIGNUP, SET_REQUEST, SET_USER_ERROR, } from './types';

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

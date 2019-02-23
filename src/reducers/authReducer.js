import {
  SIGNUP, SET_REQUEST, SET_USER_ERROR, SET_CURRENT_USER,
} from '../actions/types';

const initialState = {
  response: {},
  loadingStatus: false,
};

/**
 * Menu Reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} current state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_REQUEST:
      return {
        loadingStatus: true,
      };
    case SET_USER_ERROR:
      return {
        error: action.payload,
        loadingStatus: false,
      };
    case SIGNUP:
      return {
        ...state,
        response: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

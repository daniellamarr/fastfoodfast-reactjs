import { SIGNUP, SET_REQUEST, SET_USER_ERROR, } from '../actions/types';

const initialState = {
  response: {},
  loadingStatus: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
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
    default:
      return state;
  }
}

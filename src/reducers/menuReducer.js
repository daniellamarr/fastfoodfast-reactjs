import { FETCH_MENU } from '../actions/types';

const initialState = {
  menus: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_MENU:
      return {
        ...state,
        menus: action.payload,
        menuStatus: true
      }
    default:
    return state;
  }
}

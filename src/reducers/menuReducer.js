import { FETCH_MENU, FETCH_SINGLE_MENU } from '../actions/types';

const initialState = {
  menus: [],
  menu: {},
  menuStatus: false,
};

/**
 * Menu Reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} current state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MENU:
      return {
        ...state,
        menus: action.payload,
        menuStatus: true,
      };
    case FETCH_SINGLE_MENU:
      return {
        ...state,
        menu: action.payload,
        menuStatus: true,
      };
    default:
      return state;
  }
}

import { FETCH_MENU } from '../actions/types';

const initialState = {
  menus: [],
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
    default:
      return state;
  }
}

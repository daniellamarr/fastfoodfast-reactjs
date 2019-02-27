import { GET_USER_ORDERS } from '../actions/types';

const initialState = {
  orders: [],
  orderStatus: true,
};

/**
 * Menu Reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} current state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return {
        ...state,
        orders: action.payload,
        orderStatus: false,
      };
    default:
      return state;
  }
}

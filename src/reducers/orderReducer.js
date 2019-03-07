import { GET_USER_ORDERS, SET_ORDER_REQUEST } from '../actions/types';

const initialState = {
  orders: [],
  orderStatus: true,
  loadingStatus: false,
};

/**
 * Order Reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} current state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ORDER_REQUEST:
      return {
        ...state,
        loadingStatus: true,
      };
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

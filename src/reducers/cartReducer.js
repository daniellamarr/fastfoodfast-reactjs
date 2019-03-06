import { GET_CART } from '../actions/types';

const initialState = {
  cart: [],
  noOfItems: 0,
  cartStatus: false,
};

/**
 * Order Reducer
 * @param {object} state
 * @param {object} action
 * @returns {object} current state
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
        noOfItems: action.noOfItems,
        cartStatus: true,
      };
    default:
      return state;
  }
}

import Helpers from './Helpers';
import { GET_USER_ORDERS, SET_ORDER_REQUEST } from './types';
import jwtDecode from '../utils/jwtDecode';
import { logOut } from './authActions';

export const setOrderRequest = () => ({
  type: SET_ORDER_REQUEST,
});

// eslint-disable-next-line import/prefer-default-export
export const getAllOrders = () => async (dispatch) => {
  try {
    const userDetails = localStorage.getItem('userDetails');
    const { token } = JSON.parse(userDetails);
    const { id } = jwtDecode(token);
    const payload = await Helpers.axiosGet(
      `/users/${id}/orders`,
      {
        'x-access-token': token,
      },
    );
    const { order } = payload.data;
    dispatch({
      type: GET_USER_ORDERS,
      payload: order,
    });
  } catch (error) {
    Helpers.statusHandler('Logging you out', error.response.status);
    if (error.response.status === 401) {
      logOut();
    }
  }
};

export const placeOrder = () => async (dispatch) => {
  try {
    dispatch(setOrderRequest());
    const userDetails = localStorage.getItem('userDetails');
    const { token } = JSON.parse(userDetails);
    const items = [];
    const getItems = JSON.parse(localStorage.getItem('items'));
    getItems.map((item) => {
      const cart = {
        order: item.title,
        quantity: item.quantity,
      };
      items.push(cart);
      return true;
    });
    const order = await Helpers.axiosPost(
      '/orders',
      { menu: items },
      {
        'x-access-token': token,
      },
    );
    Helpers.statusHandler('Your order has been placed', order.status);
    localStorage.removeItem('items');
    setTimeout(() => { window.location.href = '/'; }, 1000);
  } catch (err) {
    const errorMessage = err.response.data.message;
    const statusCode = err.response.status;
    Helpers.statusHandler(errorMessage, statusCode);
  }
};

import Helpers from './Helpers';
import { GET_USER_ORDERS } from './types';
import jwtDecode from '../utils/jwtDecode';
import { logOut } from './authActions';

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

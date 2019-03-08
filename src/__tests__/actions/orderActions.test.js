import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { path } from '../../actions/Helpers';
import { userOrders, loginMock, cartItems, unauthLogin, signupMock } from '../__mocks__/responseMock';
import jwtDecode from '../../utils/jwtDecode';
import { GET_USER_ORDERS, SET_REQUEST } from '../../actions/types';
import { getAllOrders, placeOrder } from '../../actions/orderActions';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Order Actions Test', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
    localStorage.setItem('items', JSON.stringify(cartItems));
  });

  afterEach(() => {
    moxios.uninstall();
    localStorage.removeItem('items');
  });
  describe('Successful orders', () => {
    beforeAll(() => {
      localStorage.setItem('userDetails', JSON.stringify(loginMock));
    });

    test('Get all orders for a specific user', async () => {
      const userDetails = localStorage.getItem('userDetails');
      const { token } = JSON.parse(userDetails);
      const { id } = jwtDecode(token);
      moxios.stubRequest(`${path}/users/${id}/orders`, {
        status: 200,
        response: {
          order: userOrders,
        },
      });
      const expectedActions = [
        {
          type: GET_USER_ORDERS,
          payload: userOrders,
        },
      ];

      await store.dispatch(getAllOrders());
      expect(store.getActions()).toEqual(expectedActions);
    });

    test('Place an order', async () => {
      moxios.stubRequest(`${path}/orders`, {
        status: 200,
        response: {
          order: userOrders,
        },
      });
      const expectedActions = [
        {
          type: SET_REQUEST,
        },
      ];

      await store.dispatch(placeOrder());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  describe('Auth Actions Error Test', () => {
    beforeAll(() => {
      localStorage.setItem('userDetails', JSON.stringify(unauthLogin));
    });

    test('should return error if token is empty', async () => {
      moxios.stubRequest(`${path}/orders`, {
        status: 401,
        response: {
          order: userOrders,
        },
      });
      const expectedActions = [
        {
          type: SET_REQUEST,
        },
      ];

      await store.dispatch(placeOrder());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Auth Actions Error Test', () => {
    beforeAll(() => {
      localStorage.setItem('userDetails', JSON.stringify(loginMock));
    });
    test('should return error if token is empty', async () => {
      moxios.stubRequest(`${path}/users/1/orders`, {
        status: 401,
        response: {
          status: 'Error',
        },
      });
      try {
        await store.dispatch(getAllOrders());
      } catch (error) {
        expect(error.response.status).toEqual('error');
      }
    });
  });
});

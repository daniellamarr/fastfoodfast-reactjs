import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {
  userLogin,
  userSignup,
  userData,
  adminLogin,
} from '../../actions/authActions';
import {
  SET_CURRENT_USER,
  SET_REQUEST, SIGNUP,
  SET_USER_ERROR,
  SET_ADMIN,
} from '../../actions/types';
import {
  loginMock,
  signupMock,
  errorSignupMock,
  errorLoginMock,
  adminMock,
} from '../__mocks__/responseMock';
import { path } from '../../actions/Helpers';
import {
  loginData,
  signupData,
  badSignupData,
  badLoginData,
  adminData,
} from '../__mocks__/requestMock';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Auth Actions Test', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('A user should log in to the app', async () => {
    moxios.stubRequest(`${path}/auth/login`, {
      status: 200,
      response: loginMock,
    });
    const expectedActions = [
      {
        type: SET_REQUEST,
      },
      {
        type: SET_CURRENT_USER,
        payload: loginMock,
      },
    ];

    await store.dispatch(userLogin(loginData));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('A user should sign up on the app', async () => {
    moxios.stubRequest(`${path}/auth/signup`, {
      status: 200,
      response: signupMock,
    });
    const expectedActions = [
      {
        type: SET_REQUEST,
      },
      {
        type: SIGNUP,
        payload: signupMock,
      },
    ];

    await store.dispatch(userSignup(signupData));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Error occur on signup when incomplete data is passed', async () => {
    moxios.stubRequest(`${path}/auth/signup`, {
      status: 400,
      response: errorSignupMock,
    });
    const expectedActions = [
      {
        type: SET_REQUEST,
      },
      {
        type: SET_USER_ERROR,
        payload: errorSignupMock.message,
      },
    ];

    await store.dispatch(userSignup(badSignupData));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Error occur on login when incomplete data is passed', async () => {
    moxios.stubRequest(`${path}/auth/login`, {
      status: 400,
      response: errorLoginMock,
    });
    const expectedActions = [
      {
        type: SET_REQUEST,
      },
      {
        type: SET_USER_ERROR,
        payload: errorLoginMock.message,
      },
    ];

    await store.dispatch(userLogin(badLoginData));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Check if a user is logged in', async () => {
    const expectedActions = [
      {
        type: SET_CURRENT_USER,
        payload: loginMock,
      },
    ];
    await store.dispatch(userData());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('An admin should log in to the app', async () => {
    moxios.stubRequest(`${path}/auth/admin`, {
      status: 200,
      response: adminMock,
    });
    const expectedActions = [
      {
        type: SET_REQUEST,
      },
      {
        type: SET_ADMIN,
        payload: adminMock,
      },
    ];

    await store.dispatch(adminLogin(adminData));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Error occur admin login when incomplete data is passed', async () => {
    moxios.stubRequest(`${path}/auth/admin`, {
      status: 400,
      response: errorLoginMock,
    });
    const expectedActions = [
      {
        type: SET_REQUEST,
      },
      {
        type: SET_USER_ERROR,
        payload: errorLoginMock.message,
      },
    ];

    await store.dispatch(adminLogin(badLoginData));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

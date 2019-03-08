import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getAllMenu, getSingleMenu } from '../../actions/Menu';
import { getMenuMock, getSingleMenuMock } from '../__mocks__/responseMock';
import { FETCH_MENU, FETCH_SINGLE_MENU } from '../../actions/types';
import { path } from '../../actions/Helpers';
import { mockMenuID } from '../__mocks__/requestMock';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Menu Actions Test', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('Get all menu items', async () => {
    moxios.stubRequest(`${path}/menu`, {
      status: 200,
      response: {
        menu: getMenuMock,
      },
    });
    const expectedActions = [
      {
        type: FETCH_MENU,
        payload: getMenuMock,
      },
    ];

    await store.dispatch(getAllMenu());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Get a single menu item', async () => {
    moxios.stubRequest(`${path}/menu/${mockMenuID}`, {
      status: 200,
      response: {
        menu: getSingleMenuMock,
      },
    });
    const expectedActions = [
      {
        type: FETCH_SINGLE_MENU,
        payload: getSingleMenuMock,
      },
    ];

    await store.dispatch(getSingleMenu(mockMenuID));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

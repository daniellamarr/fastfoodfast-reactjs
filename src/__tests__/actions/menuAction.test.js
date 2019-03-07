import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getAllMenu } from '../../actions/Menu';
import { getMenuMock } from '../__mocks__/responseMock';
import { FETCH_MENU } from '../../actions/types';
import { path } from '../../actions/Helpers';

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
    // moxios.wait(() => {
    //   const request = moxios.requests.mostRecent();
    //   request.respondWith({
    //     status: 200,
    //     response: {
    //       data: {
    //         menu: getMenuMock,
    //       },
    //     },
    //   });
    // });
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
});

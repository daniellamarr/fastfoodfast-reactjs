/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { SingleMenu } from '../../routes/SingleMenu.jsx';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

let wrapper;

const props = {
  getSingleMenu: () => {},
  addToCart: () => {},
  match: {
    params: {
      id: '1',
    },
  },
  menu: {},
  menus: [{}],
  menuStatus: false,
};

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <SingleMenu {...props} />
    </Provider>,
  );
});
afterEach(() => {
  wrapper.unmount();
});

describe('SingleMenu Component', () => {
  xit('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

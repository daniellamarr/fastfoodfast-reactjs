/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Cart } from '../../components/Cart.jsx';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

let wrapper;

const props = {
  getCartItems: () => {},
  cart: {
    cart: [
      {
        title: 'Hello Test',
      },
    ],
    noOfItems: 1,
  },
};

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Cart {...props} />
    </Provider>,
  );
});
afterEach(() => {
  wrapper.unmount();
});

describe('SingleMenu Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

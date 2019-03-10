/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Checkout } from '../../routes/Checkout.jsx';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

let wrapper;

const props = {
  getCartItems: () => {},
  deleteItem: () => {},
  placeOrder: () => {},
  cart: {
    cart: [
      {
        title: 'Hello Test',
        price: 100,
        quantity: 20,
      },
    ],
    noOfItems: 1,
  },
  orders: {
    loadingStatus: false,
  },
};

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Checkout {...props} />
    </Provider>,
  );
});
afterEach(() => {
  wrapper.unmount();
});

describe('Profile Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('click delete button', () => {
    wrapper.find('.red-text').simulate('click');
  });

  it('click place order button', () => {
    wrapper.find('#ordernow').simulate('click');
  });

  it('should simulate an empty cart', () => {
    const props2 = { ...props, cart: { cart: [] } };
    wrapper = mount(<Checkout {...props2} />);
  });
});

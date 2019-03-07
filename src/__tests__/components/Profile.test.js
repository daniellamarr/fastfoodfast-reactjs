/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Profile } from '../../routes/Profile.jsx';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

let wrapper;

const props = {
  userData: () => {},
  getAllOrders: () => {},
  auth: {
    user: {
      user: {
        name: 'Test User',
        email: 'Test Email',
      },
    },
  },
  orders: {
    orders: [
      {
        food: [
          {
            orderid: 'Test food',
            quantity: 5,
          },
        ],
      },
    ],
    orderStatus: true,
  },
};

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Profile {...props} />
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

  it('should return food and quantity', () => {
    expect(wrapper.find('Profile')
      .props().orders.orders[0].food
      .map(foodItem => `${foodItem.orderid} - ${foodItem.quantity}`))
      .toEqual(['Test food - 5']);
  });

  it('empty profile loader class when order status is false', () => {
    const props2 = {
      ...props,
      orders: {
        orders: [
          {
            food: [
              {
                orderid: 'Test food',
                quantity: 5,
              },
            ],
          },
        ],
        orderStatus: false,
      },
    };
    wrapper = mount(<Profile {...props2} />);
    expect(wrapper.find('.profileLoader').render().text()).toEqual('');
  });

  it('empty userFullName, userEmail class when userdetails is empty', () => {
    const props2 = {
      ...props,
      auth: {},
    };
    wrapper = mount(<Profile {...props2} />);
    expect(wrapper.find('.userFullName').render().text()).toEqual('');
    expect(wrapper.find('.userEmail').render().text()).toEqual('');
  });
});

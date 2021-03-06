/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { GetMenu } from '../../components/GetMenu.jsx';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('GetMenu Component', () => {
  let wrapper;

  const props = {
    getAllMenu: () => {},
    addToCart: () => {},
    menuItems: [
      { id: 1, title: 'Food One', price: '2000' },
    ],
    menuStatus: false,
  };

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <GetMenu {...props} />
      </Provider>,
    );
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('should find button addtocart', () => {
    expect(wrapper.find('.addtocart').length).toEqual(0);
  });
});

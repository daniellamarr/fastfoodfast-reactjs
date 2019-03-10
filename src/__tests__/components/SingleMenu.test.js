/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { SingleMenu } from '../../routes/SingleMenu.jsx';
import { mapStateToProps } from '../../components/GetMenu.jsx';

const initialState = {
  menus: {
    menus: [
      {
        id: 1,
        title: 'test',
        price: '1000',
      },
    ],
    menuStatus: false,
  },
};

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

let wrapper;

const props = {
  getSingleMenu: () => {},
  addToCart: () => {},
  match: {
    params: {
      id: '1',
    },
  },
  menu: {
    id: 1,
    title: 'test menu',
    quantity: '30',
    price: '1000',
    image: 'image url',
  },
  menus: {
    menus: [{}],
  },
  menuStatus: true,
};

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <SingleMenu {...props} />
    </Provider>,
  );
});

describe('SingleMenu Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('click addtocart button', () => {
    wrapper.find('button').simulate('click');
  });

  it('should simulate quantity text field change', () => {
    wrapper.find('.quantityField').simulate('change');
    // expect(wrapper.state().quantity).toEqual('');
  });

  it('should show previously rolled value', () => {
    expect(mapStateToProps(initialState).menuItems)
      .toEqual(initialState.menus.menus);
  });
});

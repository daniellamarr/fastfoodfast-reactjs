/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import 'babel-polyfill';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header.jsx';

const initialState = {
  cart: {
    cart: [
      {
        id: 1,
        image: 'some url',
        title: 'test title',
      },
    ],
    noOfItems: 0,
  },
};

let wrapper;

const props = {
  userData: () => {},
  getCartItems: () => {},
  auth: {
    user: {},
  },
  cart: {
    cart: [
      {
        id: 1,
        image: 'some url',
        title: 'test title',
      },
    ],
    noOfItems: 0,
  },
};

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

beforeEach(() => {
  wrapper = shallow(
    <Provider store={store}>
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>
    </Provider>,
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('Header Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

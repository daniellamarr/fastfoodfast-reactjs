/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import 'babel-polyfill';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Header } from '../../components/Header.jsx';

let wrapper;

const props = {
  userData: () => {},
  getCartItems: () => {},
  auth: {
    user: {},
  },
  cart: {
    noOfItems: 0,
  },
};

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

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

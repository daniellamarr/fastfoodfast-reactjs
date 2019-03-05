/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Header } from '../../components/Header.jsx';

let wrapper;

const props = {
  userData: () => {},
  auth: {
    user: {},
  },
};
beforeEach(() => {
  wrapper = mount(
    <Header {...props} />,
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe('Header Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should find shoppingCart()', () => {
    sinon.spy(wrapper.instance(), 'componentDidMount');
    wrapper.instance().componentDidMount().shoppingCart();
    expect(wrapper.instance()
      .componentDidMount.calledOnce).toEqual(true);
  });
});

import 'babel-polyfill';
import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../routes/index.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Container />);
});

describe('Container Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

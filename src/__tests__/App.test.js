/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import App from '../App.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('App Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

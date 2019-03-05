/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import Home from '../../routes/Home.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Home />);
});

describe('Loader Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

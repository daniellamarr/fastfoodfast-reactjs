/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import Loader from '../../components/Loader.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Loader />);
});

describe('Loader Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

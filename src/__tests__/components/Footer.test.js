/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import Footer from '../../components/Footer.jsx';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer />);
});

describe('Footer Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

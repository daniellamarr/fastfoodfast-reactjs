/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { mount } from 'enzyme';
import { Signup } from '../../routes/Signup.jsx';

let wrapper;

const props = {
  auth: {
    loadingStatus: false,
  },
  userSignup: () => {},
};

beforeEach(() => {
  wrapper = mount(<Signup {...props} />);
});

describe('Loader Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate email text field change', () => {
    wrapper.find('#email').simulate('change');
    expect(wrapper.state().email).toEqual('');
  });

  it('should simulate form submission', () => {
    wrapper.find('#signupForm').simulate('submit', {
      preventDefault: () => {},
    });
    const props2 = { ...props, auth: { loadingStatus: true } };
    wrapper = mount(<Signup {...props2} />);
    expect(wrapper.state().email).toEqual('');
    expect(wrapper.props().auth.loadingStatus).toEqual(true);
  });
});

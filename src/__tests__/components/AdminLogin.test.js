/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { mount } from 'enzyme';
import { AdminLogin } from '../../routes/AdminLogin.jsx';

let wrapper;

const props = {
  auth: {
    loadingStatus: false,
  },
  adminLogin: () => {},
};

beforeEach(() => {
  wrapper = mount(<AdminLogin {...props} />);
});

describe('Login Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should find simulate email field change', () => {
    wrapper.find('#email').simulate('change');
    expect(wrapper.state().email).toEqual('');
  });

  it('should find login form submit', () => {
    wrapper.find('#adminLoginForm').simulate('submit', {
      preventDefault: () => {},
    });
    const props2 = { ...props, auth: { loadingStatus: true } };
    wrapper = mount(<AdminLogin {...props2} />);
    expect(wrapper.props().auth.loadingStatus).toEqual(true);
  });
});

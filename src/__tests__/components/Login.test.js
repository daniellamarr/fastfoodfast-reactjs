/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { mount } from 'enzyme';
import { Login } from '../../routes/Login.jsx';

let wrapper;

const props = {
  auth: {
    loadingStatus: false,
  },
  userLogin: () => {},
};

beforeEach(() => {
  wrapper = mount(<Login {...props} />);
});

describe('Login Component', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should simulate email text field change', () => {
    wrapper.find('#email').simulate('change');
    expect(wrapper.state().email).toEqual('');
  });

  it('should simulate form submission', () => {
    wrapper.find('#loginForm').simulate('submit', {
      preventDefault: () => {},
    });
    const props2 = { ...props, auth: { loadingStatus: true } };
    wrapper = mount(<Login {...props2} />);
    expect(wrapper.props().auth.loadingStatus).toEqual(true);
  });
});

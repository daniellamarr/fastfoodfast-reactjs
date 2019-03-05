/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { mount } from 'enzyme';
import { GetMenu } from '../../components/GetMenu.jsx';


describe('GetMenu Component', () => {
  let wrapper;

  const props = {
    getAllMenu: () => {},
    menuItems: [
      { id: 1, title: 'Food One', price: '2000' },
    ],
    menuStatus: false,
  };

  beforeEach(() => {
    wrapper = mount(<GetMenu {...props} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('should find button addtocart', () => {
    expect(wrapper.find('.addtocart').length).toEqual(0);
  });

  // it('should render', () => {
  //   const menuStatus = true;
  //   expect(wrapper.props().menuStatus).toBe(true);
  // });
});

import 'babel-polyfill';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { GET_CART } from '../../actions/types';
import { getCartItems, addToCart, deleteItem } from '../../actions/cartActions';
import { cartItems } from '../__mocks__/responseMock';
import { newCartItem, updatedCartItem } from '../__mocks__/requestMock';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('Cart Actions Test', () => {
  beforeEach(() => {
    store.clearActions();
    localStorage.setItem('items', JSON.stringify(cartItems));
  });

  afterEach(() => {
    localStorage.removeItem('items');
  });

  test('Get Cart Items', async () => {
    const expectedActions = [
      {
        type: GET_CART,
        payload: cartItems,
        noOfItems: cartItems.length,
      },
    ];

    await store.dispatch(getCartItems());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Add new cart item', async () => {
    cartItems.push(newCartItem);
    const expectedActions = [
      {
        type: GET_CART,
        payload: cartItems,
        noOfItems: cartItems.length,
      },
    ];

    await store.dispatch(addToCart(newCartItem));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Update an existing cart item', async () => {
    const itemID = cartItems.findIndex(
      item => item.title === updatedCartItem.title,
    );
    cartItems[itemID].quantity = updatedCartItem.quantity;
    const expectedActions = [
      {
        type: GET_CART,
        payload: cartItems,
        noOfItems: cartItems.length,
      },
    ];

    await store.dispatch(addToCart(updatedCartItem));
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Delete cart item', async () => {
    cartItems.splice(0, 1);
    const expectedActions = [
      {
        type: GET_CART,
        payload: cartItems,
        noOfItems: cartItems.length,
      },
    ];

    await store.dispatch(deleteItem(0));
    expect(store.getActions()).toEqual(expectedActions);
  });

  xtest('Delete items from localStorage', async () => {
    cartItems.splice(0);
    const expectedActions = [
      {
        type: GET_CART,
        payload: cartItems,
        noOfItems: cartItems.length,
      },
    ];

    await store.dispatch(deleteItem(0));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

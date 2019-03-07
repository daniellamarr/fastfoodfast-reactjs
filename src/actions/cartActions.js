/* eslint-disable radix */
import { GET_CART } from './types';

export const setCartItems = items => ({
  type: GET_CART,
  payload: items,
  noOfItems: items.length,
});

export const getCartItems = () => (dispatch) => {
  let items = [];
  const getItems = localStorage.getItem('items');
  if (getItems !== null) {
    items = JSON.parse(getItems);
  }
  dispatch(setCartItems(items));
};

export const addToCart = menu => (dispatch) => {
  let items = [];
  const getItems = localStorage.getItem('items');
  if (getItems !== null) {
    items = JSON.parse(getItems);
  }
  const checkIfMenuExistsInCart = items.some(item => item.title === menu.title);
  const quantity = parseInt(document.getElementById(`qty${menu.id}`).value);
  if (!checkIfMenuExistsInCart) {
    items.push(menu);
  } else {
    const itemID = items.findIndex(item => item.title === menu.title);
    items[itemID].quantity = quantity;
  }

  localStorage.setItem('items', JSON.stringify(items));
  dispatch(setCartItems(items));
  return true;
};

export const deleteItem = id => (dispatch) => {
  let items = [];
  const getItems = localStorage.getItem('items');
  if (getItems !== null) {
    items = JSON.parse(getItems);
  }
  items.splice(id, 1);
  localStorage.setItem('items', JSON.stringify(items));
  if (items.length === 0) {
    localStorage.removeItem('items');
  }
  dispatch(setCartItems(items));
};

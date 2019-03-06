/* eslint-disable radix */
const addToCart = (menu) => {
  let items = [];
  const getItems = localStorage.getItem('items');
  if (getItems !== null) {
    items = JSON.parse(getItems);
  }
  const checkIfMenuExistsInCart = items.some((item) => {
    return item.title === menu.title;
  });
  const quantity = parseInt(document.getElementById(`qty${menu.id}`).value);
  if (!checkIfMenuExistsInCart) {
    items.push(menu);
  } else {
    const itemID = items.findIndex(item => item.title === menu.title);
    items[itemID].quantity = quantity;
  }

  localStorage.setItem('items', JSON.stringify(items));
  return true;
};

export default addToCart;

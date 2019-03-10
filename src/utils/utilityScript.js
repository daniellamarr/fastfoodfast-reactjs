export const onToggle = () => {
  document.getElementById('toggle').onclick = () => {
    document.getElementById('dropdown').classList.toggle('hide');
  };
};

export const onClickAway = () => {
  window.onclick = (event) => {
    const ev = event.target;
    const shoppingCartB = document.getElementById('shoppingcart-b');
    const shoppingCartA = document.getElementById('ti-shopping-cart');
    const shoppingCart = document.getElementById('shoppingcart');
    if (ev !== shoppingCartB && ev !== shoppingCartA) {
      shoppingCart.classList.add('hide');
    }
  };
};

export const shoppingCart = () => {
  const shop = document.getElementsByClassName('shoppingcart-b');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < shop.length; i++) {
    const shopx = shop[i];
    shopx.onclick = () => {
      document.getElementById('shoppingcart').classList.toggle('hide');
    };
  }
};

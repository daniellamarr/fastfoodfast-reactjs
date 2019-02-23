export const onToggle = (clickID, eventID) => {
  document.getElementById(clickID).onclick = () => {
    document.getElementById(eventID).classList.toggle('hide');
  }
}

export const shoppingCart = () => {
  const shop = document.getElementsByClassName('shoppingcart-b');
  for (let i = 0; i < shop.length; i++) {
    const shopx = shop[i];
    shopx.onclick = () =>
    {
      document.getElementById('shoppingcart').classList.toggle('hide');
    }
  }
}

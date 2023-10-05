export function getCartItemsFromLocalStorage() {
    const cartItemsJSON = localStorage.getItem('cartItems');
    return cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
  }
  
  export function saveCartItemsToLocalStorage(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  
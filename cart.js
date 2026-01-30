 function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((count, item) => count + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
  }

 
  document.addEventListener('DOMContentLoaded', updateCartCount);
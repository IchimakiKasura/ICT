document.addEventListener('DOMContentLoaded', () => { 
 const cartItems = []; 
 const productsContainer = document.querySelector('.products');  const cartItemsContainer = document.querySelector('.cart-items');  const totalAmount = document.getElementById('total-amount'); 
 productsContainer.addEventListener('click', (e) => { 
 if (e.target.tagName === 'BUTTON') { 
 const product = e.target.closest('.product'); 
 const productId = product.dataset.id; 
 const productName = product.dataset.name; 
 const productPrice = parseFloat(product.dataset.price); 
 addToCart({ id: productId, name: productName, price: productPrice });  } 
 }); 
 function addToCart(product) { 
 const existingProductIndex = cartItems.findIndex(item => item.id === product.id);  if (existingProductIndex !== -1) { 
 cartItems[existingProductIndex].quantity += 1; 
 } else { 
 product.quantity = 1; 
 cartItems.push(product); 
 } 
 renderCart(); 
 }
 function renderCart() { 
 cartItemsContainer.innerHTML = ''; 
 let total = 0; 
 cartItems.forEach(item => { 
 const cartItem = document.createElement('div'); 
 cartItem.className = 'cart-item'; 
 cartItem.innerHTML = ` 
 <span>${item.name} x ${item.quantity}</span> 
 <span>$${(item.price * item.quantity).toFixed(2)}</span>  `; 
 cartItemsContainer.appendChild(cartItem); 
 total += item.price * item.quantity; 
 }); 
 totalAmount.textContent = total.toFixed(2); 
 } 
 document.getElementById('checkout-button').addEventListener('click', () => {  alert('Thank you for your purchase!'); 
 cartItems.length = 0; 
 renderCart(); 
 }); 
});

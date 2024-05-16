let cart = [];
let total = 0;

function addProduct(id, name, price) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        // If the product exists, increment its quantity
        existingProduct.quantity++;
    } else {
        // If the product doesn't exist, add it to the cart
        cart.push({ id, name, price, quantity: 1 });
    }
    
    // Update the cart and total
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - ₱${item.price * item.quantity}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    document.getElementById('total').textContent = `Total: ₱${total}`;
}

function processSale() {
    const customerName = document.getElementById('customerName').value;
    const saleDetails = cart.map(item => `${item.name} x${item.quantity} - ₱${item.price * item.quantity}`).join('\n');
    const totalAmount = `Total Sale Amount: ₱${total}`;
    const thankYouMessage = `Good day, ${customerName}! My name is Jillian Marie S. Malacaman and I would like to thank you for purchasing our BINI PHOTOCARDS. I hope you have a nice day!`;
    const aboutBINI = `BINI, an eight-member girl group under Star Magic and ABS-CBN, debuted on June 11, 2021, with the hit single "Born to Win." The group was formed through Star Hunt Academy—also known as SHA, ABS-CBN’s training ground for idols and artists—after rigorous training from 2018 to 2020. Its name was derived from the Filipino word "binibini," and its members symbolize the modern Filipina—charming, fierce, independent, and informed.\nReference: https://www.pep.ph/peptionary/179013/bini-members-a5157-20240223`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Welcome to BINIBINI OFFICIAL WEBSITE</title>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="new 1.css"></head><body>');
    printWindow.document.write('<div class="receipt">');
    printWindow.document.write('<h1 style="text-align:center;">Sale Receipt</h1>');
    printWindow.document.write(`<p style="text-align:center;">${thankYouMessage}</p>`);
    printWindow.document.write('<img src="salamin.jpg" style="display:block; margin:auto; width:150px; height:auto;">');
    printWindow.document.write(`<pre style="text-align:center;">${saleDetails}</pre>`);
    printWindow.document.write(`<p style="text-align:center;">${totalAmount}</p>`);
    printWindow.document.write(`<p style="text-align:center;">About BINI</p>`);
    printWindow.document.write(`<p style="text-align:center;">${aboutBINI}</p>`);
    printWindow.document.write('</div></body></html>');
    printWindow.print();
}

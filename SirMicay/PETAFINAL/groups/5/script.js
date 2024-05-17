document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const priceElement = document.getElementById('price');
    const totalElement = document.getElementById('total');

    const basePrice = parseFloat(priceElement.getAttribute('data-price'));

    quantityInput.addEventListener('input', () => {
        let quantity = parseInt(quantityInput.value);
        if (isNaN(quantity) || quantity < 1) {
            quantity = 1;
            quantityInput.value = 1;
        }

        const totalPrice = (basePrice * quantity).toFixed(2);
        totalElement.textContent = totalPrice;
    });
});

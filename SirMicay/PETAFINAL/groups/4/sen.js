 let openShopping = document.querySelector('.shopping');
        let closeShopping = document.querySelector('.closeShopping');
        let list = document.querySelector('.list');
        let listCard = document.querySelector('.listCard');
        let body = document.querySelector('body');
        let total = document.querySelector('.total');
        let quantity = document.querySelector('.quantity');

        openShopping.addEventListener('click', () => {
            body.classList.add('active');
        });
        closeShopping.addEventListener('click', () => {
            body.classList.remove('active');
        });
        let products = [
            {
                id: 1,
                name: 'APPLE IPHONE 11',
                image: 'https://www.greentelcom.ph/storage/2021/02/iphone-11-Purple.jpg',
                price: 24990
            },
            {
                id: 2,
                name: 'APPLE IPHONE 12',
                image: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/1/7/175320_2020.jpg?auto=webp&format=pjpg&width=640',
                price: 28990
            },
            {
                id: 3,
                name: 'APPLE IPHONE 13',
                image: 'https://i5.walmartimages.com/seo/Apple-iPhone-13-Pro-A2483-128GB-Graphite-US-Model-Factory-Unlocked-Cell-Phone-Very-Good-Condition_5baa075e-b02e-46de-b298-0b5308689e75.298b2bd7e7ec3ee04ab09e3e9328baa0.jpeg',
                price: 32990
            },
             {
                id: 4,
                name: 'APPLE IPHONE 14',
                image: 'https://www.kimstore.com/cdn/shop/products/MOBAPP0449_1_ac514858-d4b1-45f0-891b-1047dfe4babe.jpg?v=1665673208',
                price: 45990
            },
			 {
                id: 5,
                name: 'APPLE IPHONE 15',
                image: 'https://compasia.com.ph/cdn/shop/products/iphone-15-872857_500x.png?v=1709814805',
                price: 52990
            },
			 {
                id: 6,
                name: 'APPLE IPHONE XR',
                image: 'data:image/jpeg;base64,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',
                price: 19990
            },
        ];
let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCart(key) {
    if (listCards[key] == null) {
        listCards[key] = { ...products[key], quantity: 1 };
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price;
        count += value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
        }
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity <= 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

   function darkMode() {
            let element = document.body;
            let content = document.getElementById("DarkModetext");
            element.className = "dark-mode";
            content.innerText = "Dark Mode is ON";
        }
        function lightMode() {
            let element = document.body;
            let content = document.getElementById("DarkModetext");
            element.className = "light-mode";
            content.innerText = "Dark Mode is OFF";
        }
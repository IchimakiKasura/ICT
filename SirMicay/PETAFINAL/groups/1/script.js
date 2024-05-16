let arrayPrice = []

function addToCart(item = new Element)
{
    let title = item.children[1].textContent
    let price = item.children[2].textContent
    let random = Math.random()

    document.querySelector(".item_cart").innerHTML += `
<div class="cartem" id="${random}">
    <p id="cartname">${title}</p>
    <p id="cartprice">${price}</p>
    <button onclick="remove('${random}')">remove</button>
</div>
    `

    arrayPrice.push(price)
}

function remove(el)
{
    document.getElementById(el).remove()
}
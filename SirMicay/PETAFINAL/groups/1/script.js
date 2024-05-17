let arrayPrice = []
let items = []

function addToCart(item = new Element)
{
    let title = item.children[1].textContent
    let price = item.children[2].textContent
    let random = Math.random()

    document.getElementById("item_cart").innerHTML += `
<div class="cartem" id="${random}">
    <p id="cartname">${title}</p>
    <p id="cartprice">${price}</p>
</div>
    `

    arrayPrice.push(price.replace(/₱/, "").replace(",", ""))
    items.push(random)
    updatePrice()
}

function remove()
{
    let lastNum = items[items.length - 1]

    document.getElementById(lastNum).remove()
    items.pop()
    arrayPrice.pop()
    updatePrice()
}

function updatePrice()
{
    let money = 0;
    for(let i = 0; i < arrayPrice.length; i++)
    {
        money += parseInt(arrayPrice[i])
    }

    document.getElementById("total").textContent = "₱ " + money.toLocaleString();
}

function buy()
{
    let placeholder = document.getElementById("money")
    let money = parseInt(document.getElementById("total").textContent.replace(/₱/, "").replace(",", ""))
    
    if(money > placeholder.value)
    {
        alert("Insuffecient funds!")
        return
    }
    
    document.getElementById("frm").srcdoc = `
TARANTANO SHOP RECEIPT
<hr>
${document.getElementById("item_cart").innerHTML}
    `
    
    setTimeout(()=>{
        window.frames["frm"].print()
    }, 50)
}
var nav = document.getElementById("nav");
var settings = document.getElementById("settings");
var set = document.getElementById("set");
let st1 = 0;
let st2 = 0;
var rbi = document.getElementById("rbi");
let list2 = "";
let list = JSON.parse(localStorage.getItem('cartList')) || [];
let list3 = JSON.parse(localStorage.getItem('cartPrices')) || [];
let pc = document.getElementById("pcs")
let p = 0;

function sve() {
    localStorage.setItem('cartList', JSON.stringify(list));
    localStorage.setItem('cartPrices', JSON.stringify(list3));
}

function pic(ex){
    pc.style.top = "3rem";
    pc.src = ex
    p = 1
}

window.addEventListener("mousemove",() => {
    let values = 0;
    let val = 0;

    if(event.clientX < 50){
        values = 40
        pc.style.transform = "rotateY(" + values + "deg)";
        pc.style.transform = "rotateY(" + values + "deg)";
        console.log(values);
    }else if(event.clientX < 100){
        values = 30;
        pc.style.transform = "rotateY(" + values + "deg)";
        pc.style.transform = "rotateY(" + values + "deg)";
        console.log(values);
    }else if(event.clientX < 200){
        values = 20;
        pc.style.transform = "rotateY(" + values + "deg)";
        pc.style.transform = "rotateY(" + values + "deg)";
        console.log(values);
    }else if(event.clientX < 400){
        values = 10;
        pc.style.transform = "rotateY(" + values + "deg)";
        pc.style.transform = "rotateY(" + values + "deg)";
        console.log(values);
    }else if(event.clientX < 600){
        values = 0;
        pc.style.transform = "rotateY(" + values + "deg)";
        pc.style.transform = "rotateY(" + values + "deg)";
        console.log(values);
    }else if(event.clientX < 700){
        values = -10;
        pc.style.transform = "rotateY(" + values + "deg)";
        pc.style.transform = "rotateY(" + values + "deg)";
        console.log(event.clientX);
    }else if(event.clientX < 900){
        values = -20;
        pc.style.transform = "rotateY(" + values + "deg)";
        pc.style.transform = "rotateY(" + values + "deg)";
        console.log(event.clientX);
    }else if(event.clientX < 1100){
        values = -30;
        pc.style.transform = "rotateY(" + values + "deg)";
        pc.style.transform = "rotateY(" + values + "deg)";
        console.log(event.clientX);
    }else if(event.clientX < 1400){
        values = -40;
        pc.style.transform = "rotateY(" + values + "deg)";
        pc.style.transform = "rotateY(" + values + "deg)";
        console.log(event.clientX);
    }

    if(event.clientY < 100){
        val = -20;
        pc.style.transform += "rotateX(" + val + "deg)";
    }else if(event.clientY < 200){
        val = -10;
        pc.style.transform += "rotateX(" + val + "deg)";
    }else if(event.clientY < 300){
        val = 0;
        pc.style.transform += "rotateX(" + val + "deg)";
    }else if(event.clientY < 400){
        val = 10;
        pc.style.transform += "rotateX(" + val + "deg)";
    }else if(event.clientY < 700){
        val = 15;
        pc.style.transform += "rotateX(" + val + "deg)";
    }
})

function pics(){
    pc.style.top = "-50rem";
    p = 0;
}

window.addEventListener('load', function() {
    refr();
});

function refr() {
    rbi.innerHTML = list;
}

function sett(){ //settings 
    if(st1 == 0){
        set.style.transform = "rotateZ(-90deg)";
        settings.style.top = "3.3em";
        st1++;
    }else{
        set.style.transform = "rotateZ(0deg)";
        settings.style.top = "-6em";
        st1--;
    }
}

function logs(){
    localStorage.clear()
    location.href = "?"
}

function func(x,y){
    let pr = prompt("How many products do you wanna buy?")

    if(isNaN(pr) || pr <= 0){
        alert("Invalid Value")
    }else{
        list.push(pr + "x " + y + " ")
        list2 = pr * x + "+"
        list3.push(list2)
        sve();
        rbi.innerHTML = list
    }
}

function undo(){
    list.pop()
    list3.pop()
    sve()
    rbi.innerHTML = list
}

function clears(){
    list = []
    list3 = []
    localStorage.removeItem("cartList")
    localStorage.removeItem("cartPrices")
    rbi.innerHTML = list
}

function eval(){
    let total = 0;
    for (let i = 0; i < list3.length; i++) {
        total += parseInt(list3[i]);
    }
    alert("Total cost: " + total);
}
var nav = document.getElementById("nav");
var settings = document.getElementById("settings");
var set = document.getElementById("set");
let st1 = 0;
let st2 = 0;
let data = JSON.parse(localStorage.getItem("Info"));
var names = document.getElementById("name")
var age = document.getElementById("age")
var email = document.getElementById("email")

names.innerHTML = "Fullname: " + data.firstname + " " + data.lastname
age.innerHTML = "age: " + data.years
email.innerHTML = "Email: " + data.emaill

function sett(){
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


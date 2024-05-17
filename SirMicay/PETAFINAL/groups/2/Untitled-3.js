let fn = document.getElementById("fn")
let ln = document.getElementById("ln")
let age = document.getElementById("age")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let pass2 = document.getElementById("pass2")
let data = {}

function sub(){
    if(fn.value.trim() == "" || ln.value.trim() == "" || age.value.trim() == "" || email.value.trim() == "" || pass.value.trim() == "" || pass2.value.trim() == ""){
        alert("One Or More Values Is Blank.")
    }else if(pass.value.trim() !== pass2.value.trim()){
        alert("Password Is Not The same.")
    }else{
        alert("Success!")
        data = {
            firstname:fn.value.trim(),
            lastname:ln.value.trim(),
            years:age.value.trim(),
            emaill:email.value.trim(),
            pass:email.value.trim(),
        }
        localStorage.setItem("Info",JSON.stringify(data))
        location.href = "Web/Marketplace.html"
    }
}
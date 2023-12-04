let usr = document.querySelector("#usr");
let eml = document.querySelector("#eml");
let psw = document.querySelector("#psw");
let dt = document.querySelector("#dt");

let list = [usr, eml, psw, dt];

list.forEach(el => {
  el.addEventListener("focus", ()=>{
    el.style.borderColor = "rgba(206, 206, 206, 0.3)";
  })
});

function validateForm()
{
  let isValid = true;

  let usrForm = document.forms["htaForm"]["usrForm"].value;
  let emlForm = document.forms["htaForm"]["emlForm"].value;
  let pswForm = document.forms["htaForm"]["pswForm"].value;
  let dtForm = document.forms["htaForm"]["dtForm"].value;

  if(usrForm == "") {
    usr.style.borderColor = "rgba(255,0,0,0.5)";
    isValid = false;
  }

  if(emlForm == "") {
    eml.style.borderColor = "rgba(255,0,0,0.5)";
    isValid = false;
  }

  if(pswForm == "") {
    psw.style.borderColor = "rgba(255,0,0,0.5)";
    isValid = false;
  }

  if(dtForm == "") {
    dt.style.borderColor = "rgba(255,0,0,0.5)";
    isValid = false;
  }

  return isValid;
}
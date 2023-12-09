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

  let Formlist = [
    {
      value: document.forms["htaForm"]["usrForm"].value,
      style: usr.style
    },
    {
      value: document.forms["htaForm"]["emlForm"].value,
      style: eml.style
    },
    {
      value: document.forms["htaForm"]["pswForm"].value,
      style: psw.style
    },
    {
      value: document.forms["htaForm"]["dtForm"].value,
      style: dt.style
    }
  ]

  Formlist.forEach(form => {
    if(form.value == "")
    {
      form.style.borderColor = "rgba(255,0,0,0.5)"
      isValid = false
    }
  });

  if(isValid)
    document.forms["htaForm"]["pswForm"].value = btoa(document.forms["htaForm"]["pswForm"].value);

  return isValid;
}
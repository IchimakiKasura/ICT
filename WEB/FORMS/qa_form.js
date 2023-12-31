
const list = [
  document.querySelector("#usr"),
  document.querySelector("#eml"),
  document.querySelector("#psw"),
  document.querySelector("#dt")
];

list.forEach(el => {
  el.addEventListener("focus", ()=>{
    el.style.borderColor = "rgba(206, 206, 206, 0.3)"
  })
});

function validateForm()
{
  let isValid = true;
  const hf = "htaForm"

  let Formlist = [
    {
      value: document.forms[hf]["usrForm"].value,
      style: list[0].style
    },
    {
      value: document.forms[hf]["emlForm"].value,
      style: list[1].style
    },
    {
      value: document.forms[hf]["pswForm"].value,
      style: list[2].style
    },
    {
      value: document.forms[hf]["dtForm"].value,
      style: list[3].style
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
    document.forms["htaForm"]["pswForm"].value = btoa(document.forms["htaForm"]["pswForm"].value)

  return isValid
}
"use strict";

const hf = "htaForm"
const list = [
  か("#usr").gt,
  // document.querySelector("#eml"),
  か("#psw").gt,
  // document.querySelector("#dt")
];

list.forEach(el => {
  か(el).evt("focus", () => {
    el.style.borderColor = "rgba(255, 206, 206, 0.3)"
  })
});

function validateForm() {

  let errorPlaceholder = か("#error_placeholder")
  errorPlaceholder.text("")

  let isValid = true

  let Formlist = [
    {
      // value: list[0].value, haha lmao
      value: document.forms[hf]["usrForm"].value,
      style: list[0].style
    },
    // {
    //   value: document.forms[hf]["emlForm"].value,
    //   style: list[1].style
    // },
    {
      value: document.forms[hf]["pswForm"].value,
      style: list[1].style
    },
    // {
    //   value: document.forms[hf]["dtForm"].value,
    //   style: list[3].style
    // }
  ]

  // changes the input border color into red when error occured ejahahr
  Formlist.forEach(form => {
    if (form.value == "") {
      form.style.borderColor = "rgba(255,0,0,0.5)"
      isValid = false
    }
  });

  // guard clause thingy
  if (!isValid) return false

  // Cleaner one | easy to maintenance and using hashmap/dictionary and guard clause
  // let accounts = {
  //   "ichimaki": "ichi123",
  //   "admin": "admin123",
  //   "user": "user123"
  // }, 
  // user = Formlist[0].value.toLowerCase() 
  // if(user in accounts)
  // {
  //   if(accounts[user] !== Formlist[1].value)
  //   {
  //     errorPlaceholder.text("Incorrect Password!")
  //     return false
  //   }
  //   document.forms[hf]["pswForm"].value = c5(document.forms[hf]["pswForm"].value)
  //   return true
  // }
  // errorPlaceholder.text("No user found!")
  // return false

  // peta? | sir chris intended way
  switch (Formlist[0].value.toLowerCase()) {
    case "ichimaki":
      switch (Formlist[1].value) {
        case "ichi123":
          document.forms[hf]["pswForm"].value = c5(document.forms[hf]["pswForm"].value)
          return true   // returns true to execute the action
        default:
          // alert("Incorrect Password!")
          errorPlaceholder.text("Incorrect Password!")
          return false  // returns false to cancel action
      }
    // break here is redundant because of return keyword above
    default:
          errorPlaceholder.text("No user found!")
          // alert("No user found!")
      return false
  }
}
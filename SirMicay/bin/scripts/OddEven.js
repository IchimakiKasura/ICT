function submit() {

    document.querySelector(".value").innerText = document.querySelector(".Input").value%2==0 ?
        "Number is Even" : "Number is Odd"

}
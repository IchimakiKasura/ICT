function submit() {
    let temp = "Grade: "

    if(document.querySelector(".Input").value%2==0)
        temp = "Number is Even"
    else
        temp = "Number is Odd"


    document.querySelector(".value").innerText = temp
}
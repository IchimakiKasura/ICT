function submit() {
    let temp = "Grade: "
    let grade = document.querySelector(".Input").value;

    if(grade > 100)
        temp += "Error"
    else if (grade >= 95)
        temp += "A"
    else if (grade >= 85)
        temp += "B"
    else if (grade >= 80)
        temp += "C"
    else if (grade >= 75)
        temp += "D"
    else temp += "F"

    document.querySelector(".value").innerText = temp
}
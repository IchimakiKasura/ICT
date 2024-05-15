function submit() {
    let grade = document.querySelector(".Input").value;

    // try debugging this copy&pasters :>
    document.querySelector(".value").innerText = `Grade: ${
        grade > 100 ? "Error" :
        grade >= 95 ? "A" :
        grade >= 85 ? "B" :
        grade >= 80 ? "C" :
        grade >= 75 ? "D" : "E"
    }`
}
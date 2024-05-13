function submit() {
    let temp = "";
    let character = document.querySelector(".Input").value

    for(let i = 1; i <= 5; i++)
        temp += character.repeat(i)+"\n"

    document.querySelector(".value").innerText = temp
}
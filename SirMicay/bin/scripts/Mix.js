let arr = []

function submit(value) {

    switch(value)
    {
        case 'r':
            arr.push("RED")
            break;
        case 'g':
            arr.push("GREEN")
            break;
        case 'b':
            arr.push("BLUE")
            break;
        case 'c':
            arr = []
            break;
        case 'rem':
            arr.pop()
            break;
    }

    document.querySelector(".value").innerText = arr.join("+")
}
var val = document.getElementById("text");

function dis(x){
    if(val.innerHTML == "Error"){
        val.innerHTML = x
    }else{
        val.innerHTML += x;
    }
}

function e(){
    try {
        val.innerHTML = eval(val.innerHTML)
    } catch (error) {
        val.innerHTML = "Error"
    }
}

function rmv(){
    if(val.innerHTML == "Error"){
        val.innerHTML = ""
    }else{
        val.innerHTML = val.innerHTML.slice(0,val.innerHTML.length - 1)
    }
}

function clears(){
    val.innerHTML = ""
}
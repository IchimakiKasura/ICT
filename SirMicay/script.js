let css = document.querySelector("[css]")
let isdarkmode = false;

window.onload = ()=>{
    let nav = document.querySelector("nav").style;
    nav.top = 0;
    nav.opacity = 1;

    document.querySelectorAll(".mainbody").forEach(el=>{
        el.style.top = "100px"
        el.style.opacity = 1;
    })
}

document.querySelector("[home]").addEventListener("click", ()=>{
    document.querySelector("[m1]").style.display = "block";
    document.querySelector("[m2]").style.display = "none";
})
document.querySelector("[aboutme]").addEventListener("click", ()=>{
    document.querySelector("[m1]").style.display = "none";
    document.querySelector("[m2]").style.display = "block";
})

function darkmode(elem)
{
    if(isdarkmode = !isdarkmode)
    {
        elem.innerHTML = "Light Mode"
        css.setAttribute("href", "darkmode.css")
    }
    else
    {
        elem.innerHTML = "Dark Mode"
        css.setAttribute("href", "style.css")
    }
}
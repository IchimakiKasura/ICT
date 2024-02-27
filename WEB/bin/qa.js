// Stops Illegal enters that doesn't submit info cuz' It causes weird bugs
try {
    document.querySelector("#usr").textContent = GetURLParameter("usrForm").replace(/\+/g, " ");
    document.querySelector("#eml").textContent = GetURLParameter("emlForm");
} catch {
    console.log(window.location.href);
    window.location.href += "FORMS"
}

// gets the information from the url parameters from the form after being submitted
function GetURLParameter(parameters)
{
    var pageURL = window.location.search.substring(1)
    var urlVars = pageURL.split('&')
    for (var i = 0; i < urlVars.length; i++) 
    {
        var paramName = urlVars[i].split('=')
        if (paramName[0] == parameters) 
            return decodeURIComponent(paramName[1])
    }
}

// idk list of objects so I can iterate them lmao
let selections = [
    {
        late: null,
        element: document.querySelector(".selection_one"),
        elementShow: document.querySelector("#lateShowSelection_one")
    },
    {
        late: null,
        element: document.querySelector(".selection_two"),
        elementShow: document.querySelector("#lateShowSelection_two")
    },
    {
        late: null,
        element: document.querySelector(".selection_three"),
        elementShow: document.querySelector("#lateShowSelection_three")
    }
]

selections.forEach((types)=>{
    types.element.addEventListener("mouseenter", ()=>{
        types.late = setTimeout(()=>{
            types.elementShow.style.opacity = 1
        }, 300)
    })

    types.element.addEventListener("mouseleave", ()=>{
        setTimeout(()=>{
            types.elementShow.style.opacity = 0
        }, 100)
        clearTimeout(types.late)
        document.querySelectorAll(".videoPlay").forEach((el)=>el.pause())
    })
})
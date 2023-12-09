function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}

document.querySelector("#usr").textContent = GetURLParameter("usrForm").replace(/\+/g, " ");
document.querySelector("#eml").textContent = GetURLParameter("emlForm");

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
        }, 500)
    })

    types.element.addEventListener("mouseleave", ()=>{
        setTimeout(()=>{
            types.elementShow.style.opacity = 0
        }, 100)
        clearTimeout(types.late)
    })
})
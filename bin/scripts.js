let ICT_CLASS =
[
    "Alejaga, Rowin Carl Gravides",
    "Alejandro, Jade Maglaya",
    "Batta, Randy Milo",
    "Calaguas, Venedick Janeo",
    "Canonoy, Klyde Dogelio",
    "Cinco, Raven Zabala",
    "Cruz, Hayden  Kyle De Vries",
    "Dimaano, Kyle john  Ashley Endaya",
    "Dimayuga, Rafael Leonardo Barredo",
    "Escomen, Arped Jey titong",
    "Espinosa, Christian Subere",
    "Francisco, Lance Anthony Manglili",
    "Gabion, John Aldrine Reyes",
    "Herradura, Julian Richmond San Juan",
    "Javier, Mark Augustine Pagente",
    "Lumpay, Shane Harvey Duavis",
    "Magat, Aldrian Cedrick Olipano",
    "Mendoza, Gilsen Maribao",
    "Nabual, John Ray Dibdib",
    "Nora, Prince Eduard Rye Dacara",
    "Orbiso, Samoa Flores",
    "Pepito, Kean James Delapa",
    "Prado, Paul Jefferson Hubila",
    "Rivera, Phaul Richard Turno",
    "Santos, James Adrian",
    "San Pedro, Krishna Juachim Ibarra",
    "Soria, Carlos Juaqin  Santos",
    "Sorio, Marco Polenio",
    "Tangaro, Jeric Maximo",
    "Tano, Jomar Calagbang",
    "Tapan, Curt Jeremy Gimena",
    "Ventura, Richie Rich Erquiza",
    "Villanueva, Christian Jr. Peruelo",
    "Villanueva, John Ace Durante",
    "Villanueva, Kiel Anthony Cinense",
    
    "Caballero, Janna Lyn Condiman",
    "Castro, Princess Yexa Raiven Ramos",
    "Clarito, Reeze Monique Salinas",
    "Gabriz, Lira Casssandra C",
    "Gusto, Donnalyn Joy Reyllo",
    "Malacama, Jillian Marie Semfranca",
    "Sto. Domingo, Ma. Raine Conception",
    "Sto. Domingo, Ma. Sophia Lorrainne Almodal",
    "Ubilas, Veronica Wambangco"
]

document.addEventListener("DOMContentLoaded", RefreshList)
document.addEventListener("DOMContentLoaded", ()=>{
    if(か.isMobile)
    {
        か(".Previewer").gt.remove()
        か(".Selections").sty("marginRight", "0px")
        か(".Selections").sty("width", "74%")
        か(".MainBody").sty("margin", "10px")
    }
})


function StudentClick(element)
{
    if(か.isMobile)
    {
        window.open(element.getAttribute("data-link"))
    }
    else
    {
        let oldButton = document.querySelector("[clicked]")
        
        if(oldButton != null)
            oldButton.removeAttribute("clicked")

        element.setAttribute("clicked", "")

        let prev = document.querySelector("#previewer")

        if(prev.style.display == "none")
            prev.style.display = "block"

        if(element.getAttribute("data-link") != "")
            document.querySelector("#PreviewFrame").setAttribute("src", element.getAttribute("data-link"))
        else prev.style.display = "none"
    }
}

function OpenNewTab()
{
    window.open(document.querySelector("#PreviewFrame").getAttribute("src"))
}

function RefreshList(element = null)
{
    document.querySelector(".student_list").innerHTML = "";

    ICT_CLASS.forEach(el =>{
 
        let activityName = "Activity 1"

        か("#previewer").sty("display", "none")

        switch(element.value)
        {
            case "1st": activityName = "Activity 1"; break
            case "2nd": activityName = "Activity 2"; break
            case "3rd": activityName = "Activity 3"; break
        }

        if(el == "Caballero, Janna Lyn Condiman")
            document.querySelector(".student_list").innerHTML += "<hr/>"

        document.querySelector(".student_list").innerHTML += `<p studentButton data-link="Students/${el}/${activityName}/index.html" >${el}</p>`        
    })
    
    document.querySelectorAll("[studentButton]").forEach(el=>{
        el.addEventListener("click", ()=>StudentClick(el))
    })
}
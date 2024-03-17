const ICT_CLASS =
[
    "Alejaga, Rowin Carl Gravides",
    "Alejandro, Jade Maglaya",
    "Batta, Randy Milo",
    "Calaguas, Venedick Janeo",
    "Canonoy, Klyde Dogelio",
    "Cinco, Raven Zabala",
    "Cruz, Hayden Kyle De Vries",
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
    "Malacaman, Jillian Marie Semfranca",
    "Sto. Domingo, Ma. Raine Conception",
    "Sto. Domingo, Ma. Sophia Lorrainne Almodal",
    "Ubilas, Veronica Wambangco"
]

const REDIRECTOR = [
    {
        name: "Pepito, Kean James Delapa",
        redirect: "https://ichimakikasura.github.io/ICT/WEB/FORMS/"
    },
    {
        name: "Malacaman, Jillian Marie Semfranca",
        redirect: "https://meowmeowmoew.w3spaces.com/JILL-TVL-ICT-PETA.html?fbclid=IwAR0fcO2I1JCrXHl-ldlfoDXSlMhvbLFq6b1mgmrv3gNq_AUWP3q9l5OZIyw"
    },
    {
        name: "Prado, Paul Jefferson Hubila",
        redirect: "https://aokijip.github.io/Peta-comprog/"
    }
]

ICT_CLASS.forEach(names=>{
    document.querySelector("#studentList").innerHTML += `
    <div class="studentListing" ISPASSED="na" onclick="redirect('${names}')">
        ${names}
    </div>
`
})

function redirect(href)
{
    REDIRECTOR.forEach(name => {
        if(name.name == href)
            window.open(name.redirect);
        return
    })  

    window.open(`students/${href}`);
}
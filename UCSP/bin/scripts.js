let isNavbarOpen = false;
let lastUpdate = "Febuary 6, 2024 @ 6:13 PM"

か("[last-update]").gAll.forEach(el=>el.innerText = lastUpdate);

か(window).resize(()=>{
    if(window.innerWidth > 1000 && isNavbarOpen)
        openNav()
})

function openNav()
{
    isNavbarOpen = !isNavbarOpen
    か(".mobileSelectionButton").sty("pointerEvents", "none")

    if(isNavbarOpen)
    {
        setTimeout(()=>{
            か(".mobileNavigation").sty("top", "0px")
            か(".mobileSelectionButton").sty("pointerEvents", "auto")
        }, 10)
        か(".mobileNavigation").sty("display", "block")
    }
    else
    {
        setTimeout(()=>{
            か(".mobileNavigation").sty("display", "none")
            か(".mobileSelectionButton").sty("pointerEvents", "auto")
        }, 400)
        か(".mobileNavigation").sty("top", "-1000px")
    }
}

か(document).scroll(()=>{
    
    if(か("#navbar").gt == null) return

    let maxScoll = document.documentElement.scrollHeight - 1500;

    if(document.documentElement.scrollTop >= 102)
        か("#navbar").sty("marginTop", `${document.documentElement.scrollTop - 80}px`)
    else
        か("#navbar").sty("marginTop", "20px")
    
    if(document.documentElement.scrollTop >= maxScoll && か("#navbar").gt.style.marginTop != "20px")
        か("#navbar").sty("marginTop", `${maxScoll}px`)
})

// because fuck live server not removing ".html" or I can't seem to fucking remove it.
function onclickWeb(file)
{
    let fuck = ".html"

    if(!window.location.host.includes("127"))
        fuck = "";

    window.location.href=`./${file}${fuck}`
}
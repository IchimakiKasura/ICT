let isNavbarOpen = false;

function openNav()
{
    isNavbarOpen = !isNavbarOpen

    if(isNavbarOpen)
    {
        setTimeout(()=>{
            か(".mobileNavigation").sty("top", "0px")
        }, 10)
        か(".mobileNavigation").sty("display", "block")
    }
    else
    {
        setTimeout(()=>{
            か(".mobileNavigation").sty("display", "none")
        }, 400)
        か(".mobileNavigation").sty("top", "-1000px")
    }
}

setTimeout(()=>{
    か(document).scroll(()=>{
        let maxScoll = document.documentElement.scrollHeight - 1500;
    
        if(document.documentElement.scrollTop >= 102)
            か("#navbar").sty("marginTop", `${document.documentElement.scrollTop - 80}px`)
        else
            か("#navbar").sty("marginTop", "20px")
        
        if(document.documentElement.scrollTop >= maxScoll)
            か("#navbar").sty("marginTop", `${maxScoll}px`)
    })
}, 500)
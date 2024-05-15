function show()
{
    window.open(document.getElementById("source").src)
}

function changeArticle(view, element)
{
    let group = document.querySelector(".groups_view")
    let web = document.querySelector(".web_view")

    document.querySelectorAll("[selected]").forEach(el=>el.setAttribute("selected", 0))
    element.setAttribute("selected", 1)

    switch(view)
    {
        case "group":
            group.setAttribute("data-show", 1)
            web.setAttribute("data-show", 0)
        break;

        case "web":
            group.setAttribute("data-show", 0)
            web.setAttribute("data-show", 1)
        break;
    }

}

async function showWeb(link)
{
    changeArticle("web", document.querySelectorAll("[selected]")[1])

    await fetch(link).then((html)=>{
        // console.log(new DOMParser().parseFromString(html, "text/html"))
        document.querySelector("#source").src = link;
    })
}
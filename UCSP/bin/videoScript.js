let showVideo = false;

(()=> {
    let studentNoPeta = 0;
    
    for (let i = 0; i < ICT_CLASS.length; i++) {
        let name = ICT_CLASS[i].Name
        let title = ICT_CLASS[i].Title ? ICT_CLASS[i].Title : "No Title";
        let thumbnail = ICT_CLASS[i].Thumbnail ? ICT_CLASS[i].Thumbnail : "https://media.istockphoto.com/id/1454186575/vector/video-coming-soon-no-footage-video-no-video-available-default-video-thumbnail-available.jpg?s=612x612&w=0&k=20&c=GQnpSK2qy09Ps6g6zZQgHsMMzJx6lA7Ptf2ALgdMOVw="
        
        if(title=="No Title")
            studentNoPeta++;

        document.querySelector("[articles]").innerHTML +=
        `
        <article class="selectableSection" onclick="changevid(${i}, true)">
            <div class="selectableImage" current-watch="0">
                <img src="${thumbnail}">
                <div play-text>Now Playing</div>
                <div play-time>
                    <span>${ICT_CLASS[i].Duration}</span>
                </div>
            </div>
            <div class="sectionHeader">
                <h1>${title}</h1>
                <div class="preText">
                    uploaded by ${name}
                </div>
            </div>
        </article>
        `
    }

    console.log(studentNoPeta)

})()

function changevid(number, bool)
{
    if(bool)
    {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?watch=${number}`;
        window.history.pushState({ path: newurl }, '', newurl);
    }

    か(".selectableImage").gAll.forEach(el => el.setAttribute("current-watch", 0));
    か(".selectableImage").gAll[number].setAttribute("current-watch", 1)

    window.scrollTo({top: 0, behavior: "smooth"})

    let title = ICT_CLASS[number].Title ? ICT_CLASS[number].Title : "No Title";

    か("#player").gt.src = ICT_CLASS[number].VideoLink
    か("[video_title]").text(title)
    か("[video_title]").gt.setAttribute("title", title)

    か("[video_creator]").text(ICT_CLASS[number].Name)
    か("[video_passed]").text(ICT_CLASS[number].DatePass ? ICT_CLASS[number].DatePass : "January 00, 0000 @ 00:00 NA")

    if(!showVideo)
    {
        showVideo = true;

        resizeVideo()
        か(window).resize(resizeVideo)
        
        か("[video_placeholder]").sty("marginBottom", "15%")
        か("[video_placeholder]").sty("opacity", "1")
        setTimeout(()=>{
            か("[video_placeholder]").sty("transition", "all 0s")
        }, 1000)
    }
}


function resizeVideo()
{
    if (window.innerWidth < "1000")
        か("[video_placeholder]").sty("height", "40vw")
    else
        か("[video_placeholder]").sty("height", "32.25vw")
}
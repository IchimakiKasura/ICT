let showVideo = false;

(()=> {

    // ICT_CLASS.forEach(el => {
    //     if(el.Content != "No Information Given")
    //         StudentPassedPeta++;
    //     else StudentNoPeta++;
    // })
    
    // document.querySelectorAll("#numberOfStudents").forEach(el=>
    //     el.innerHTML = `Student who passed the Peta: ${StudentPassedPeta}`
    // )
    
    // document.querySelectorAll("#NoPeta").forEach(el=>
    //     el.innerHTML = `Students with no Peta: ${StudentNoPeta}`
    // )

    let studentNoPeta = 0;
    
    for (let i = 0; i < ICT_CLASS.length; i++) {
        let name = ICT_CLASS[i].Name
        let title = ICT_CLASS[i].Title ? ICT_CLASS[i].Title : "No Title";
        let thumbnail = ICT_CLASS[i].Thumbnail ? ICT_CLASS[i].Thumbnail : "https://media.istockphoto.com/id/1454186575/vector/video-coming-soon-no-footage-video-no-video-available-default-video-thumbnail-available.jpg?s=612x612&w=0&k=20&c=GQnpSK2qy09Ps6g6zZQgHsMMzJx6lA7Ptf2ALgdMOVw="
        
        if(title=="No Title")
            studentNoPeta++;

        document.querySelector("[articles]").innerHTML +=
        `
        <article class="selectableSection" onclick="changevid(${i})">
            <div class="selectableImage" current-watch="0">
                <img src="${thumbnail}">
                <div>Now Playing</div>
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

function changevid(number)
{
    か(".selectableImage").gAll.forEach(el => el.setAttribute("current-watch", 0));
    か(".selectableImage").gAll[number].setAttribute("current-watch", 1)

    window.scrollTo({top: 0, behavior: "smooth"})

    let title = ICT_CLASS[number].Title ? ICT_CLASS[number].Title : "No Title";

    か("#player").gt.src = ICT_CLASS[number].VideoLink
    か("[video_title]").text(title)
    か("[video_creator]").text(ICT_CLASS[number].Name)
    か("[video_passed]").text(ICT_CLASS[number].DatePass ? ICT_CLASS[number].DatePass : "January 00, 0000 @ 00:00 NA")

    か("[video_title]").gt.setAttribute("title", title)

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
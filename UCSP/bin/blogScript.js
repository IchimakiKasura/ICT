let showLatePasses = false;
let oldButtonStyleTemplate = null;

(()=> {
    let StudentPassedPeta = 0;
    let StudentNoPeta = 0;
    
    ICT_CLASS.forEach(el => {
        if(el.Content != "No Information Given")
            StudentPassedPeta++;
        else StudentNoPeta++;
    })
    
    document.querySelectorAll("#numberOfStudents").forEach(el=>
        el.innerHTML = `Student who passed the Peta: ${StudentPassedPeta}`
    )
    
    document.querySelectorAll("#NoPeta").forEach(el=>
        el.innerHTML = `Students with no Peta: ${StudentNoPeta}`
    )
    
    for (let i = 0; i < ICT_CLASS.length; i++) {
        let name = ICT_CLASS[i].Name
        let content = ICT_CLASS[i].Content
        let lateStudent = ""
        let img = "https://upload.wikimedia.org/wikipedia/commons/3/3c/No_Essay.svg"
    
        if(ICT_CLASS[i].image != "")    
            img = ICT_CLASS[i].image
        else
            // added after 8:00pm on October 16, 2023
            lateStudent = "NoPeta"
        
        
        document.querySelector(".selection").innerHTML +=
        `
        <article ${lateStudent} id="studentList" class="selectableSection" onclick="openStudent('${name}')">
            <img src="${img}">
            <div class="sectionHeader">
                <h1>${name}</h1>
                <div class="preText">
                    ${content}
                </div>
            </div>                
        </article>
        `
    }

})()

function checkStudents(elem) {

    document.querySelectorAll("#studentList").forEach(el => {
        let selectedStudent = el.children[1].children[0].textContent.toLowerCase();

        if(selectedStudent.includes(elem.value.toLowerCase()))
            el.removeAttribute("removeList")
        else
            el.setAttribute("removeList", "")
    })

}

function openStudent(name) {
   window.open(`students/${name}/blog`)
}

function showLate(elem) {

    oldButtonStyleTemplate = oldButtonStyleTemplate==null ? elem.style : null
    
    if(!showLatePasses)
    {
        elem.style.backgroundColor = "green"
        
        document.querySelectorAll("#studentList").forEach(studentElement=>
            LATE_STUDENTS.forEach(el=>
                {
                    if(studentElement.children[1].children[0].textContent == el)
                        studentElement.setAttribute("ICTlateStudent", "")
                }
            )
        )
    }
    else
    {
        elem.style = oldButtonStyleTemplate
        document.querySelectorAll("#studentList").forEach(el=>el.removeAttribute("ICTlateStudent"))
    }

    showLatePasses = !showLatePasses;
}
// location.href="#Home"
// scrollTo(0,0)

let Other = [
    {
        title: "HTA Hymn",
        text: `Let us sing the glorious song
Of truth that brings eternal light
And wave proudly our banner high
Of purest blue and white.
<br/>
<br/>
With love as our inspiration
And God our guide by day and night
Our noble aim we will achieve
For truth will give us might.
<br/>
<br/>
Holy Trinity Academy
In you, wisdom we will always find
The truth with which you
Light the world
Will always light our mind.`
    },
    {
        title: "School Identity",
        text: `Holy Trinity Academy is a partner of Most Holy
Trinity Parish in the evangelizing mission of the
church in building a Christ-centered community
Guided by the Triune God with Mary as the
inspiration, the instituition becomes a dynamic
instrument of social transformation through
relevant, integral, quality education to form
academically competent, socially responsive
and service-oriented Christian achievers
imbued with love, unity and equality.`
    },
    {
        title: "Mission",
        text: ` We, The members of the HTA community commit ourselves: <br>
        1. To build a model diocesan school that offers student-and family-centered programs.<br>
        2. To offer science-oriented curriculum integrated with religion and reading as strategy.<br>
        3. To provide enrichment programs and interventions for the varied needs of students.<br>
        4. To sustain the alternative learning system for the marginalized member of the society through adult night highschool and other creative pastoral ministry programs.<br>
        5. To strengthen the collaborative partnership between and among the stakeholders of the institution.`
    },
    {
        title: "Vision",
        text: `A people called by the Father in Jesus Christ to
become a community of persons with fullness of
life witnessing the Kingdom of God by living the
Paschal Mystery in the power of the Holy Spirit
with Mary as companion.`
    }
]

let OtherTitle = document.querySelector("#otherTitle")
let OtherParagraph = document.querySelector("#otherParagraph")
let currentOtherPage = -1;
otherChange(true)

function ChangeSection(id, el)
{
    location.href = id;
    document.querySelector("title").innerHTML = `Holy Trinity Academy | ${el.innerHTML}`
}

function otherChange(bool, a)
{
    if(bool)
        currentOtherPage < Other.length-1 ? currentOtherPage++ : null
    else
        currentOtherPage > 0 ? currentOtherPage-- : null

    OtherTitle.innerHTML = Other[currentOtherPage].title
    OtherParagraph.innerHTML = Other[currentOtherPage].text

    console.log(currentOtherPage)
}

var ichimakiAge = 20
var ichimakiBirthMonth = "May"
var ichimakiName = "Ichimaki Kasura"
var ichimakiHobby = "Playing Guitar"
var ichimakiFavortieNumber = 46
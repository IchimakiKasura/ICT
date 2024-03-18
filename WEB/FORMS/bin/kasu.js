/*
*    _____________________________________________
*   |                                             |
*   |                    HI                       |
*   |_____________________________________________|
*
*   I only add useful Codes shortcuts for Me. 
*   it's my Own Library.
*   kasu.js 2.0
*   ©copyright 2020
*/
//console log popup
"use strict";
var popupKasu = true,
hasLZstring = false, //idk why did i add this
selfEx = /\b(\w*kasu\w*)\b/
//shortcuts and others
const c1 = localStorage
    ,c2 = sessionStorage 
    ,c3 = window
    ,c4 = atob
    ,c5 = btoa
    ,version = 2.0
    ,Author = 'Ichimaki Kasura'
    ,cn = console;
//console log
var か_err=(...m)=>{cn.error(...m)}
   ,か_log=(...m)=>{cn.log(...m)}
   ,か_wrn=(...m)=>{cn.warn(...m)}
   ,か_tab=(...m)=>{cn.table(...m)}
   ,か_clr=(...m)=>{cn.clear(...m)}
   ,か_cnt=(...m)=>{cn.count(...m)}
   ,か_deb=(...m)=>{cn.debug(...m)}
   //no longer in console just a definition
   ,consoleCssStyle
   ,popupVersionShow
   ,lsC = true
   ,ssC = true;

(function(){
    //only works if the script has a defer attribute
    let scpt = document.querySelectorAll("kascpt");
    for(let i = 0; i < scpt.length; i++){
        scpt[i].style.display = 'none';
        eval(scpt[i].innerText)
    }
    
    consoleCssStyle = 'Zm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO2ZvbnQtc2l6ZTogMTVweDtsZXR0ZXItc3BhY2luZzogMy4ycHg7d29yZC1zcGFjaW5nOiA2cHg7Y29sb3I6ICNDNEM0QzQ7Zm9udC13ZWlnaHQ6IDcwMDt0ZXh0LWRlY29yYXRpb246IG5vbmUgc29saWQgcmdiKDY4LCA2OCwgNjgpO2ZvbnQtc3R5bGU6IGl0YWxpYztmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7'
    popupVersionShow =  'JWNrYXN1LmpzICB8ICAgMi4wICAgIChPd25lciBjb3B5KQ'
    
    if(popupKasu) か_log(c4(popupVersionShow),c4(consoleCssStyle));

    //owner
    //JWNrYXN1LmpzICB8ICAgMi4wICAgIChPd25lciBjb3B5KQ
    //user
    //JWNrYXN1LmpzICB8ICAgMi4wICAgIChDbGllbnQgY29weSk
})()

const pfind = function(handle,i=0){
    let char='';
    handle = handle.toString();
    if(i==0) i=1;
    for(let int = 1; int <= i; int++){
        char += '.parentElement';
    }
    return eval(`${handle}${char}`)
}
var か=(Handler='')=>{
    return new ka$(Handler);
}
//I don't know why did i use class
class ka${
    constructor(Handler){
        if(!Handler) return this;
        if(typeof Handler === 'string'){
            let body = document.querySelector(Handler)
               ,bodyAll = document.querySelectorAll(Handler);
            const result = {
                gAll: bodyAll,
                gt: body,
                text: function(text){
                    if(typeof text == 'string'){
                        if(text != ''||null) return body.innerText = text;
                        return body.innerText = '';
                    }
                    return body.innerText;
                },
                html: function(text){
                    if(typeof text == 'string'){
                        if(text != ''||null) return body.innerHTML = text;
                        return body.innerHTML = '';
                    }
                    return body.innerHTML;
                },
                val: function(text){
                    if(typeof text == 'string'){
                        if(text != ''||null) return body.value = text;
                        return body.value = '';
                    }
                    return body.value;
                },
                rAtr: function(attributeName){
                    return body.removeAttribute(attributeName);
                },
                sty: function(css,value){
                    return eval(`body.style.${css} = '${value}'`)
                },
                click: function(event){
                    if(event) return body.addEventListener('click',event);
                    return body.click();
                },
                evt: function(type,func){
                    return body.addEventListener(type,func)
                },
                rmevt: function(event){
                    return body.removeEventListener(event);
                },
                stym: function(css,value){
                    for(let i = 0; i < css.length; i++){
                        eval(`body.style.${css[i]} = '${value[i]}'`)
                    }
                    return;
                },
                atr: function(attributeName,value){
                    return body.setAttribute(attributeName,value)
                },
                atrm: function(attributeName,value){
                    for(let i = 0; i < attributeName.length; i++){
                        eval(`body.setAttribute('${attributeName[i]}','${value[i]}')`)
                    }
                    return;
                }
            }
            return result;
        }
        if(Handler === c3||document){
            const result = {
                onload: function(func){
                    return Handler.addEventListener('load',func);
                },
                ready: function(func){
                    return Handler.addEventListener('readystatechange',func);
                },
                unload: function(func){
                    return Handler.addEventListener('unload',func);
                },
                beforeunload: function(func){
                    return Handler.addEventListener('beforeunload',func);
                },
                close: function(func){
                    return Handler.addEventListener('close',func);
                },
                contentLoad: function(func){
                    return Handler.addEventListener('DOMContentLoaded',func);
                },
                scroll: function(func){
                    return Handler.addEventListener('scroll',func);
                },
                width: function(select){
                    if(Handler == c3){
                        switch(select){
                            case 'outer':return Handler.outerWidth;
                            case 'inner':return Handler.innerWidth;
                        }
                    }
                },
                height: function(select){
                    if(Handler == c3){
                        switch(select){
                            case 'outer':return Handler.outerHeight;
                            case 'inner':return Handler.innerHeight;
                        }
                    }
                },
                resize: function(func){
                    return Handler.addEventListener('resize',func);
                },
                evt: function(type,func){
                    return Handler.addEventListener(type,func);
                },
                rmevt: function(type){
                    return Handler.removeEventListener(type);
                },
                scrollTop: function(value){
                    let dom = document.documentElement;
                    if(value){
                        if(value != ''||null) return dom.scrollTop = value;
                        return dom.scrollTop = 0;
                    }
                    return dom.scrollTop;
                }
            }
            return result;
        }
    }
}
//modules
か.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
か.date = function(bool=false){
    //True = customize your own date
    //False = auto

    let date = new Date()
       ,hour = date.getHours()
       ,minute = date.getMinutes()
       ,week_Int = date.getDay()
       ,month_Int = date.getMonth() + 1
       ,day = date.getDate()
       ,year = date.getYear() + 1900
       ,postMeridem_anteMeridiem = hour >= 12 ? 'pm' : 'am'
       ,week
       ,month

    switch(week_Int){
        default: //i don't know lol
            break;
        case 1: week = "Mon";
            break;
        case 2: week = "Tue";
            break;
        case 3: week = "Wed";
            break;
        case 4: week = "Thu";
            break;
        case 5: week = "Fri";
            break;
        case 6: week = "Sat";
            break;
        case 0: week = "Sun";
            break;
    }
    switch(month_Int){
        default: //I don't know either.
            break;
        case 1:month="Jan";
            break;
        case 2:month="Feb";
            break;
        case 3:month="Mar";
            break;
        case 4:month="Apr";
            break;
        case 5:month="May";
            break;
        case 6:month="Jun";
            break;
        case 7:month="Jul";
            break;
        case 8:month="Aug";
            break;
        case 9:month="Sept";
            break;      
        case 10:month="Oct";
            break;
        case 11:month="Nov";
            break;
        case 12:month="Dec";
            break;
    }

    hour = hour % 12;
    hour = hour ? hour : 12;
    minute = minute < 10 ? '0'+minute : minute;

    const manual = {
        week: week,
        month: month,
        day: day,
        year: year,
        hour: hour,
        minute: minute,
        meridiem: postMeridem_anteMeridiem,
    }

    return bool ? manual : `date now is ${week} | ${month} ${day}, ${year} at ${hour}:${minute} ${postMeridem_anteMeridiem}`;
}
か.uid = function(value=0,bool=false){
    let id,signature;
    id='';
    if(!bool){
        signature = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=!?@%`;
    } else {
        signature = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
    }
    let length = signature.length;
    if(typeof value == 'number'){
        if(!value){
            value = 40;
        }
        for(let i = 0; i<value; i++){
            id += signature.charAt(Math.floor(Math.random()*length));
        }
        return id;
    } else {
        value = value.toLowerCase();
        switch(value){
            case 'manual':
                return か.uid(30);
            case 'strong':
                return か.uid(40);
        }
    }
}
か.random = function(minimum=0,maximum=0){
    return !minimum & !maximum ? か_err('No numbers Applied') : !maximum ? か_err('No Maximum applied') : (Math.floor(Math.random()*maximum) + minumum);
}
//uh not actually mine but it's helpful for me 
か.mswipe = function(element=document,callback=''){
    let touchsurface = element
        ,swipedir
        ,startX
        ,startY
        ,distX
        ,distY
        ,threshold = 150 //required min distance traveled to be considered swipe
        ,restraint = 100 // maximum distance allowed at the same time in perpendicular direction
        ,allowedTime = 300 // maximum time allowed to travel that distance
        ,elapsedTime
        ,startTime
        ,handleswipe = callback || function(swipedir){}

        touchsurface.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0]
            swipedir = 'none'
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
        }, false)
      
        touchsurface.addEventListener('touchend', function(e){
            var touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            if (elapsedTime <= allowedTime){ // first condition for awipe met
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                    swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
                }
                else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                    swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
                }
            }
            handleswipe(swipedir)
        }, false)
}
//uhh this is not supposed to be here
か.rncode = function(){
    //shh this is not a easter egg.
    let count = Math.floor(Math.random() * 329900) + 1;
    return `https://nhentai.net/g/${count}`;
}
か.data = function(call){
    call = `[data-${call}]`;
    return document.querySelectorAll(call);
}
か.clearStorage = function(type=''){
    switch(type){
        default:
            return か_wrn('No changes were made!');
        case 'local':
            return !lsC ? c1.clear() : か_wrn('No changes were made!');
        case 'session':
            return !ssC ? c2.clear() : か_wrn('No changes were made!');
    }
}
か.removeStorage = function(type=''){
    switch(type){
        case 'local':
            return c1.removeItem(type);
        case 'session':
            return c2.removeItem(type);
    }
}
か.addStorage = function(type='',name='',value=''){
    switch(type){
        case 'local':
            lsc=true;
            return c1.setItem(name,value);
        case 'session':
            ssc=true;
            return c2.setItem(name,value);
    }
}
か.storage = function(options={}){
    let type = options.Type;
    let func = options.Func;
    let name = options.Name;
    let value = options.Value;
    type = type.toLowerCase();
    func = func.toLowerCase();

    if(type && func && name && value){
        if(type = 'add'){
            switch(func){
                case 'local':
                    return c1.setItem(name,value);
                case 'session':
                    return c2.setItem(name,value);
            }
        }
    }

    if(type == 'add' && func && name && value){
        switch(func){
            case 'local':
                return c1.setItem(name,value);
            case 'session':
                return c2.setItem(name,value);
        }
    } else if (type == 'remove' && func && name){
        switch(func){
            case 'local':
                return c1.removeItem(name);
            case 'session':
                return c2.removeItem(name);
        }
    } else {か_err('blank inputs!');}
}
か.ajax = function(options={}){
    //notice the 'beforesend' then 'beforeSend' and others, yes I uppercase
    //them incase the user is dumb to capitalize it. no offense
    let url  = options.url
       ,type = options.type
       ,async = options.async
       ,data = options.data
       ,datatype = options.datatype || options.dataType
       ,encodetext = options.encodedtext || options.encodedText
       ,unload = options.unload
       ,beforesend = options.beforesend || options.beforeSend
       ,response = options.response || options.success
       ,progressbar = options.progressbar || options.progressBar
       ,failed = options.failed
       ,complete = options.complete
       ,contentencoding = options.contentencoding || options.contentEncoding
       ,cache = options.cache;
    
    type = type.toUpperCase();
    let length = '01234567890'
    let int = 0;        
    let x = new XMLHttpRequest();
    c3.onbeforeunload = function(){
        if(unload){
            return '';
        }
    }

    if(!async){
        async = true;
    }

    if(url && type){
        if(datatype) x.responseText = datatype;

        x.onreadystatechange = function(){
            let stat = this.status;
            let rt = this.responseText;
            if(this.readyState == 4 && stat == 200){
                if(response) return response(rt);
            }
            if(stat > 400){
                if(failed) return failed(rt);
            }
        }
        x.upload.onprogress = function(event){
            let progress = event.loaded / event.total * 100;
            if(progressbar) return progressbar(progress);               
        }
        x.onloadend = function(){
            unload = false;
            if(complete) return complete(this.responseText);
        }
        x.onloadstart = function(){
            if(beforesend) beforesend();
        }

        if(type == 'GET' && data){
            url = `${url}?${
                Object.keys(data).map(function(key){
                    return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                }).join("&")
            }`
        }

        x.open(type,url,async)
        x.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        function sendProperties(){
            if(encodetext){
                if(!hasLZstring){
                    while(int < length.length){
                        encodetext = c5(encodetext);
                        int++;
                    }
                } else {
                    // putting eval to avoid 'missing' error
                    encodedText = eval('LZstring.compress(encodetext)');
                }
                encodetext = `&enc=${encodetext}`;
            }
            if(contentencoding) x.setRequestHeader("Content-Encoding". contentEncoding.toLowerCase());
            //idk i just copy pasted it cuz' i don't know how to disable caching ye
            if(!cache){
                x.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
                x.setRequestHeader('cache-control', 'max-age=0');
                x.setRequestHeader('expires', '0');
                x.setRequestHeader('expires', 'Tue, 01 Jan 1980 1:00:00 GMT');
                x.setRequestHeader('pragma', 'no-cache');
            }
            if(type=='POST'){
                data = new URLSearchParams(Object.keys(data).map(key=>[key,data[key]]));
                return !encodetext ? data : data+encodetext;
            }
            return !encodetext ? null : encodetext;
        }

        x.send(sendProperties())
    } else {throw 'No URL or TYPE entered!'}
       
}
//added 'help' like what the fuck
c3.__defineGetter__('help',()=>{cn.log(
    // `'help' is prohibited to the "Client Copy"`
    `

    %cか%c(document|window|'.css'|'#id'|'html'|)
        %cmodules:

        .gAll                    Gets all the Element that has the same name.
        .gt                      Gets the Element.
        .text()                  Gets the Element Text | Can change the Element text.
        .html()                  Gets the Element html | Can change the Element html.
        .atr()                   Adds a Single Attribute to the Element. 
        .rAtr()                  Removes a Single Attribute to the Element.
        .val()                   Gets the Elements Value | Can change the Element Value.
        .sty()                   Add or Change the style of the Element.
        .click()                 It's a On Click function
        .evt()                   Adds a Event Listener to the Object.
        .rmevt()                 Remove a Event Listener to the Object.
        .stym([],[])             Add Multiple Style to the Element.
        .atrm([],[])             Add Multiple Attribute to the Element
        .onload()                Run a script on start.
        .ready()                 Run a script when everything is ready.
        .unload()                Run a script on before unloading.
        .beforeunload()          Same as the 'unload' but with popup warning
        .close()                 Run a script on Close.
        .contentLoad()           Run a script when all are Loaded.
        .scroll(function)        Run a script every scroll.
        .width('inner'|'outer')  Returns the width of the screen.
        .height('inner'|'outer') Returns the height of the screen.
        .resize()                Run a script whenever the screen resizes.

    %clist of Modules ( か.module ):
    
    %cか.%cajax()
      %cSimilar to jQuery's "$.ajax()" but I've added some few that
      I thought for me was kinda a helpful functions.
      [NOTE: Do not expect all jQuery ajax functions are here]
    

    %cか.%cisMobile
      %cReturns a True or False if the users browser is using Mobile or
      Desktop.


    %cか.%cdate( true|false )
      %cReturns a current Date.
      True = allows to get the date manually by using its modules.
       か.date(true).week   = returns the week (mon,tue,wed...)
       か.date(true).day    = returns the day
       か.date(true).year   = returns the year
       か.date(true).hr12   = returns whether its "AM" or "PM"
       か.date(true).month  = returns the month (Jan,Feb,Mar...)
       か.date(true).minute = returns the minute
       か.date(true).hour   = returns the hour   
    [24 hour time format is not supported yet]
      False = gives automatic date.
       "date now is 'week' | 'months' 'day', 'year' at 'hour':'minute' 'AM|PM'"
    

    %cか.%cuid()
      %cGenerates a random Unique ID.
       か.uid(1-99999) any number can be applied.
       か.uid('manual') gives a length of 30.
       か.uid('strong') give a length of 40.


    %cか.%crandom()
      %cGenerates a random number.
       Similar to the "Math.random" but much shorter.


    %cか.%cmswipe()
      %cThis module is for Mobile purposes.
       It detects the swipes in the Mobile screen.
       swipedir = up|down|left|right.
    `,
    'color: red','color: yellow','color: white','color: orange','color: red',
    'color: yellow','color: white','color: red','color: yellow','color: white',
    'color: red','color: yellow','color: white','color: red','color: yellow',
    'color: white','color: red','color: yellow','color: white','color: red',
    'color: yellow','color: white'
    )
})
//
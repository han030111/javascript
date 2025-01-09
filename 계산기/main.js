let num1=document.querySelector(".num1")
let num2=document.querySelector(".num2")
let num3=document.querySelector(".num3")
let num4=document.querySelector(".num4")
let num5=document.querySelector(".num5")
let num6=document.querySelector(".num6")
let num7=document.querySelector(".num7")
let num8=document.querySelector(".num8")
let num9=document.querySelector(".num9")
let num0=document.querySelector(".num0")
let pl=document.querySelector(".pl")
let mi=document.querySelector(".mi")
let mu=document.querySelector(".mu")
let eq=document.querySelector(".eq")
let not=document.querySelector(".not")
let sub=document.querySelector(".sub")
let form=document.querySelector("form")
let result=document.querySelector(".result")
let re=document.querySelector(".reset")
let ba=document.querySelector(".back")
form.addEventListener("submit",e=>{
    e.preventDefault()
})
num1.addEventListener("click",e=>{
    result.textContent+="1"
})
num2.addEventListener("click",e=>{
    result.textContent+="2"
})
num3.addEventListener("click",e=>{
    result.textContent+="3"
})
num4.addEventListener("click",e=>{
    result.textContent+="4"
})
num5.addEventListener("click",e=>{
    result.textContent+="5"
})
num6.addEventListener("click",e=>{
    result.textContent+="6"
})
num7.addEventListener("click",e=>{
    result.textContent+="7"
})
num8.addEventListener("click",e=>{
    result.textContent+="8"
})
num9.addEventListener("click",e=>{
    result.textContent+="9"
})
num0.addEventListener("click",e=>{
    result.textContent+="0"
})
eq.addEventListener("click",e=>{
    result.textContent=eval(result.textContent)
})
pl.addEventListener("click",e=>{
    result.textContent+="+"
})
mi.addEventListener("click",e=>{
    result.textContent+="-"
})
sub.addEventListener("click",e=>{
    result.textContent+="/"
})
not.addEventListener("click",e=>{
    result.textContent+="."
})
mu.addEventListener("click",e=>{
    result.textContent+="*"
})
re.addEventListener("click",e=>{
    result.textContent=""})

ba.addEventListener("click",e=>{
    result.textContent=result.textContent.slice(0,result.textContent.length-1)
    })
document.addEventListener("keydown",event=>{
    let key=event.key
    if (key=="1"){
        result.textContent+="1"
    }
    else if (key=="2"){
        result.textContent+="2"
    }
    else if (key=="3"){
        result.textContent+="3"

    }
    else if (key=="4"){
        result.textContent+="4"
    }
    else if (key=="5"){
        result.textContent+="2"
    }
    else if (key=="6"){
        result.textContent+="6"
    }
    else if (key=="7"){
        result.textContent+="7"
    }
    else if (key=="8"){8
        result.textContent+=""
    }
    else if (key=="9"){
        result.textContent+="9"
    }
    else if (key=="="){
        result.textContent = result.textContent.slice(0, result.textContent.length-1)

    }
    else if (key=="-"){
        result.textContent+="-"
    }
    else if (key=="+"){
        result.textContent+="+"
    }
    else if (key=="/"){
        result.textContent+="/"
    }
    else if (key=="*"){
        result.textContent+="*"
    }
    else if (key=="Backspace"){
        result.textContent = result.textContent.slice(0, result.textContent.length-1)
    }

})


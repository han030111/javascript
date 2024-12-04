let form=document.querySelector("form")
let random=document.querySelector(".random")
let chose= document.querySelector(".chose")
let machine= document.querySelector(".machine")
let you= document.querySelector(".you")
let va=document.querySelector(".value")
form.addEventListener("submit",(abc)=>{
    abc.preventDefault()
    let me = +abc.target[1].value
    let input=+abc.target[0].value
    let randomn=Math.random()
    let value=Math.round(input*randomn)
    you.textContent="you chose:"
    machine.textContent="the machine chose:"
    random.textContent=value
    chose.textContent=me
    if (me==value){
        va.textContent="you won!"
    }
    else{
        va.textContent="you lost!"
    }
})
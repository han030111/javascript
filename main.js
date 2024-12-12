let div=document.querySelector("a")
let random=document.querySelector(".random")
let you = document.querySelector(".you")
div.addEventListener("mouseenter",(abc)=>{
    abc.preventDefault()
    let input=10
    let randomn=Math.random()
    let value=Math.round(input*randomn)
    random.textContent=value
    if (value==10){
     you.textContent="you win!"}
})
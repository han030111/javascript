let form=document.querySelector("form")
let cont=document.querySelector(".cont")
form.addEventListener("submit",(abc)=>{
    abc.preventDefault()
    function ran (){
        return Math.random()*255
    }
    cont.style.background = `linear-gradient(0.25turn, rgba(${ran()},${ran()},${ran()},1), rgba(${ran()},${ran()},${ran()},0))`;
console.log(Math.floor(ran()))


})

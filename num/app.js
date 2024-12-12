let form=document.querySelector("form")
let re=document.querySelector(".result")
form.addEventListener("submit",(eve)=>{
    eve.preventDefault()
    let a=eve.target[0].value
    let b=eve.target[1].value
    a= +a
    b= +b
    let val=eve.submitter.defaultValue
    if (val==="+"){re.textContent=a+b}
    if (val==="-"){re.textContent=a-b}
    if (val==="*"){re.textContent=a*b}
    if (val==="/"){re.textContent=a/b}

})
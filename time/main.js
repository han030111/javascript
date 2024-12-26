
let a=document.querySelector(".a")
let b=document.querySelector(".b")
let span=document.querySelector("span")
let c=document.querySelector(".c")
let d=document.querySelector(".d")
let cri = new Date("2024-12-25:00:00:00+0900");
let now=new Date()
console.log(cri)
let sec=(cri-now)/1000

function aa(){ 
sec--
Day=Math.floor(sec/86400)
hour=Math.floor(sec%86400/3600)
min=Math.floor(sec%86400%3600/60)
span.textContent=Day
a.textContent=hour
b.textContent=min
c.textContent=Math.floor(sec%60)
}
setInterval(aa,1000)
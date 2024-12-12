setInterval (aa,1000)
let cri=new Date("2024-12-24:00:00:00+0900")
let today=new Date ()
let sec= (cri-today)/1000
let span=document.querySelector("span")
let a=document.querySelector(".a")
let b=document.querySelector(".b")
let c=document.querySelector(".c")
function aa(){
  sec--
  day=Math.round(sec/86400)
  hour=Math.round(sec%86400/3600)
  min=Math.round(sec%86400%3600/60)
  span.textContent=day
  a.textContent=hour
  b.textContent=min
  c.textContent=Math.round(sec%60)
}
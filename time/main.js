const span = document.querySelector("span");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
let christMasEveTime = new Date("2024-12-24:00:00:00");
let today = new Date();
let second = new Date((christMasEveTime - today)/1000);

function increment() {
  second--;
  const day = Math.floor(second /86400 );
  const hour =Math.floor((second%86400/24))

  const min = Math.floor(second%86400%24/60)
  span.textContent = day
  a.textContent=hour
  b.textContent=min
  c.textContent=min/60


}

setInterval(increment, 1000);
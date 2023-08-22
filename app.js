const f = document.querySelector(`.fig`)

const form =document.querySelector(`form`)

let k = 0
let t = 0 
let y = 0
let u =0 
let i=0
let o =0
let w =0

form.addEventListener(`submit`, (w)=>{
   w.preventDefault()
   k=form.birinchi.value;
   t=form.ikkinchi.value;
   y=form.uchinchi.value;
   u=form.tortinchi.value;
   i=form.beshinchi.value;
   o=form.oltinchi.value;
   console.log(k,t,y,u,i,o)
   f.style = `clip-path: polygon(${k}% ${t}%, ${y}% ${u}%, ${i}% ${o}%)`
   
}) 


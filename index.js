const canvas = document.getElementById("myCanvas") 
const ctx = canvas.getContext("2d") 
const colorPicker = document.getElementById("colorPicker") 
const btn = document.getElementById("colorBtn") 
const img = new Image();
 img.src = "download.webp" 
 img.onload = function () { ctx.drawImage(img, 0, 0, canvas.width, canvas.height); }; console.log(colorPicker) 
 
 btn.addEventListener('click',()=>{
ctx.fillStyle = colorPicker.value
 ctx.globalAlpha = 0.35
ctx.fillRect(0,0,canvas.width,canvas.height)
 })
 
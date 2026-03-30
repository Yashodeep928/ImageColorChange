const bg = document.getElementById("my-bg")

bg.addEventListener("click",myFunction)


function myFunction(){
  var colorR  = Math.floor(Math.random() * 256);
  var colorG  = Math.floor(Math.random() * 256);
  var colorB  = Math.floor(Math.random() * 256);
  var color = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
  bg.style.backgroundColor = color;
}
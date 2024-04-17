var a = 0;
function zamanlama() {
  a++;
  document.getElementById("bird").style.marginLeft = a + "px";
  document.getElementById("bird").style.marginTop = a + "px";
  document.getElementById("bird").style.marginRight = a + "px";
}
var timer = setInterval(zamanlama, 10);

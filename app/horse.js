var a = 0;
function zamanlama() {
  a++;
  document.getElementById("horse").style.marginTop = a + "px";
  document.getElementById("horse").style.marginLeft = a + "px";
}
var timer = setInterval(zamanlama, 10);

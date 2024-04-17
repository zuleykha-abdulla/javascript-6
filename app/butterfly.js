var a = 0;
function zamanlama() {
  a++;
  document.getElementById("butterfly").style.marginLeft = a + "px";
}
var timer = setInterval(zamanlama, 10);

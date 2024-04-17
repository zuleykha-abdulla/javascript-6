function zamanlama() {
  var zaman = new Date();
  document.getElementById("saat").innerHTML =
    zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();
}
setInterval(zamanlama, 1000);

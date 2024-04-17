document.write(
  "İndi isə, 1-dən 5-ə qədər ədədlərin hasilini tapan bir proqram yazaq. "
);
document.write("<br>");
document.write("<br>");

var i = 1,
  hasil = 1;
while (i <= 5) {
  hasil = hasil * i;
  i++;
}
document.write(hasil);
document.write("<br>");
document.write("<br>");
//
document.write(
  "İndi isə, gəlin 1 ilə 100 arasında olan cüt ədədləri çap edək."
);
var i = 1;
while (i <= 40) {
  if (i % 2 == 0) {
    document.write(i + "<br>");
  }
  i++;
}

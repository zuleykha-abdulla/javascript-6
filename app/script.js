//1ci elemete aid

var x = 0;
setInterval(hereket, 10);
function hereket() {
  x++;
  document.getElementById("element").style.marginLeft = x + "px";
  document.getElementById("yazi").innerHTML = x;
}

//2ci element2 aid

function funksiya() {
  var x = 0;
  setInterval(hereket2, 10);
  function hereket2() {
    x++;
    document.getElementById("element2").style.marginLeft = x + "px";
    document.getElementById("yazi2").innerHTML = x;
  }
}

// qutuya aid

function f() {
  var a = document.getElementById("qutu");
  a.style.animation = "animasiya 1s forwards";
}

// box aid - left istigamete hereket tetbiq edilir
function s() {
  let b = document.getElementById("box");
  b.style.animation = "animasiya 1s forwards";
}

function b() {
  let b = document.getElementById("box");
  b.style.animation = "animasiya2 1s";
}

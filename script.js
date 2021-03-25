var box = document.getElementById("box");
var btn = document.getElementById("btn");
var x = document.getElementById("x");
function sbox(s) {
  if (s == true) {
    box.classList.add("show");
  } else {
    box.classList.remove("show");
  }
}
btn.onclick = function () {
  sbox(true);
}
x.onclick = function () {
  sbox(false);
}

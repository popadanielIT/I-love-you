const c = document.querySelector(".container");
const y = document.querySelector("#yes");
const n = document.querySelector("#no");
const t = document.querySelector(".title");

function change() {
  const { width: cWidth, height: cHeight } = c.getBoundingClientRect(),
    { width: nWidth, height: nHeight } = n.getBoundingClientRect(),
    i = Math.floor(Math.random() * (cWidth - nWidth)) + 1,
    j = Math.floor(Math.random() * (cHeight - nHeight)) + 1;

  n.style.left = i + "px";
  n.style.top = j + "px";
}

function text(){
    t.innerHTML = "Me too!😍 <br> I love you so much <3";
}
y.addEventListener("click", text);
n.addEventListener("click", change);
n.addEventListener("mouseover", change);

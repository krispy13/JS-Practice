var s1 = document.getElementById("style1");
var s2 = document.getElementById("style2");
var s3 = document.getElementById("style3");
var s4 = document.getElementById("style4");
var s5 = document.getElementById("style5");

s1.addEventListener("click", () => {
  var box = document.getElementById("box");
  box.style.color = "white";
  box.style.fontSize = "40px";
  box.style.backgroundColor = "black";
});

s2.addEventListener("click", () => {
  var box = document.getElementById("box");
  box.style.color = "#00bcc0";
  box.style.fontSize = "20px";
  box.style.fontWeight = "600";
  box.style.backgroundColor = "#aaf2ef";
});

s3.addEventListener("click", () => {
  var box = document.getElementById("box");
  box.style.color = "#FFA500";
  box.style.fontSize = "30px";
  box.style.backgroundColor = "#00008B";
});

s4.addEventListener("click", () => {
  var box = document.getElementById("box");
  box.style.color = "#ff8fab";
  box.style.fontSize = "40px";
  box.style.backgroundColor = "#ffe5ec";
});

s5.addEventListener("click", () => {
  var box = document.getElementById("box");
  box.style.color = "black";
  box.style.fontSize = "20px";
  box.style.backgroundColor = "white";
});

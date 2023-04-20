function randomise() {
  var length = document.getElementById("length").value;
  var n = document.getElementById("sequences").value;
  var dict = document.getElementById("characters").value;
  let text = "";
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < length; j++) {
      text += dict[Math.floor(Math.random() * dict.length)];
    }
    text += " ";
  }
  document.getElementById("text").innerHTML = text;
}

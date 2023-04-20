var b = document.getElementById("input");
var inp = 1;
add(inp);

b.addEventListener("change", () => {
  var li = document.getElementById("list");
  del(li);
  var inp = b.value;
  for (var i = 0; i < inp; i++) {
    add(i + 1);
  }
});

function add(inp) {
  var newNode = document.createElement("p");
  var newText = document.createTextNode("This is Para Number :" + inp);
  newNode.style.fontSize = "25px";
  newNode.appendChild(newText);
  console.log(newNode);
  document.getElementById("list").appendChild(newNode);
}

function del(li) {
  console.log("del");
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
}

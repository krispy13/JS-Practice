var b = document.getElementById("add");
b.addEventListener("click", add);

var a = document.getElementById("reset");
a.addEventListener("click", reset);

function add() {
  var inp = document.getElementById("input").value;
  var newNode = document.createElement("li");
  var newText = document.createTextNode(inp);
  newNode.appendChild(newText);
  console.log(newNode);
  document.getElementById("list").appendChild(newNode);
}

function reset() {
  var docElement;
  docElement = document.getElementById("list");
  while (docElement.hasChildNodes()) {
    docElement.firstChild.remove();
  }
}

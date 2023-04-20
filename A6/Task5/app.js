const info = document.getElementById("details");
function output() {
  const d1 = document.getElementById("element2");
  d1Style = d1.getAttribute("style");
  d1id = d1.id;
  info.innerHTML = `<h3>Element id: ${d1id} </h3>`;
  info.innerHTML = info.innerHTML + `<h3>Element Style: ${d1Style} </h3>`;
  info.innerHTML = info.innerHTML + `<h2>Children<h2>`;
  getChildren(d1);
  info.innerHTML = info.innerHTML + `<h2>Siblings<h2>`;
  const parent = d1.parentElement;
  getChildren(parent);
}

function getChildren(parent) {
  var first = parent.firstChild;
  while (first) {
    info.innerHTML = info.innerHTML + `<h3>${first}</h3>`;
    first = first.nextSibling;
  }
}

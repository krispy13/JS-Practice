function startBinarySearch() {
  console.log("Beginning Search");
  var resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = "";
  var input = document.getElementById("array").value.split(" ");
  input = input.map((ele, x) => {
    return parseInt(ele);
  });
  console.log(input);
  var x = parseInt(document.getElementById("key").value);

  if (recursiveFunction(input, x, 0, input.length - 1))
    document.getElementById("final").innerHTML = "Found it!";
  else document.getElementById("final").innerHTML = "Didn't Found it!";
}

let recursiveFunction = function (arr, x, start, end) {
  var resultDiv = document.getElementById("resultDiv");
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);
  let li = document.createElement("li");
  let resultText = "";
  for (let i = start; i < end; i++) {
    resultText += arr[i];
    if (i == mid) resultText += "*";
    resultText += " ";
  }
  console.log(resultText);
  li.innerHTML = resultText;
  resultDiv.appendChild(li);
  // Compare mid with given key x
  if (arr[mid] === x) return true;

  // If element at mid is greater than x,
  // search in the left half of mid

  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveFunction(arr, x, mid + 1, end);
};
document
  .getElementById("seeBinary")
  .addEventListener("click", startBinarySearch);

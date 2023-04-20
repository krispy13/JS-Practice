let array = [1, 1, 2, 2, 3, 3, 4, 4, 0];
var cardsOpened = 0;
var card_1, card_2;
var total_cards = 0;
document.getElementById("start").addEventListener("click", () => {
  shuffleArray(array);
  game();
});
document.getElementById("reset").addEventListener("click", () => {
  reset();
});
var block = document.getElementsByClassName("block");
var board = document.getElementById("board");
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  for (var i = 0; i < 9; i++) {
    block[i].innerHTML = array[i];
  }
}

function reset() {
  window.location.reload();
}

function showCard(bid) {
  b = document.getElementById(bid);
  b.style.color = "black";
  b.style.fontSize = "20px";
  cardsOpened += 1;
  if (cardsOpened == 1) {
    card_1 = bid;
  } else {
    card_2 = bid;
    setTimeout(function () {
      checkCards();
    }, 1000);
    board.style.backgroundColor = "white";
  }
}

function checkCards() {
  cardsOpened = 0;
  var v1 = document.getElementById(card_1);
  var v2 = document.getElementById(card_2);
  if (v1.innerHTML == v2.innerHTML && card_1 != card_2) {
    total_cards += 2;
    v1.style.backgroundColor = "aqua";
    v2.style.backgroundColor = "aqua";
    console.log(total_cards);
    if (total_cards == 8) {
      alert("Game Finish");
    }
    console.log("match");
  } else {
    v1.style.color = v1.style.backgroundColor;
    v2.style.color = v2.style.backgroundColor;
    console.log("diff");
  }
}
function game() {
  for (var i = 0; i < 9; i++) {
    block[i].addEventListener("click", function (e) {
      if (cardsOpened < 2) {
        showCard(e.target.id);
      }
    });
  }
}

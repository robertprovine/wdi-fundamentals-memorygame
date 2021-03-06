var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  }
];

var cardsInPlay = [];
var score = 0;

var scoreElement = document.getElementById('score');
scoreElement.innerHTML = 0;

var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    score++;
    scoreElement.innerHTML = score;
  } else {
    alert("Sorry, try again.");
  }
}

var flipCard = function () {
  var cardId = this.getAttribute("data-id");
  console.log("User flipped " + cards[cardId].rank);
  console.log("Suit: " + cards[cardId].suit);
  console.log("Card Image: " + cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute("src", cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
  console.log("cardInPlay: " + cardsInPlay);
}

var createBoard = function () {
  var cardElement;
  var gameBoard = document.getElementById("game-board");
  for (var i = 0; i < cards.length; i++) {
    cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png")
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  }
}

var reset = function () {
  var cardElements = document.getElementById("game-board").children;
  for (var i = 0; i < cards.length; i++) {
    cardElements[i].setAttribute("src", "images/back.png");
  }
  cardsInPlay = [];
}

var initializeButton = function () {
  document.getElementById("reset-button").addEventListener("click", reset);
}

initializeButton();
createBoard();

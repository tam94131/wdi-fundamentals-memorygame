console.log("Up and running baby!");

var cards = [ 
{rank: "queen",  suit: "hearts",   cardImage: "images/queen-of-hearts.png"},
{rank: "queen",  suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
{rank: "king",   suit: "hearts",   cardImage: "images/king-of-hearts.png"},
{rank: "king",   suit: "diamonds", cardImage: "images/king-of-diamonds.png"}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Try again -- loser!");
	}
};

function flipCard() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length===2) {
		checkForMatch();
	};
	console.log("User flipped " + cards[cardId].rank);
	console.log("Image is " + cards[cardId].cardImage);
	console.log("Suit is " + cards[cardId].suit);
};

function createBoard () {
	for (var i=0; i<cards.length; i++) {
		var newListItem = document.createElement('img');
		newListItem.setAttribute('src','images/back.png');
		newListItem.setAttribute('data-id', i);
		newListItem.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(newListItem);
	}
};

createBoard();

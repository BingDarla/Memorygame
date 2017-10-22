console.log ("Up and running!");
var cards = [{ 
	rank : "queen",
	suit : "hearts",
	cardImage : "images/queen-of-hearts.png"
}, {
	rank : "queen",
	suit : "diamonds",
	cardImage : "images/queen-of-diamonds.png"
}, {
	rank : "king",
	suit: "hearts",
	cardImage : "images/king-of-hearts.png"
}, {
	rank : "king",
	suit :"diamonds",
	cardImage : "images/king-of-diamonds.png"
}
];
var cardsInPlay=[];
var check = null;
var cardInit = function (){
	for (var i=0;i<cards.length;i++)
	{
		var x=document.getElementsByTagName('img');
		x[i].setAttribute ('src','images/back.png');
	}
}

var flipCard = function ( ){
	var cardId =this.getAttribute ('data-id');
    console.log ("User flipped " + cards[cardId].rank);
    cardsInPlay.push (cards[cardId]);
    console.log (cards[cardId].cardImage);
    console.log (cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length ===2){
    	cardsCheck ();
    	if (!check)
    	{

    		cardInit();
    	}
    	cardsInPlay=[];
    }


}



var cardsCheck = function(){
	if (cardsInPlay[0].rank===cardsInPlay[1].rank){
		alert ("You win the game !");
		check = 1;
	}
	else
		{
		 alert ("Sorry, try again please!");
		 check = 0;
		 

};
}

var createBoard = function ()
{
	for (var i=0;i<cards.length; i++)
	{
		var cardElement = document.createElement ('img');
		cardElement.setAttribute ('src','images/back.png');
		cardElement.setAttribute ('data-id', i );
		cardElement.addEventListener('click',flipCard );
		document.getElementById ('game-board').appendChild (cardElement);
	};
}

createBoard ();







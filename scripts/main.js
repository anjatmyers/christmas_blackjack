// window.addEventListener('DOMContentLoaded', function() {
//   // Execute after page load
// })


// locating dealer and player divs
var dealer = document.querySelector('#dealer-hand');
var player = document.querySelector('#player-hand');

// creating an image element and appending it to dealer/player
// var img = document.createElement('img');
// img.setAttribute('src', 'images/jack_of_clubs.png');


// locating deal/hit/stand buttons

  var deal = document.querySelector('#deal-button');
  var hit = document.querySelector('#hit-button');
  var stand = document.querySelector('#stand-button');

// adding event listeners to buttons

// deal.addEventListener('click', () => {
//   img.setAttribute('src', 'images/jack_of_spades.png');
//   dealer.appendChild(img);
  
// })

// create the deck
deckArray = []

function buildDeck(){

  for (var i=2; i < 15; i++){
    let cardArr = new Object();
    cardArr.value = i;
    cardArr.suit = 'hearts'
    cardArr.imageURL = `images/${i}_of_hearts.png`
    deckArray.push(cardArr);
  }

for (var i=2; i < 15; i++){
  let cardArr = new Object();
  cardArr.value = i;
  cardArr.suit = 'diamonds'
  cardArr.imageURL = `images/${i}_of_diamon.pngds`
  deckArray.push(cardArr);
}
for (var i=2; i < 15; i++){
  let cardArr = new Object();
  cardArr.value = i;
  cardArr.suit = 'spades'
  cardArr.imageURL = `images/${i}_of_spades.png`
  deckArray.push(cardArr);
}
for (var i=2; i < 15; i++){
  let cardArr = new Object();
  cardArr.value = i;
  cardArr.suit = 'clubs'
  cardArr.imageURL = `images/${i}_of_clubs.png`
  deckArray.push(cardArr);
}

}

buildDeck();

// console.log(deckArray);
// end of building deck function 


// get image from object function
function getCardImage(obj){
  return obj.imageURL;
}




// Deal button event listener: deals 4 cards - pops each card from deckArray and pushes to the dealer or player's hand. Calls to the render function to place images on table  

deal.addEventListener('click', () => {
  // dealer and player arrays 
  dealerHand = [];
  playerHand =[];

  // pop() card1 and push to dealers hand 
  let card1 = deckArray.pop();
  dealerHand.push(card1);

  // pop() card2 and push to players hand
  let card2 = deckArray.pop();
  playerHand.push(card2);


 // pop() card3 and push to dealers hand
  let card3 = deckArray.pop();
  dealerHand.push(card3);

 // pop() card4 and push to players hand
  let card4 = deckArray.pop();
  playerHand.push(card4);

// call to render function (puts card images on table)
render(dealerHand, playerHand);

// render function that displays dealer and player hand on the table 

function render(dealerHand, playerHand){

  dealerHand.forEach(function(obj){
    let cardImg1 = document.createElement('img');
    cardImg1.setAttribute('src', obj.imageURL);
    dealer.appendChild(cardImg1);
   })  

   playerHand.forEach(function(obj){
    let cardImg2 = document.createElement('img');
    cardImg2.setAttribute('src', obj.imageURL);
    player.appendChild(cardImg2);
   }) 

}

// orginal code that was later divided up into functions 
//   // pop() card4 and push to players hand
  // let card4 = deckArray.pop();
  // playerHand.push(card4);
// // create img and append to player at table
//   let cardImg4 = document.createElement('img');
//   cardImg4.setAttribute('src', card4.imageURL);
//   player.appendChild(cardImg4);

})



















// *
// 52 cards - an array of objects
// each card has a suit, value, image url, 
// 2d.png, AH, 4C (for each card)
// and array with 52 elements 
// create a loop to loop through and create deck of cards

// dealing 4 cards
// shuffle -logic provided for us
// pop() 4 objects off the end of the array 
// used popped objects to place the images on screen (DOM manipulation)
//  have dealerArray and playerArray
// cards will be pushed to the above arrays to keep track of what has been played and scores
// have to calculate the value of each hand

// hit me button (event listener)
    // -pop card from deck array 
    // -push this card to player hand

// stand (event listener)
//   process starts for the dealer
// check value of dealer
// as long as dealer is less than 17, then dealer gets another card

// When the dealer has served every player, the dealers face-down card is turned up. If the total is 17 or more, it must stand. If the total is 16 or under, they must take a card. The dealer must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring the total to 17 or more (but not over 21), the dealer must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.
// You may not have time but dealer should also hit on a “soft 17” which is when he has an Ace and a 6 -->
//  button dealer.addEventListener('click', () => {
  
// })
// switch statement looking  for e.target.id ??



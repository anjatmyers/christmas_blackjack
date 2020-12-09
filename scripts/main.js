

// locating dealer and player divs
var dealer = document.querySelector('#dealer-hand');
var player = document.querySelector('#player-hand');


// locating deal/hit/stand buttons

  var deal = document.querySelector('#deal-button');
  var hit = document.querySelector('#hit-button');
  var stand = document.querySelector('#stand-button');


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
  cardArr.imageURL = `images/${i}_of_diamonds.png`
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


// shuffle array provided by V
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}




// set inital dealer and player hand arrays 

dealerHand = [];
playerHand =[]; 

// Deal button event listener: deals 4 cards - pops each card from deckArray and pushes to the dealer or player's hand. Calls to the render function to place images on table 

deal.addEventListener('click', () => {
  // shuffle the deck
  shuffleArray(deckArray);
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


// orginal code that was later divided up into functions 
//   // pop() card4 and push to players hand
  // let card4 = deckArray.pop();
  // playerHand.push(card4);
// // create img and append to player at table
//   let cardImg4 = document.createElement('img');
//   cardImg4.setAttribute('src', card4.imageURL);
//   player.appendChild(cardImg4);

})

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


// Hit button event listener 
// deals card to player and appends new image to table
hit.addEventListener('click', () => {
  
  // pop() card and push to players hand
  let card = deckArray.pop();
  playerHand.push(card);

  
  let cardImg = document.createElement('img');
  cardImg.setAttribute('src', card.imageURL);
  player.appendChild(cardImg);


})

// Stand button event listener
// deals card to dealer and appends new image to table
stand.addEventListener('click', () => {
  // check dealers score (if < 17, deal another card) 
  // as long as dealer is less than 17, then dealer gets another card

  // pop() card and push to dealers hand
  let card = deckArray.pop();
  dealerHand.push(card);

  
  let cardImg = document.createElement('img');
  cardImg.setAttribute('src', card.imageURL);
  dealer.appendChild(cardImg);


})








// Blackjack rules
// When the dealer has served every player, the dealers face-down card is turned up. If the total is 17 or more, it must stand. If the total is 16 or under, they must take a card. The dealer must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring the total to 17 or more (but not over 21), the dealer must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.
// dealer should also hit on a “soft 17” which is when he has an Ace and a 6 
// switch statement looking  for e.target.id ??



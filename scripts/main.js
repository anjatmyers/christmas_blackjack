

// locating dealer and player divs
var dealer = document.querySelector('#dealer-hand');
var player = document.querySelector('#player-hand');


// locating deal/hit/stand buttons

  var deal = document.querySelector('#deal-button');
  var hit = document.querySelector('#hit-button');
  var stand = document.querySelector('#stand-button');

// locating message div
var dealerMessages = document.querySelector('#dealermessages');
var playerMessages = document.querySelector('#playermessages');
var placebet = document.querySelector('#placebet');
var currentbet = document.querySelector('#currentbet');

 // initializing player points 
var dealerPoints = 0
var playerPoints = 0

// initializing bet amount and starting money 
var deposit = document.querySelector('#deposit');
var cash = 500; 
deposit.textContent = `$${cash}`
var betAmount = 0;
var startingbet = 0;
currentbet.textContent = `Current Bet: $${startingbet}`

// locting bet buttons
var button25 = document.querySelector('#button25')
var button50 = document.querySelector('#button50')
var button100 = document.querySelector('#button100')
var buttonAllIn = document.querySelector('#buttonAllIn')

// set inital dealer and player hand arrays 
dealerHand = [];
playerHand =[]; 

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

// END of building deck function 





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





// Deal button event listener: deals 4 cards - pops each card from deckArray and pushes to the dealer or player's hand. Calls to the render function to place images on table 

deal.addEventListener('click', () => {
  // clear table of cards
  dealer.textContent = ""
  player.textContent = ""
  playerMessages.textContent = ""
  dealerMessages.textContent = ""
  // shuffle the deck
  shuffleArray(deckArray);
  // dealer and player arrays 
  dealerHand = [];
  playerHand =[];

  // check to see if the player has money to make a bet
  if (cash === 0){
    placebet.textContent = "You don't have any more money. Maybe Blackjack isn't your strong suit."
    // function for ending the game 
  dealer.textContent = ""
  player.textContent = ""
  playerMessages.textContent = ""
  dealerMessages.textContent = ""
  return 
  }


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
// render(dealerHand, playerHand);
renderDealer(dealerHand);
renderPlayer(playerHand);

})

// RENDER FUNCTIONS that displays dealer and player hand on the table 

function renderDealer(dealerHand){
  
  dealerHand.forEach(function(obj){
    let cardImg1 = document.createElement('img');
    cardImg1.setAttribute('src', obj.imageURL);
    cardImg1.setAttribute('class', 'm-1');
    dealer.appendChild(cardImg1);
   }) 

   calculateDealerPoints(dealerHand);
}

function renderPlayer(playerHand){
  
  playerHand.forEach(function(obj){
    let cardImg1 = document.createElement('img');
    cardImg1.setAttribute('src', obj.imageURL);
    cardImg1.setAttribute('class', 'm-1');
    player.appendChild(cardImg1);
   }) 

   calculatePlayerPoints(playerHand);
}



// HIT BUTTON event listener 
// deals card to player and appends new image to table
hit.addEventListener('click', () => {
  
  // pop() card and push to players hand
  let card = deckArray.pop();
  playerHand.push(card);

  
  let cardImg = document.createElement('img');
  cardImg.setAttribute('src', card.imageURL);
  cardImg.setAttribute('class', 'm-1');
  player.appendChild(cardImg);

  calculatePlayerPoints(playerHand);


})

// Stand button event listener calls the dealOrNoDeal to see how many cards to draw
stand.addEventListener('click', () => {
  dealOrNodeal(calculateDealerPoints(dealerHand));

})

// DEAL OR NO DEAL function: draws cards for dealer until conditions are met
function dealOrNodeal (points){
  // check dealers score
  let dealerpoints = calculateDealerPoints(dealerHand);

  // if score < 17, deal another card
  if (dealerpoints < 17){
    let card = deckArray.pop();
    dealerHand.push(card);
  
    let cardImg = document.createElement('img');
    cardImg.setAttribute('src', card.imageURL);
    cardImg.setAttribute('class', 'm-1');
    dealer.appendChild(cardImg);

    calculateDealerPoints(dealerHand);
    // call function again to check if score is now over 17
    dealOrNodeal(dealerpoints);
    }

  // calculateDealerPoints(dealerHand); delete ???

// then once score is over 17, keep going 
if (dealerpoints === 21){
dealerMessages.textContent = `Perfect ${dealerpoints} points for the dealer.`
determineWinner();
} else if(dealerpoints < 21 && dealerpoints >= 17){
  dealerMessages.textContent = `The dealer stands at ${dealerpoints} points.`
  determineWinner();
}
  }


// CALCULATE DEALER POINTS function:
function calculateDealerPoints(array){
  var dealerPoints = 0

valueArr = array.map(function(obj){
  return obj.value
})

for (var i=0; i< valueArr.length; i++){

  if (valueArr[i] > 11){
    dealerPoints += 10;
  } else if (valueArr[i] < 11){
    dealerPoints += valueArr[i];
  } else if (valueArr[i] === 11){
    // if an ace: value of 1 if dealerPoints are above 10
    if (dealerPoints > 10){
      dealerPoints += 1;
      // if dealerPoints are above or equal to 10, ace value is 11
    } else if (dealerPoints <= 10){
      dealerPoints += 11;
    }
  }

}

if (dealerPoints > 21){
  cash += betAmount;
  deposit.textContent = `$${cash}`
  dealerMessages.textContent = "Dealer Busts! You win! Please deal again."
} 
else if (dealerPoints <= 21){
    dealerMessages.textContent = `Dealer points: ${dealerPoints}`
}
    
  return dealerPoints;
  
} 



// CALCULATE PLAYER POINTS function:
function calculatePlayerPoints(array){
  playerPoints = 0

valueArr = array.map(function(obj){
  return obj.value
})

for (var i=0; i< valueArr.length; i++){

  if (valueArr[i] > 11){
    playerPoints += 10;
  } else if (valueArr[i] < 11){
    playerPoints += valueArr[i];
  } else if (valueArr[i] === 11){
    // ace has value of 1 if playerPoints are above 10
    if (playerPoints > 10){
      playerPoints += 1;
      // if playerPoints are above or equal to 10, ace value is 11
    } else if (playerPoints <= 10){
      playerPoints += 11;
    }
  }

}

if (playerPoints > 21){
  cash -= betAmount;
  deposit.textContent = `$${cash}`
  playerMessages.textContent = "You Bust! Please deal again."
} else if (playerPoints === 21){
  playerMessages.textContent = "Perfect 21! Excellent."
} else if (playerPoints < 21){
  playerMessages.textContent = `Player points: ${playerPoints}`
}

return playerPoints;

}



// DETERMINE WINNER function: 

function determineWinner(){

  let playerpoints = calculatePlayerPoints(playerHand);
  let dealerpoints = calculateDealerPoints(dealerHand);

  if (playerpoints === dealerpoints){
    // cash += betAmount;
    // deposit.textContent = `$${cash}`
    playerMessages.textContent = "It's a Draw! Please deal again."
  } else if(playerpoints > dealerpoints && playerpoints <= 21){
    cash += betAmount;
    deposit.textContent = `$${cash}`
    playerMessages.textContent = `Player points: ${playerpoints} - You won! Great job!`
  } else if(playerpoints < dealerpoints){
    cash -= betAmount;
    deposit.textContent = `$${cash}`
    playerMessages.textContent = `Player points: ${playerpoints} - Dealer wins. Please deal again.`
  }


}


function placeBet(){
  
  placebet.textContent = "Please place your bet."
  
}


button25.addEventListener('click', () => {
  placebet.textContent = ""
  if (cash === 0){
    placebet.textContent = "You don't have any more money. Maybe Blackjack isn't your strong suit."
  }
  currentbet.textContent = `Current Bet: $${25}`
   return betAmount = 25;

})
button50.addEventListener('click', () => {
  placebet.textContent = ""
  if (cash === 0){
    placebet.textContent = "You don't have any more money. Maybe Blackjack isn't your strong suit."
  }
  currentbet.textContent = `Current Bet: $${50}`
  return betAmount = 50;

})
button100.addEventListener('click', () => {
  placebet.textContent = ""
  if (cash === 0){
    placebet.textContent = "You don't have any more money. Maybe Blackjack isn't your strong suit."
  }
  currentbet.textContent = `Current Bet: $${100}`
  return betAmount = 100;

})
buttonAllIn.addEventListener('click', () => {
  placebet.textContent = ""
  if (cash === 0){
    placebet.textContent = "You don't have any more money. Maybe Blackjack isn't your strong suit."
  }
  currentbet.textContent = `Current Bet: $${cash}`
  return betAmount = cash;

})



















// switch statement looking for e.target.id ??



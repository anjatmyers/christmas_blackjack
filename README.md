# Christmas Blackjack Game
 
This project made use of the following techniques:
* Selecting DOM elements using JavaScript
* Adding event listeners to DOM elements
* Creating new DOM Elements
* Setting DOM element Attributes
* Using template strings
* Loops (and nested loops)
* Utilizing arrays to store player/dealer hands
* HTML and CSS


<img width="600" src="images/screenshot.jpg">

Game logic: 
* Rather than manually code a whole deck of cards, a function `buildDeck` was made to return an array with 52 card objects. There are 4 suits: diamonds, clubs, hearts and spades. For each suit there is a rank from 1 to 13.
* To deal the cards, a `render` function loops over the `dealerHand` and `playerHand` arrays and appends a new card image to the appropriate elements for each card in the hands.
* A `shuffle` function is used after a player hits the deal button but before the cards are dealt.
* As the game is played, a `calculatePoints` function takes in an array of card objects and returns the points for that hand. Which is followed by a message if a player busts or gets a perfect score of 21. 
* The last step is to reset the game by clearing the player and dealer hands and resetting the deck of cards.
* A betting structure was also added. They player starts out with a certain percentage of "Christmas Spirit" (where one might typically start out with money) and can choose an amount to bet before each hand



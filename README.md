# Blackjack

In this exercise, you will be creating a Blackjack game. If you are unfamiliar with the rules of blackjack, please watch [this video](https://www.youtube.com/watch?v=eyoh-Ku9TCI). Note that these instructions do not implement betting; only wins/losses.

You will make use of the following techniques:
* Selecting DOM elements using JavaScript
* Adding event listeners to DOM elements
* Creating new DOM Elements
* Setting DOM element Attributes
* Using template strings
* Loops (and nested loops)
* HTML and CSS

Follow the steps below to get started.

## Step 1: Familiarise yourself with the HTML and JS

This project comes with some HTML and some JavaScript already included. Familiarise yourself with the HTML that is already there to see what DOM elements the browser will create when the document is loaded by the browser.

## Step 2: Style the page
Style the page to make it look more like a card table. This exercise is less about styling, so do not spend more than ___45-60 minutes___ on styling at this time. You can always revisit the styling later. Here is an example:

<img width="600" alt="blackjack1" src="https://user-images.githubusercontent.com/1687902/93030784-af972e00-f5f3-11ea-8ba4-4a37a541111c.png">

If you would rather get straight into the interactivity, you can find an example stylesheet in the `extras` folder. Simply link to that stylesheet from the head and move on to the next step.

## Step 3: Cards on the table
To get an idea of what the cards will look like, we are going to "hard-code" them first, then you javascript to add the right card later. Start by adding the HTML for an `img` tag inside of the `#dealer-hand` or `#player-hand` element and have them link (set the src attribute) to card images in the images folder.

<img width="600" alt="blackjack2" src="https://user-images.githubusercontent.com/1687902/93030790-b625a580-f5f3-11ea-93f8-657a458df883.png">

## Step 4: Dealing the cards
Now that we know what we want the HTML to look like, we can remove the cards we created in step 3. This time we will generate them dynamically using JavaScript. When the "Deal" button is clicked, deal 4 times. Once to the player, once to the dealer, then the player and then to the dealer.

We will need to attach an event listener to the button, create a new image element and append it to the `#dealer-hand` and the `#player-hand` elements. At this point, you can just use the same card.

## Step 5: Hit me
When the "Hit" button is clicked, deal one more card to the player (use the same card image for now), and then another to the dealer.

> ____Hint:___ Is there any code here that is repeated? Is there a way to use write a function to deal from the card to whichever player we chose?_

## Step 6: Creating a deck
The next step is to create a deck of cards. We can make our "deck" an array of objects. Each one of the objects in the deck will represent a card. Each card will have a rank and a suit. (_N.B. the rank is NOT the same as points_)

King of Hearts:
```js
{ rank: 13, suit: 'hearts' }
```

4 of Spades:
```js
{ rank: 4, suit: 'spades' }
```

Ace of Diamonds:
```js
{ rank: 1, suit: 'diamonds' }
```

Rather than manually code a whole deck of cards, we can write a function to generate a deck of 52 cards. Create a function `buildDeck` returns a new array with 52 card objects. There are 4 suits: diamonds, clubs, hearts and spades. For each suit there is a rank from 1 to 13.

## Step 7: Deal the deck
Now that we have a deck of cards, we want to make use of it. We're going to need to create something to represent the player and dealer hands so go ahead and create two new arrays:
  * dealerHand
  * playerHand

These arrays of cards will later be used to calculate the total points for the hand.

Adjust the code so that when we click the "Deal" button, it will remove a card from the deck, then place that card into the `playerHand` array.

> ____Hint:___ Is there an array method allows us to remove and return an item from an array?_

Gameplay should still deal the same as before: 1 card each to player, dealer, player, dealer.

## Step 8: Image From Cards
As you will have noticed, we have a whole folder of images with the following naming structure:

`images/{rank}_of_{suit}.png`

For example:
* `5_of_hearts.png`
* `ace_of_spades.png`
* `jack_of_diamonds.png`

In order to put a card visually on the page, we need to insert an <img> tag, example:

```html
<img src="/page/images/5_of_hearts.png" alt="5 of hearts" />
```

Before, we were displaying images using the full, hard-coded URL for a specific card. Now we want to use the card objects to set the src attribute based on the card object.

Write a function `getCardImage` that will take a card object and return an image element containing the correct image URL for that card. As an example (this is not code you should use), the following code takes a single card and attaches the appropriate card image to the body of the page:

```js
const card = { rank: 13, suit: 'hearts' };
const newCardImage = getCardImage(card)
document.body.append(newCardImage);
```

## Step 9: Render Hands

Now that we have a way to create an image based on a card object, we need to display the player hand and the dealer hand on the page.

Write a function `render` that loops over the `dealerHand` and `playerHand` arrays and appends a new card image to the appropriate elements for each card in the hands.

## Step 10: Shuffle the deck
Write a function to shuffle the deck. Here are some strategies for shuffling the deck:

* For fixed number of times, randomly choose 2 cards within the deck and swap them.
* Create a new array, randomly choose one card after another from the original array and push it to the new array.
* Search on StackOverflow for a solution to "shuffle a javascript array"

Use the shuffle function to shuffle the deck when you hit the deal button but before you deal the cards.

## Step 11: Calculate points for a hand
Write a function `calculatePoints` that takes in an array of card objects and returns the points for that hand. Example:

```js
const playerHand = [ 
     { rank: 10, suit: 'diamonds' }, 
     { rank: 12, suit: 'spades'} 
];
const playerPoints = calculatePoints(playerHand);
console.log(playerPoints);
// 20
```

```js
const playerHand = [ 
     { rank: 10, suit: 'diamonds' }, 
     { rank: 1, suit: 'clubs'} 
];
const playerPoints = calculatePoints(playerHand);
console.log(playerPoints);
// 21
```

## Step 12: Display points
After dealing any card, display the current points for the dealer and the player. You may want to consider adding this code to your `render` function.

## Step 13: Busts
Check for busts after each card is dealt. A bust is when either the dealer or the player's hand go over 21 points. When that happens, they lose. If there is a bust, display a message on the page saying that they busted. There is a `div` with an `id` of `messages` already on the page that you can use to do this.

## Step 14: Player stands
When the "Stand" button is clicked, the player doesn't want any more cards. Deal cards to the dealer until he reaches 17 points or more.

## Step 15: Determine winner
When the dealer's turn is over, whoever has the most points wins. Determine the winner. Display a message to show who won. You might also want to disable the "Deal", "Hit", and "Stand" buttons at this point.

## Step 16: Restart game
The last step is to be able to reset the game. What is involved with this? Is there code we can reuse? Is there a way to reset the dealer and player hands? What about the buttons? Do they need to be re-enabled? The messages? 

## Bonus
If you complete all of the above functionality, you can choose one or more of these extra credit features to implement:

* Create a way to play the game with 3 decks of cards (156 cards) or six deck of cards (312 cards)
* Use an animation to reveal a card when it is drawn.
* Hide dealer's hole card, and reveal it before dealer's turn.
* Keep track of wins vs losses.
* Add betting structure instead of wins vs losses. The player with start out with a certain amount of money - say $500. There will be a minimum bet of $5. The player can choose an amount to bet before each hand.
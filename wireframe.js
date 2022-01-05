/*-------- //WireFrame:// --------/* 
HTML/CSS
//Title of the page "Let's Play War "
// an area that says whether the player won or lost the turn 
// using the same area to also display when the entire game is won
// an area displaying the two decks of cards the player and the computer will click from 
// two "decks" displayed for each player. One with the cards face down, and the other, with the card they click face up 
// will need to randomly generate the card they click for their turn for their turn 
//Also need to render the deck of cards 
//make each deck be a different color on the back, so you can tell each player apart (use gradients)
// use css Flex to render the cards 


/*-------- //Setting up files for the game :// --------/* 

//Create a JS file for the deck that is seperate from the main logic script file? I read about this but not sure how to do it 
// so you can use the cards for any game, not just this one 


/*-------- //Pseudo Code:// --------/* 

//Will need to render the card deck/create the cards 
//define constant and state variables in a global scope 
    //const suits = ["hearts", "spades","daimonds", "clubs"]
    //const cardValues =[all the card values ]
    //let playerOne =
    //let computer =
    //let score = 
    // create an array for the suits and the cardValues and combine them(use array.concat?)
//write  a function that shuffles the deck and turns over a card when the deck is clicked by player 
    //this function should also decrement the deck the player has 

//start game function: needs to include shuffling and splitting the deck into two piles of 26 cards 
// player1 clicks their deck to turn over a card 
// player 2 clicks their deck to turn over a card 
//write a function that checks which card is higher aka who won the round 
    //// write a function for when both players draw the same card, the round is null , it's a draw and they stay where they are 
        //Display text that says it's a draw 
//write a function for displaying  which player won for that round 
    //if playerOne's card is higher than computer, playerOne wins that round 
    //if playeOne's card is lower thancomputer, playerOne lost that round 
    //if computer card is higher than playerOne , computer wins that round 
    //if computer card is lower than playerOne, computer lost that round 
        //push to the top (.unshift) card of the player who lost to the flipped deck pile of the player who won the round
//write a function to declare who won the entire game when all the cards are flipped and determines which player has the most cards  
        //display text: Player _ Wins!!

 //write a function to restart the game/  
 //write functin to split the deck /reset the deck 

 
 //players can't flip cards twice on one turn 
 //
*/

//adding 

//player 1 =computer 
//player 2= person 

//play 1 = 


/// automatically 



//---startGame Function--//
// this function needs to include these functions: 
//resetTheDeck()
//createTheDeck()
//shuffleTheDeck()
//splitTheDeck()

//splitTheDeck() 
//needs to push the cards to the two player arrays when the Start button is clicked 

//Need another function that is attached to each playerdeck, that 
//flips over a card each turn. and also decrements the amount of cards in that deck
//need a function that pushes the top card in each players deck to an array that is flipped over cards 


//TONIGHT: 
//render the cards when they are clicked to turn over ... 
// make the stack of cards that has been flipped over append to the document. 






// need function that checks which card is higher each time players click on their deck 
    //this function should also display text :Player 1 Wins this round/ Player2 wins this round 

//for player 2 turn: maybe create another function to house all the other player 2 functinos
    //this would become the event listener . 
    //eventListner would have all the click events 

//Next Round button()  
    // flipDeckPlayer(player1cards, player1CardsFlipped)
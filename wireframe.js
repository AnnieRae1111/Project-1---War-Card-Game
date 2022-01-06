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

//define constant and state variables in a global scope 
    //const suits = ["hearts", "spades","daimonds", "clubs"]
    //const cardValues =[all the card values ]
    //let playerOne =
    //let computer =
    //let score = 
    // create an array for the suits and the cardValues and combine them. .flatMap()

    FUNCTIONS: 
//write a function to create the deck : createDeck
//write a function that shuffles the deck : shuffleTheDeck
//write a function that splits the deck : splitDeck
    //this function will split the deck into two arrays:  player1cards [] and player2cards[]
    //this function should also decrement the deck the player has 

//write a function for when the deck is clicked for player1 (computer) a card is flipped over and shown in the pile for player 1
//write a function for when the deck is clicked for player2 (computer) a card is flipped overshown in the pile for player 2
//this function will also decrement the player deck by 1 
    //flipDeckPlayer()

 //write a function that checks which card is higher aka who won the round 
    //// write a function for when both players draw the same card, the round is null , it's a draw and they stay where they are 
        //Display text that says it's a draw 
        
//write a function to that checks which card is higher 
    //if playerOne's card is higher than computer :
            //Display text : Player 1 Wins This Round 
            // .push() player2CardsFlipped into player1CardsFlipped array
    //if playeOne's card is lower than computer :
        //Display text: Player 2 Wins This Round
        // push() player1CardsFlipped into player2CardsFlipped array
    //if both players drew the same card It's WAR: Display text: DRAW :Player 1 goes again
        //envoke flipDeckPlayer(player1cards, player1CardsFlipped), 
        // then player 2 flips cards 
        //if player1 card is higher, player 1 takes all four cards (2 for each round that was just played)
        // push player2cardsflipped[0][1] to player1 cards. 
 

//write a function to start the game aka deal : deal()
    //this function needs to include : 
        createDeck()
        resetDeck()
        shuffTheDeck()
        splitDecks()
        flipDeckPlayer(player1cards, player1CardsFlipped) --- this iniates the computers/player 1's turn 

//each turn only allows one click 
//write a function for once player2


push to the bottom .push() the cards of the player who looses each round, to the array of pile for the other player 
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


    //add actual card images
//   deck.push({
//       suit: suits[i]
//       rank: ranks[x]
//       img: (ULR from API)


//       })

//NEXT:
//need to clear the value and suit from player 2 cards after playe1(computer goes for next turn)
//need to clear "Player 1 Wins" until the next round 

// count the deck numbers down each turn from 26 
//when players win cards add those to their deck number
//get winner text and player2card to work corretly 

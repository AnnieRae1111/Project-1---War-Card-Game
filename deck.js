//creat a class to hold the entire deck and it's functions. 
//OOP 


//player 1 = COMPUTER
//player 2 = PERSON

/*----- cached element references -----*/
/*----- event listeners -----*/


/*----- constants -----*/
const SUITS = ['♥','♦','♠', '♣'] 
const VALUES= ['A','2', '3', '4','5','6','7','8', '9','10','J','Q','K']

/*----- app's state (variables) -----*/
let masterDeck = []
const mixedDeck = []
// console.log(masterDeck)
let player1cards =[]   //array for each player's deck of 26
let player2cards=[]   //array for each player's deck of 26. Create a function that splits the deck into  //these two arrays 
let player1CardsFlipped =[] //array for cards being pushed / clicked on / that turn over 
let player2CardsFlipped=[]


/*----- functions -----*/

function resetDeck(){
    masterDeck.splice(0,masterDeck.length)
    mixedDeck.splice(0,mixedDeck.length)
    // console.log(masterDeck)
    // console.log(mixedDeck)
}    //reseting the decks. Include this in startGame function so I always start with fresh deck)

// resetDeck()


function createDeck(){
    SUITS.flatMap(
        (suit) => { 
            VALUES.map(     //mapping over suits and values and combining them all to one array
                (value) => {
                    let card = value + suit
                    // console.log(card)
                    masterDeck.push(card) //(pushing each card, back to the masterDeck array)
                    // console.log(masterDeck)
                
                }
            )
    
        }
    )
}
createDeck()


let shuffleDeck = [...masterDeck] //copying the masterDeck into the shuffleDeck, so we can then shuffle it. 

function shuffleTheDeck(){
    for(let i=0; i<shuffleDeck.length; i++){
        const tempCard= shuffleDeck[i];
        const randomIndex = Math.floor(Math.random() * 52);
        // shuffleDeck[i] = shuffleDeck[randomIndex]
        let x = shuffleDeck[i]
        shuffleDeck[i]=shuffleDeck[randomIndex]
        shuffleDeck[randomIndex] = x
        shuffleDeck[randomIndex] = tempCard
        // console.log(shuffleDeck)how to check if this is working? 

    }
}

shuffleTheDeck()


function splitDecks(){
const half = Math.ceil(shuffleDeck.length / 2);    
player1cards= (shuffleDeck.slice(0, half))
player2cards= (shuffleDeck.slice(-half))
// console.log(player1cards)
// console.log(player2cards)
}

splitDecks()


function startGame(){   //eventListner // Click start button // 
resetDeck()
createDeck()
shuffleTheDeck()
mixedDeck.push(...shuffleDeck) //spread operator pushes new shuffleDeck into mixedDeck
splitDecks()
// console.log(mixedDeck) 
flipDeckPlayer(player1cards, player1CardsFlipped) // this will automatically fire 
// flipDeckPlayer1()


}
startGame()

function nextRound() {
    flipDeckPlayer(player1cards, player1CardsFlipped)
    //add functionality to hide this button after it's clicked 
    //on click, set style to hidden or display none
}

//----Not using these rewrote the generic version below---//
// function flipDeckPlayer1(){
//     if(player1cards.length >0) {
//         player1CardsFlipped.unshift(player1cards[0])
//         player1cards.shift()
//     }
//     console.log(player1cards)
//     console.log(player1CardsFlipped,"player 1 cards flipped")
// }

// function flipDeckPlayer2(){
//     if(player2cards.length >0) {
//         player2CardsFlipped.unshift(player2cards[0])
//         player2cards.shift()
//     }
//     console.log(player2cards)
//     console.log(player2CardsFlipped,"player 2 cards flipped")
// }
//----Not using these rewrote the generic version below---//

let playerCards = []
let playerCardsFlipped = []

function flipDeckPlayer(playerCards, playerCardsFlipped){
    if (playerCards.length > 0){
        playerCardsFlipped.unshift(playerCards[0])
        playerCards.shift()
        }
        console.log(playerCards)
        console.log(playerCardsFlipped, "playerCardsFlipped")
    
    }


flipDeckPlayer(player1cards, player1CardsFlipped)

// flipDeckPlayer(player2cards, player2CardsFlipped) = //click event for player2 (person) = in line 142


function checkCards(){
    if(player1CardsFlipped[0] > player2CardsFlipped[0]){
        document.querySelector(".text").innerHTML = '<strong>Player 1 Wins This Round</strong>'
    }
}

//one event listener 

function player1Turn(player){

}


///---Event Listeners---///

let startButton = document.querySelector("div .start-button")
startButton.addEventListener('click', startGame)


player1pile = document.querySelector(".player1-card-pile")
player1pile.addEventListener("click", () => {

})


player2Deck = document.querySelector(".player2-deck") 
player2Deck.addEventListener('click',() => {
     flipDeckPlayer(player2cards, player2CardsFlipped)
     console.log("click event player2 Deck")
    document.querySelector(".player2-card-pile").innerHTML = player2CardsFlipped[0]
    console.log(player2CardsFlipped)
})   


// add this card to the html ... 
 
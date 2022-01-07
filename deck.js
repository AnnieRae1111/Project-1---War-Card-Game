


/*----- cached element references -----*/



/*----- constants -----*/
const SUITS = ['♥','♦','♠', '♣'] 
const VALUES= ['A','2', '3', '4','5','6','7','8', '9','10','J','Q','K']

/*----- app's state (variables) -----*/
let masterDeck = []
let shuffleDeck = []
const mixedDeck = []
console.log(masterDeck)
let player1cards =[]   //array for each player's deck of 26
let player2cards=[]   //array for each player's deck of 26. Create a function that splits the deck into  //these two arrays 
let player1CardsFlipped =[] //array for cards being pushed / clicked on / that turn over 
let player2CardsFlipped=[]


let playerTwoCardValue =document.querySelector(".player-two-card-value")
let playerOneCardValue = document.querySelector(".player-one-card-value")
let showWinnerOneText = document.querySelector(".winner-one-text")
let showWinnerTwoText =  document.querySelector(".winner-two-text")

/*----- functions -----*/

function resetDeck(){
    masterDeck.splice(0,masterDeck.length)
    mixedDeck.splice(0,mixedDeck.length)
    // console.log(masterDeck)
    // console.log(mixedDeck)
}    //reseting the decks. Include this in startGame function so I always start with fresh deck)

// resetDeck()

let points = {}
function createDeck(){
    SUITS.flatMap(
        (suit) => { 
            for(i=0; i< VALUES.length; i++){
                     
                    let card = {
                        value: VALUES[i],
                        suit: suit,
                        points: i+1
                        // img: `https://deckofcards.api.com/static/img/${value[i]} ${suits[i]}`
                    }
                    // console.log(points)
                    // console.log(card)
                    masterDeck.push(card) //(pushing each card, back to the masterDeck array)

            }

    
        }
    )
}
// createDeck()



 //copying the masterDeck into the shuffleDeck, so we can then shuffle it. 


function shuffleTheDeck(){
    shuffleDeck = [...masterDeck]
    for(let i=0; i<shuffleDeck.length; i++){
        const tempCard= shuffleDeck[i];
        const randomIndex = Math.floor(Math.random() * 52);
        let x = shuffleDeck[i]
        shuffleDeck[i]=shuffleDeck[randomIndex]
        shuffleDeck[randomIndex] = x
        shuffleDeck[randomIndex] = tempCard
        // console.log(shuffleDeck)how to check if this is working? 

    }
}

// shuffleTheDeck()


function splitDecks(){
const half = Math.ceil(shuffleDeck.length / 2);    
player1cards= (shuffleDeck.slice(0, half))
player2cards= (shuffleDeck.slice(-half))
// console.log(player1cards)
// console.log(player2cards)
}

// splitDecks()


function startGame(){   //eventListner // Click start button // 
resetDeck()
createDeck()
shuffleTheDeck()
mixedDeck.push(...shuffleDeck) //spread operator pushes new shuffleDeck into mixedDeck
splitDecks()
// console.log(mixedDeck) 
flipDeckPlayer(player1cards, player1CardsFlipped, "player1") // this will automatically fire 
// flipDeckPlayer1()


}
// startGame()



function flipDeckPlayer(playerCards, playerCardsFlipped, player){   //taking card away from deck 
    if (playerCards.length > 0){
        playerCardsFlipped.unshift(playerCards[0])
        playerCards.shift()
        document.querySelector(`.${player}-deck`).innerHTML = playerCards.length //counting down each deck when clicked
        }
        // console.log(playerCards)
        console.log(playerCardsFlipped, player)
    
    }



let winner = ""
function checkCards(){
    if(player1CardsFlipped[0].points > player2CardsFlipped[0].points){ //if playe1 card bigger, push player 2 cards to player 1. show winner text 
        player1CardsFlipped.push(player2CardsFlipped[0])
        showWinnerOneText.classList.remove("hide-round")  //showing the text 
        winner = "player1" 
        setTimeout(() => {
            showWinnerOneText.classList.add("hide-round")

        }, 2500)   


    } else if(player2CardsFlipped[0].points > player1CardsFlipped[0].points) {
        player2CardsFlipped.push(player1CardsFlipped[0])

       showWinnerTwoText.classList.remove("hide-round")
        winner = "player2"
        setTimeout(() => {
        showWinnerTwoText.classList.add("hide-round")

        },2500)   

     
     } else if(player2CardsFlipped[0].points === player1CardsFlipped[0].points) {
         let showDrawText = document.querySelector(".draw-text")
         showDrawText.classList.remove("hide-round")
         setTimeout(() => {
            showDrawText.classList.add("hide-round")

        }, 2500)  
      
    }
    setTimeout(()=> {
        let displayValue = document.querySelectorAll(".card-value")
        for(let i=0; i < displayValue.length ; i++){
            displayValue[i].innerHTML=""             //clearing the card values after winner is chsen
        }
    
    },2000)
  
}



function nextRound() { 

    if(winner === "player1") {
        flipDeckPlayer(player1cards,player1CardsFlipped, "player1")
         setTimeout(()=> {
        playerOneCardValue.innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`

        }, 3000)

    } else if(winner === "player2") {
     flipDeckPlayer(player1cards,player1CardsFlipped, "player1")
     setTimeout(()=> {
     playerOneCardValue.innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`

    },3000)
     
    }

}


function declareGameWinner(){ 
    if ((player1cards.length === 0 && player2cards.length === 0 ) && (player1CardsFlipped.length > player2CardsFlipped.length)){
       setTimeout(() => {
        let gameWinner1 = document.querySelector(".declare-game-winner1")
        gameWinner1.classList.remove("hide")

       },1500)
    } else if(player1cards.length === 0 && player2cards.length === 0 && player2CardsFlipped.length > player1CardsFlipped.length){
        setTimeout(() =>{
        let gameWinner2 = document.querySelector(".declare-game-winner2")
        gameWinner2.classList.remove("hide") 

        },1500)
        
    
    }
    
  

}


///---Event Listeners---///

let startButton = document.querySelector("div .start-button")
startButton.addEventListener('click' , () =>{
    startGame()
    playerOneCardValue.innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`
})

//-click event for turning player 2 card over--// 
let player2Deck = document.querySelector(".player2-deck") 

player2Deck.addEventListener('click',() => {
    flipDeckPlayer(player2cards, player2CardsFlipped, "player2")
    console.log("click event player2 Deck")
    playerTwoCardValue.innerHTML = `${player2CardsFlipped[0].value} ${player2CardsFlipped[0].suit}` // this is accessing the value and suit property of the object we created in createDeck function so we could compare points 
    
    checkCards() 

    // setTimeout(()=> {
    //     let displayValue = document.querySelectorAll(".card-value")
    //     for(let i=0; i < displayValue.length ; i++){
    //         displayValue[i].innerHTML=""
    //     }
    
    // },2000)
    

    nextRound()
    declareGameWinner()


})   


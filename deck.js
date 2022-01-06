

//player 1 = COMPUTER
//player 2 = PERSON

/*----- cached element references -----*/
/*----- event listeners -----*/


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
        document.querySelector(`.${player}-deck`).innerHTML = playerCards.length
        }
        // console.log(playerCards)
        console.log(playerCardsFlipped, player)
    
    }



let winner = ""
function checkCards(){
    if(player1CardsFlipped[0].points > player2CardsFlipped[0].points){ //if playe1 card bigger, push player 2 cards to player 1. show winner text 
        player1CardsFlipped.push(player2CardsFlipped[0])
        let showWinnerOneText = document.querySelector(".winner-one-text")
        showWinnerOneText.classList.remove("hide-round")  //showing the text 
        winner = "player1" 
        setTimeout(() => {
            showWinnerOneText.classList.add("hide-round")

        }, 2000)   

    
    } else if(player2CardsFlipped[0].points > player1CardsFlipped[0].points) {
        player2CardsFlipped.push(player1CardsFlipped[0])
        // document.querySelector(".winner-two-text").innerHTML += '<strong>Player 2 Wins This Round<br>Player 2 Go Again!</strong>'
       let showWinnerTwoText =  document.querySelector(".winner-two-text")
       showWinnerTwoText.classList.remove("hide-round")
        winner = "player2"
        setTimeout(() => {
            showWinnerTwoText.classList.add("hide-round")

        }, 2000)   

     
    // } else if(player2CardsFlipped[0].points === player1CardsFlipped[0].points) {
    //     document.querySelector(".text-container .text").innerHTML += '<strong>It`s a DRAW. Player 2 You Go Again<!!!/strong>'

    // }
    
    }
}

// function clearWinnerText(){
//     setTimeout(()=> {

//     document.querySelector(".winner-two-text").innerHTML = ""
//     document.querySelector(".winner-one-text").innerHTML = ""  

//     },2000)
// }

function nextRound() {
// document.querySelector(".winner-two-text").innerHTML = ""
// document.querySelector(".text-container .text").innerHTML = ""  
setTimeout(()=> {
    let displayValue = document.querySelectorAll(".card-value")
    for(let i=0; i < displayValue.length ; i++){
        displayValue[i].innerHTML=""
    }

},2000)

    if(winner === "player1") {
        // document.querySelector(".text-container .text").innerHTML += '<strong>Player 1 Wins This Round<br>Player 1 Go Again!</strong>'
        setTimeout(()=> {
            // document.querySelector(".winner-one-text").innerHTML = ""
            flipDeckPlayer(player1cards,player1CardsFlipped, "player1")
        document.querySelector(".player-one-card-value").innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`

        }, 2000)

        

    } else if(winner === "player2") {
    //  document.querySelector(".winner-two-text").innerHTML += '<strong>Player 2 Wins This Round<br>Player 2 Go Again!</strong>'
     setTimeout(()=> {
        // document.querySelector(".winner-two-text").innerHTML = ""
        flipDeckPlayer(player1cards,player1CardsFlipped, "player1")
    document.querySelector(".player-one-card-value").innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`

    },2000)
     
    }

}


// display winner text with a lag if possible 

function declareGameWinner(){ 
    if ((player1cards.length === 0 && player2cards.length === 0 ) && (player1CardsFlipped.length > player2CardsFlipped.length)){
       let gameWinner1 = document.querySelector(".declare-game-winner1")
        gameWinner1.classList.remove("hide")
    } else if(player1cards.length === 0 && player2cards.length === 0 && player2CardsFlipped.length > player1CardsFlipped.length){
        let gameWinner2 = document.querySelector(".declare-game-winner2")
        gameWinner2.classList.remove("hide") 
    
    }
    
    // compare arrays when both decks are = 0

}

//show and hide class on the div, 
    //remove class 
    // 
    //hard code the HTML text 
    //css class (hide) 

///---Event Listeners---///

let startButton = document.querySelector("div .start-button")
startButton.addEventListener('click' , () =>{
    startGame()
    document.querySelector(".player-one-card-value").innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`
})

//-click event for turning player 2 card over--// 
let player2Deck = document.querySelector(".player2-deck") 

player2Deck.addEventListener('click',() => {
    flipDeckPlayer(player2cards, player2CardsFlipped, "player2")
    console.log("click event player2 Deck")
    document.querySelector(".player-two-card-value").innerHTML = `${player2CardsFlipped[0].value} ${player2CardsFlipped[0].suit}` // this is accessing the value and suit property of the object we created in createDeck function so we could compare points 
    
    checkCards() 

    nextRound()
    // clearWinnerText()
    declareGameWinner()


})   


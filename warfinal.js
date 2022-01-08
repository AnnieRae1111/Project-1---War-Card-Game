//*THIS WORKS**

/*----- cached element references -----*/



/*----- constants -----*/
const SUITS = ['♥','♦','♠', '♣'] 
const VALUES= ['A','2', '3', '4','5','6','7','8', '9','10','J','Q','K']

/*----- app's state (variables) -----*/
let masterDeck = []
let shuffleDeck = []
const mixedDeck = []
console.log(masterDeck)
let player1cards =[]   
let player2cards=[]   
let player1CardsFlipped =[] 
let player2CardsFlipped=[]


let playerTwoCardValue =document.querySelector(".player-two-card-value")
let playerOneCardValue = document.querySelector(".player-one-card-value")
let showWinnerOneText = document.querySelector(".winner-one-text")
let showWinnerTwoText =  document.querySelector(".winner-two-text")
let displayValue = document.querySelectorAll(".card-value")

/*----- functions -----*/

function resetDeck(){
    masterDeck.splice(0,masterDeck.length)
    mixedDeck.splice(0,mixedDeck.length)
 

    console.log("reset deck")
    
}   



let points = {}
function createDeck(){
    SUITS.flatMap(
        (suit) => { 
            for(i=0; i< VALUES.length; i++){
                     
                    let card = {
                        value: VALUES[i],
                        suit: suit,
                        points: i+1
                        
                    }
                    
                    masterDeck.push(card) 

            }

    
        }
    )
}







function shuffleTheDeck(){
    shuffleDeck = [...masterDeck]
    for(let i=0; i<shuffleDeck.length; i++){
        const tempCard= shuffleDeck[i];
        const randomIndex = Math.floor(Math.random() * 52);
        let x = shuffleDeck[i]
        shuffleDeck[i]=shuffleDeck[randomIndex]
        shuffleDeck[randomIndex] = x
        shuffleDeck[randomIndex] = tempCard


    }
}




function splitDecks(){
const half = Math.ceil(shuffleDeck.length / 2);    
player1cards= (shuffleDeck.slice(0, half))
player2cards= (shuffleDeck.slice(-half))

}



function startGame(){   
createDeck()
shuffleTheDeck()
mixedDeck.push(...shuffleDeck)
splitDecks()
flipDeckPlayer(player1cards, player1CardsFlipped, "player1") 
resetDeck()


}




function flipDeckPlayer(playerCards, playerCardsFlipped, player){ 
    if (playerCards.length > 0){
        playerCardsFlipped.unshift(playerCards[0])
        playerCards.shift()
        document.querySelector(`.${player}-deck`).innerHTML = playerCards.length 

        }
        
    
    
    }



let winner = ""
let player1score = document.querySelector(".computer-score")
let player2score = document.querySelector(".player2-score")

function checkCards(){
    if(player1CardsFlipped[0].points > player2CardsFlipped[0].points){ 
        player1CardsFlipped.push(player2CardsFlipped[0])  
        player2CardsFlipped.shift()
        player1score.innerHTML = player1CardsFlipped.length
        showWinnerOneText.classList.remove("hide-round")  
        setTimeout(() => {
            showWinnerOneText.classList.add("hide-round")

        }, 2500)   


    } else if(player2CardsFlipped[0].points > player1CardsFlipped[0].points) {
        player2CardsFlipped.push(player1CardsFlipped[0])
        player1CardsFlipped.shift()
        player2score.innerHTML = player2CardsFlipped.length
        showWinnerTwoText.classList.remove("hide-round")
        winner = "player2"
        setTimeout(() => {
        showWinnerTwoText.classList.add("hide-round")

        },2500)   

    
    } else if(player2CardsFlipped[0].points === player1CardsFlipped[0].points) {
        player1CardsFlipped.push(player1CardsFlipped[0])
        player2CardsFlipped.push(player2CardsFlipped[0])
        let showDrawText = document.querySelector(".draw-text")
        winner = "draw"
        showDrawText.classList.remove("hide-round") 
        setTimeout(() => {
            showDrawText.classList.add("hide-round") 
        }, 2500)  
    
    }
    setTimeout(()=> {

        for(let i=0; i < displayValue.length ; i++){
            displayValue[i].innerHTML=""             
        }
    
    },2000)

}



function nextRound() { 

    if(winner === "player1") {
        flipDeckPlayer(player1cards,player1CardsFlipped, "player1")
        console.log("next round")
        setTimeout(()=> {
        playerOneCardValue.innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`

        }, 3000)

    } else if(winner === "player2") {
        flipDeckPlayer(player1cards,player1CardsFlipped, "player1")
        setTimeout(()=> {
        playerOneCardValue.innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`

        },3000)
    
    } else if (winner === "draw"){
        flipDeckPlayer(player1cards,player1CardsFlipped, "player1")
        setTimeout(()=> {
        playerOneCardValue.innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`

        },3000)
    

    }

}


function declareGameWinner(){ 
    if ((player1cards.length === 0 && player2cards.length === 0 ) && (player1CardsFlipped.length > player2CardsFlipped.length)){
        showWinnerOneText.classList.add("hide-round")
        
        setTimeout(() => {
        let gameWinner1 = document.querySelector(".declare-game-winner1")
        gameWinner1.classList.remove("hide")
        displayValue.innerHTML="" 

        },2500)
    } else if(player1cards.length === 0 && player2cards.length === 0 && player2CardsFlipped.length > player1CardsFlipped.length){
        showWinnerTwoText.classList.add("hide-round")
    
        setTimeout(() =>{
        let gameWinner2 = document.querySelector(".declare-game-winner2")
        gameWinner2.classList.remove("hide") 
        
        
        },2500)
        
    
    }
    

}

function startOver(){
    location.reload();
}


///---Event Listeners---///

let resetButton = document.querySelector(".restart")
resetButton.addEventListener('click' , () => {
    startGame()
    startOver()
})

let startButton = document.querySelector("div .start-button")
startButton.addEventListener('click' , () =>{
    startGame()
    playerOneCardValue.innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`
})

let player2Deck = document.querySelector(".player2-deck") 

player2Deck.addEventListener('click',() => {
    flipDeckPlayer(player2cards, player2CardsFlipped, "player2")
    console.log("click event player2 Deck")
    playerTwoCardValue.innerHTML = `${player2CardsFlipped[0].value} ${player2CardsFlipped[0].suit}` 
    checkCards()
    nextRound()
    declareGameWinner()
})   


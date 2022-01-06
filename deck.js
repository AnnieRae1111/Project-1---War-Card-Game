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

            // VALUES.map(     //mapping over suits and values and combining them all to one array
            //     (value) => {
            //         // let card = value + suit
            //         let card = {
            //             value: value,
            //             card: suit,
            //             points: value[i]
            //         }
            //         // console.log(card)
            //         masterDeck.push(card) //(pushing each card, back to the masterDeck array)
            //         // console.log(masterDeck)
                
            //     }
            // )
    
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
        // shuffleDeck[i] = shuffleDeck[randomIndex]
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



function flipDeckPlayer(playerCards, playerCardsFlipped, player){
    if (playerCards.length > 0){
        playerCardsFlipped.unshift(playerCards[0])
        playerCards.shift()
        document.querySelector(`.${player}-deck`).innerHTML = playerCards.length
        }
        // console.log(playerCards)
        console.log(playerCardsFlipped, player)
    
    }


// flipDeckPlayer(player1cards, player1CardsFlipped)

// flipDeckPlayer(player2cards, player2CardsFlipped) = //click event for player2 (person) = in line 142
let winner = ""


function checkCards(){
    if(player1CardsFlipped[0].points > player2CardsFlipped[0].points){
        player1CardsFlipped.push(player2CardsFlipped[0])
       
        // document.querySelector(".player1-deck").innerHTML = player1cards.length
        document.querySelector(".text-container .text").innerHTML += '<strong>Player 1 Wins This Round<br>Player 1 Go Again!</strong>'
        winner = "player1" 
        setTimeout(()=>{
        document.querySelector(".text-container .text").innerHTML = ""   
        }, 3000)
        
    } else if(player2CardsFlipped[0].points > player1CardsFlipped[0].points) {
        player2CardsFlipped.push(player1CardsFlipped[0])
        document.querySelector(".winner-two-text").innerHTML += '<strong>Player 2 Wins This Round<br>Player 2 Go Again!</strong>'

        winner = "player2"
        setTimeout(() =>{
            document.querySelector(".winner-two-text").innerHTML = ""
            

        }, 3000)
      
    }

}

// function hideWinnerStatus(){
//     document.querySelector(".text-container.text").style.visibility = "hidden"
// }



// document.querySelector(".card-value").style.visibility = "hidden"
///---Event Listeners---///

let startButton = document.querySelector("div .start-button")
startButton.addEventListener('click' , () =>{
    startGame()
    document.querySelector(".player-one-card-value").innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`
})

//use interpolation to access key's 


// player1pile = document.querySelector(".player1-card-pile")
// player1pile.addEventListener("click", () => {

// })

// function showPlayer2Card(){
//     flipDeckPlayer(player2cards, player2CardsFlipped)
//     document.querySelector(".card-value").style.visibility = "visible"
// }


//-click event for turning player 2 card over--// 
let player2Deck = document.querySelector(".player2-deck") 
player2Deck.addEventListener('click',() => {
     flipDeckPlayer(player2cards, player2CardsFlipped, "player2")
     console.log("click event player2 Deck")
    document.querySelector(".player-two-card-value").innerHTML = `${player2CardsFlipped[0].value} ${player2CardsFlipped[0].suit}` // this is accessing the value and suit property of the object we created in createDeck function so we could compare points 
    
if (winner = "player2"){
    // setTimeout(()=> {
        flipDeckPlayer(player1cards,player1CardsFlipped,"player1")
        document.querySelector(".player-one-card-value").innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`
    
    // } ,2000)
}    
    
    checkCards()
     setTimeout(() => {
       let displayValue = document.querySelectorAll(".card-value")
      for(let i=0; i < displayValue.length ; i++){
          displayValue[i].innerHTML=""
      }

     },2000)
    
    //  showPlayer2Card()

    
    if(winner === "player1") {
        // setTimeout(()=> {
            flipDeckPlayer(player1cards,player1CardsFlipped, "player1")
            document.querySelector(".player-one-card-value").innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`
        
        // } ,2000)
    
        console.log("player 1 is going again")
        
    }
   
})   


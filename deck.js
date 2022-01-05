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

// splitDecks()


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



function flipDeckPlayer(playerCards, playerCardsFlipped){
    if (playerCards.length > 0){
        playerCardsFlipped.unshift(playerCards[0])
        playerCards.shift()
        }
        console.log(playerCards)
        console.log(playerCardsFlipped, "playerCardsFlipped")
    
    }


// flipDeckPlayer(player1cards, player1CardsFlipped)

// flipDeckPlayer(player2cards, player2CardsFlipped) = //click event for player2 (person) = in line 142


function checkCards(){
    if(player1CardsFlipped[0].points > player2CardsFlipped[0].points){
        //push player2cardsflipped to player1cardsFlipped
        // let winnerText = document.querySelector(".text-container .text")
        // winnerText = "Player 1 Wins This Round!"
        // div.append(winnerText)
        document.querySelector(".text-container .text").innerHTML += '<strong>Player 1 Wins This Round</strong>'
    // }   else {
        // let winnerTwoText = document.querySelector(".text-container. .winner-two-text")
        // winnerTwoText = "Player 2 Wins This Round!"
        // div.append(winnerTwoText)
        // // console.log("player 2 wins")
        // // document.querySelector(".text-container .text").innerHTML += '<strong>Player 2 Wins This Round</strong>'

    // } 


    } else {
        document.querySelector(".text-container .text").innerHTML += '<strong>Player 2 Wins This Round</strong>'
}
// checkCards()
}






///---Event Listeners---///

let startButton = document.querySelector("div .start-button")
startButton.addEventListener('click' , () =>{
    startGame
    document.querySelector(".player1-card-pile").innerHTML = `${player1CardsFlipped[0].value} ${player1CardsFlipped[0].suit}`
})

//use interpolation to access key's 


// player1pile = document.querySelector(".player1-card-pile")
// player1pile.addEventListener("click", () => {

// })


//-click event for turning player 2 card over--// 
player2Deck = document.querySelector(".player2-deck") 
player2Deck.addEventListener('click',() => {
     flipDeckPlayer(player2cards, player2CardsFlipped)
     console.log("click event player2 Deck")
    document.querySelector(".player2-card-pile").innerHTML = `${player2CardsFlipped[0].value} ${player2CardsFlipped[0].suit}` // this is accessing the value and suit property of the object we created in createDeck function so we could compare points 
     checkCards()

    // setTimeout(()=> {
    //     document.querySelector(".player1-card-pile").innerHTML = player1CardsFlipped[0]
    
    // } ,1000)

    // console.log("player 1 is going again")
})   

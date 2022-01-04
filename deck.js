//creat a class to hold the entire deck and it's functions. 
//OOP 
const SUITS = ['♥','♦','♠', '♣'] //static global variable so it can be in all caps
const VALUES = ['A','2', '3', '4','5','6','7','8', '9','10','J','Q','K']
let masterDeck = []
const mixedDeck = []
console.log(masterDeck)

function resetDeck(){
    masterDeck.splice(0,masterDeck.length)
    mixedDeck.splice(0,mixedDeck.length)    //
    
}



//use two for loops
function createDeck (){
    // how to delete elements from an array  . could splice 
    SUITS.flatMap(
        (suit) => { 
            VALUES.map(
                (value) => {
                    let card = value + suit
                    // console.log(card)
                    masterDeck.push(card)
                
                }
            )
    
        }
    )
}






// console.log(newDeck)

 ///copy the deck 

function shuffleDeck(){
    let shuffleDeck = [...masterDeck] //create a new play deck to shuffle 
    //logic to shuffle the deck//
    return shuffleDeck 

}

function startGame(){    ///this will go at bottom 
resetDeck()
createDeck()
mixedDeck.push(...shuffleDeck()) //spread operator pushes new shuffleDeck into mixedDeck
console.log(mixedDeck) 

}

//can create function that resets the deck, to reset both decks. 

startGame()


class CardDeck {
        constructor(cards){
          this.cards = cards //   create an object to hold all the instances and functionalities of the deck 
        }
}

class Card {                        
    constructor(suit, value){    //create an object to hold all instances of a single card 
        this.suit= suit
        this.value = value 
    }
}

//create a function that loops through all the suits and the values and combines them 
//into a deck array.. 





// The flatMap() method returns a new array formed by applying a given callback 
// function to each element of the array, and then flattening the result by 
// one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient 
// than calling those two methods separately.
//it will run the map method on an array and then the flat method. combo of them both 


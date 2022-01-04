const SUITS = ['♥','♦','♠', '♣']
const VALUES = ['A','2', '3', '4','5','6','7','8', '9','10','J','Q','K']

class Deck {                    //creating a class to hold the deck , aka two piles of 26, or each players pile of cards 
    constructor(cards = newDeck()){         //creating a class for the deck in a sperate file so we can apply this to other games 
        this.cards = []
    }

get numberOfcards(){
    return this.cards.length
}   
    
shuffle() {
    for(let i = this.numberofCards -1; i > 0; i--){
        const newIndex = Math.floor(Math.random() * (i + 1))
        const oldValue = this.cards[newIndex]
        this.cards[newIndex]= this.cards[i]
        this.cards[i]= oldValue //this is looping through each index of card and replacing it with another card. 

    }
}    
}

class Card {
    constructor(suite, value ){
        this.suite = suite
        this.value = value 

    }
}

function newDeck(){ //this function is shuffling through the suits and vlaues and returning one array. flatMap combines the results into one array instead of two 
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suite,value) 
        })
    })
}

//pass this function through the Deck class constructor function 
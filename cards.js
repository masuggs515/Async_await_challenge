let url = 'https://deckofcardsapi.com/api/'

// Part 1

async function oneCard(){
    let res = await axios.get(`${url}deck/new/draw/`)
    let value = res.data.cards[0].value
    let suit = res.data.cards[0].suit
    console.log(`${value} of ${suit}`)
}

// Part 2

async function twoCards(){
    let res = await axios.get(`${url}deck/new/shuffle`)
    let deckID = res.data.deck_id;
    let cards = await Promise.all([
        axios.get(`${url}deck/${deckID}/draw`),
        axios.get(`${url}deck/${deckID}/draw`)
    ]) 
    for(card of cards){
        let value = card.data.cards[0].value;
        let suit = card.data.cards[0].suit;
        console.log(`${value} of ${suit}`)
    }
}

// Part 3
let deckID = null;
$btn = $('#card-button')

$cardArea = $('#card-area')
async function getDeck(){
    let res = await axios.get(`${url}deck/new/shuffle`)
    deckID = res.data.deck_id;
}
$btn.on('click', async ()=>{
    let card = await axios.get(`${url}deck/${deckID}/draw`);
    let image = card.data.cards[0].image;
    $cardArea.append(`
    <img src="${image}">
    `)
    $('img').css('position', 'absolute');
    if(card.data.remaining == 0){
        $btn.remove();
    }
})

getDeck()

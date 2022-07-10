function Deck()
{
    let deck = [];
    let count = 1;
    for(let i = 1; count <= 4; i++)
    {
        deck.push(i);
        if(i === 13)
        {
            i = 0;
            count++;
        }
    }
return deck;
}

function shuffle(array)

{
    let currentIndex = array.length;
    while(currentIndex != 0)
    {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function player(array)
{
    let deck = [];
    for(let i = 1; i <= 26; i++)
    {
        deck.push(array.shift());
    }

    return deck;
}

function card(array)
{

    return array.shift();
}

function play_war(arr, array)
{
    let card = 26;
    let shogunDude_card = 0;
    let jarlMan_card = 0;
    let shogunDude_score = 0;
    let jarlMan_score = 0;
    while(card != 0)
    {
        shogunDude_card = arr.shift();
        jarlMan_card = array.shift();
        if(shogunDude_card > jarlMan_card)
        {
            console.log("The Shogun won the battle! Point earned!");
            shogunDude_score++;
        }
        else if(shogunDude_card < jarlMan_card)
        {
            console.log("The Jarl won the battle! Point earned!");
            jarlMan_score++;
        }
        else
        {
            console.log("It is a stalemate, no points awarded!");
        }
        card--;

    }

    console.log("Shogun score: " + shogunDude_score + " Jarl score: " + jarlMan_score);

    if(shogunDude_score > jarlMan_score)
        {
            console.log("The Shogun claims victory!");
        }
        else if(shogunDude_score < jarlMan_score)
        {
        console.log(" The Jarl claims victory!");
        }
        else
        {
        console.log("The war is a stalemate!");
    }

    return 1;
}

let deck = (shuffle(Deck()));
let theShogunate = player(deck);
let theJarl = player(deck);
play_war(theShogunate, theJarl);
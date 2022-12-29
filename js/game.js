let btn = document.getElementById('btn')
let res = document.getElementById('res')
let cardsOnBoard = document.getElementById('cardsOnBoard')
let reset = document.getElementById('reset')
let iname = document.getElementById('iname')
let error = document.getElementById('error')
reset.style.display = "none"

btn.addEventListener("click", () => {
    if (iname.value.trim().length === 0) {
        error.innerHTML = 'Please enter your name and click Play!'               
        iname.preventDefault();                    
    } else{  
        error.innerHTML = ''    
        iname.style.display = "none"
        if (p1.length > 0 && p2.length > 0) {
            playGame();
        }
        else {
            endGame();            
        }
    }
    
})

const p1 = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H', '14H',
    '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', '11C', '12C', '13C', '14C',
    '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', '11D', '12D', '13D', '14D',
    '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', '11S', '12S', '13S', '14S']

const p2 = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H', '14H',
    '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', '11C', '12C', '13C', '14C',
    '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', '11D', '12D', '13D', '14D',
    '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', '11S', '12S', '13S', '14S']

let placarP1 = 0
let placarP2 = 0

function sortCard() {
    return Math.floor(Math.random() * p1.length)
}

function playGame() {
    let card1 = p1[sortCard()]
    let card2 = p2[sortCard()]

    cardsOnBoard.innerHTML = `<div class="playerNames">${iname.value}</div>
        <img src="../imgs/${card1}.svg" class="cards" />     
        <img src="../imgs/${card2}.svg" class="cards" />
        <div class="playerNames">Robot</div>`

    if (Number(card1.slice(0, card1.length - 1)) === Number(card2.slice(0, card2.length - 1))) {
        res.innerHTML = '<p class="roundwon">Round tied</p>'
    } else if (Number(card1.slice(0, card1.length - 1)) > Number(card2.slice(0, card2.length - 1))) {
        res.innerHTML = `<p class="roundwon">${iname.value} won</p>`
        placarP1++;
    } else {
        res.innerHTML = '<p class="roundwon">Robot won</p>'
        placarP2++;
    }
    res.innerHTML += `<p class="placar"><br>Score: <br>
        ${iname.value}: ${placarP1} <br>
        Robot: ${placarP2} <br>        
        </p>`
    p1.splice(p1.indexOf(card1), 1)
    p2.splice(p2.indexOf(card2), 1)
}

function endGame() {
    if (placarP1 === placarP2) {
        res.innerHTML = `<p class="placar">The game ended in a draw!<p>`
    } else if (placarP1 > placarP2) {
        res.innerHTML = `<p class="placar">${iname.value} won the game!</p>`
    } else {
        res.innerHTML = `<p class="placar">Robot won the game!</p>`
    }
    btn.style.display = "none";

    res.innerHTML += `<p class="placar">
    <br><br>Final Score: <br><br>
    ${iname.value}: ${placarP1} <br>
    Robot: ${placarP2} <br> </p>    `

    cardsOnBoard.innerHTML = ''    

    reset.style.display = "block"
}

reset.addEventListener("click", () => {
    window.location.reload();
})
/*-------------- Constants -------------*/
words = ['italy','china','india','nepal','ghana','spain','japan','haiti']
const NUM_GUESSES = 5



/*---------- Variables (state) ---------*/
let currentGuess
let attempts
let rightGuess

/*----- Cached Element References  -----*/
const boardEl = document.querySelector('#board')
const keyboardEl = document.querySelector('.keyboard')
const enterEl = document.querySelector('enter')
const deleteEl = document.querySelector('delete')
const restartBtnEl = document.querySelector('#restart')
const messageEl = document.querySelector('p')
//runs game
init()

/*-------------- Functions -------------*/
//initializes the game
function init(){
    currentGuess = '';
    attempts = 5;
    rightGuess = randomWord()
    //console.log(rightGuess)
    renderBoard()
}
function handleGuess(){
    if(currentGuess.length !== 5){
        return
    }
}


//Return a random word out of words array
function randomWord(){
   return words[Math.floor(Math.random()* words.length)]
}



// Renders the board game to site
function renderBoard(){
    
    for(let i = 0; i < NUM_GUESSES; i++){
        let row = document.createElement('div')
        row.className = 'letters-row'
       for(let k = 0; k < NUM_GUESSES; k++){
            let box = document.createElement('div')
                box.className = 'letter-box'
                row.appendChild(box)
                box.textContent = 'test'
                //console.dir(box)
            }
            boardEl.appendChild(row)
            //console.dir(row)
        }

    }

/*----------- Event Listeners ----------*/


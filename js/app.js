/*-------------- Constants -------------*/
words = ['italy','china','india','nepal','ghana','spain','japan','haiti']
const NUM_GUESSES = 5



/*---------- Variables (state) ---------*/
let currentGuess
let attempts



/*----- Cached Element References  -----*/
const boardEl = document.querySelector('#board')



init()
/*-------------- Functions -------------*/
function init(){
    currentGuess = '';
    attempts = 0;
    renderBoard()
}

function randomWord(){
    words[Math.floor(Math.random()* words.length)]
}




function renderBoard(){
    
    for(let i = 0; i < NUM_GUESSES; i++){
    let row = document.createElement('div')
        row.className = 'letters-row'
       for(let k = 0; k < NUM_GUESSES; k++){
            let box = document.createElement('div')
                box.className = 'letter-box'
                row.appendChild(box)
                console.dir(box)
            }
            boardEl.appendChild(row)
            console.dir(row)
        }

    }

/*----------- Event Listeners ----------*/


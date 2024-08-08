/*-------------- Constants -------------*/
const words = ['italy','china','india','nepal','ghana','spain','japan','haiti']
const NUM_GUESSES = 5

/*---------- Variables (state) ---------*/
let currentGuess
let rightGuess
let row

/*----- Cached Element References  -----*/
const boardEl = document.querySelector('#board')
const keyboardEl = document.querySelectorAll('.keyboard')
const enterEl = document.querySelector('#enter')
const deleteEl = document.querySelector('#delete')
const restartBtnEl = document.querySelector('#restart')
const messageEl = document.querySelector('p')
//runs game
init()
/*-------------- Functions -------------*/
//initializes the game
function init(){
    currentGuess = '';
    row = 0;
    rightGuess = randomWord()
    renderBoard()
    //console.log(rightGuess)

}
function handleGuess(element){
    const key = element.target.textContent
    if(key ==='Enter'){
        if(currentGuess.length === rightGuess.length){
            checkGuess()
        }
    }else if(key ==='Delete'){
        if(currentGuess.length > 0){
            currentGuess = currentGuess.slice(0, -1)
            updateBoard()
        }
    }else{
        if(currentGuess.length < rightGuess.length){
            currentGuess += key
            updateBoard()
        }
    }
}

function checkGuess(){
    const boxes = Array.from(boardEl.children).slice(row * rightGuess.length, (row + 1) * rightGuess.length)
    boxes.forEach((box,index)=> {
        if(currentGuess[index] === rightGuess[index]){
            box.style.backgroundColor = 'Green'

        }else if(rightGuess.includes(currentGuess[index])){
            box.style.backgroundColor = 'Yellow'
        
        }else{
            box.style.backgroundColor = 'Gray'
        }
    })
  
    if(currentGuess === rightGuess){
        messageEl.textContent = 'Congratulations! You guessed the word!'
        return

    }if(row < NUM_GUESSES - 1){
        row++
        currentGuess = ''

    }else{
        messageEl.textContent = `You lost! The word was ${rightGuess}.`
    }
}
function updateBoard(){
   const boxes = Array.from(boardEl.children).slice(row * rightGuess.length, (row + 1)* rightGuess.length)
   boxes.forEach((box, index)=> {
      box.textContent = currentGuess[index] || ''
   })
}



//Return a random word out of words array
function randomWord(){
   return words[Math.floor(Math.random()* words.length)]
}


// Renders the board game to site
function renderBoard(){
       for(let i = 0; i < NUM_GUESSES * rightGuess.length; i++){
            let box = document.createElement('div')
                box.classList.add('letter-box')
                boardEl.appendChild(box)
       }
    }

/*----------- Event Listeners ----------*/
keyboardEl.forEach(key => key.addEventListener('click', handleGuess))
enterEl.addEventListener('click',handleGuess)
deleteEl.addEventListener('click',handleGuess)
restartBtnEl.addEventListener('click',init)
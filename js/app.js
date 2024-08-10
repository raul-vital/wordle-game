/*-------------- Constants -------------*/
const words = ['italy','china','india','nepal','ghana','spain','japan','haiti','egypt','qatar','chile','kenya','syria']
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
const buttonEl = document.querySelectorAll('.button')

//runs game
init()

/*-------------- Functions -------------*/
//initializes the game
function init(){
    currentGuess = ''
    row = 0;
    rightGuess = randomWord()
    renderBoard()
    restartKeyboard()

}
//Handle guess according to click on Enter, deletes on Delete and updates box color depending on the letter
function handleGuess(element){
    const key = element.target.textContent

    if(key ==='Enter'){
        if(currentGuess.length === rightGuess.length){
            if(words.includes(currentGuess.toLowerCase())){
                messageEl.textContent = ''
                checkGuess()
            }else{
                messageEl.textContent = `Word is not in the countries' list`
                
            }
        }
    }else if(key ==='Delete'){
        if(currentGuess.length > 0){
            currentGuess = currentGuess.slice(0, -3)
            updateBoard()
        }
    }else{
        if(currentGuess.length < rightGuess.length){
            currentGuess = currentGuess + key
            updateBoard()
           }
        }
   }

//Loops through selected rows and updates color of boxes and display win/loss messages
function checkGuess(){
    const boxes = Array.from(boardEl.children).slice(row * rightGuess.length, (row + 1) * rightGuess.length)
    boxes.forEach((box,index)=> {
        const letter = currentGuess[index].toLowerCase()
        const keyEl = document.querySelector(`.button[data-key="${letter}"]`)
        console.dir(keyEl)
        if(currentGuess[index].toLowerCase() === rightGuess[index].toLowerCase()){
            box.style.backgroundColor = '#2b780b'
            keyEl.style.backgroundColor = '#2b780b'
        }else if(rightGuess.toLowerCase().includes(currentGuess[index].toLowerCase())){
            box.style.backgroundColor = '#cab500'
            keyEl.style.backgroundColor = '#cab500'
        }else{
            box.style.backgroundColor = '#464641'
            keyEl.style.backgroundColor = '#464641'
        }
    })

    if(currentGuess.toLowerCase() === rightGuess.toLowerCase()){
        messageEl.textContent = 'Congratulations! You guessed the right country!'
        return

    }if(row < NUM_GUESSES - 1){
        row++
        currentGuess = ''

    }else if(currentGuess.toLowerCase() !== rightGuess.toLowerCase()){
        messageEl.textContent = `You lost! The country was "${rightGuess}".`
    }
}

//Loops through each box in the selected row and updates the text content in them
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
    boardEl.innerHTML =''
       for(let i = 0; i < NUM_GUESSES * rightGuess.length; i++){
            let box = document.createElement('div')
                box.classList.add('letter-box')
                boardEl.appendChild(box)
       }
    }

//loops through buttonEl class and sets background color to default 
function restartKeyboard(){
    buttonEl.forEach(key => {
        key.style.backgroundColor = '#818384'
    })

}
/*----------- Event Listeners ----------*/
keyboardEl.forEach(key => key.addEventListener('click', handleGuess))
enterEl.addEventListener('click',handleGuess)
deleteEl.addEventListener('click',handleGuess)
restartBtnEl.addEventListener('click',init)
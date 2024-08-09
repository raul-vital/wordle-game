# Wordle - Countries Edition
![Top part of Wordle game](https://i.imgur.com/hrGAwiZ.png)
![Bottom part of Wordle game](https://i.imgur.com/koW8nBQ.png)

### Game name: 
* Wordle - Countries Edition

### Getting started:

* 

* Planning Materials at the bottom of README file. 

### Technologies used: 

* HTML
* CSS 
* JavaScript

### Next steps: 
* Implementing attempts number

* Updating colors of boxes at the keyboard

* Updating the color of only one box if a letter is present only once in word. 






# Project planning - Browser Game
#### Game of choice: Wordle
### Raul Vital


(Country edition - The player will have 5 chances to guess a 5-letter country)


#### User Stories:
* As a user, I want to land on a page where I can start a game and guess the word


* As a user, I want to input a guess for the word so I can solve the puzzle


* As a user, I want to be notified of each letter in my guess so that I can figure out if I’m close to solving the puzzle


* As a user, I want to see my previous guesses


* As a user, I want to be notified if I guessed the right word and won the game.


* As a user, I want to be notified if I used all my guesses and lost the game.


* As a user, I want to be able to reset the game and play again.


* As a user, I want to see a keyboard so I can input my guess


* As a user, I want to see animated tiles displaying my guess 


#### Pseudocode:


__//Declare global variables__
```
const words = italy, china, india, nepal, ghana,spain, japan, haiti


currentGuess


attempts


randomWord = random word out of words array
```


__//Declare variables and to hold references to html elements__
```
Board


Guess button


Restart button


Keyboard Element (A div of divs with each keyboard letter with id of keyboard)


Tile element (A div of 5 divs with with a class of tile)


Win / Loss messages
```
__//Add event listeners to DOM Elements__
```
guessBtnEl addEventListener(click, handleGuess)


restartBtnEl addEventListener(click, init)

```


__//Function to start and restart the game__
```
Function init()
Set variables to empty strings or zero
```

__//Write a function to handle the guess__
```
Function handleGuess with a guess element
   If currentGuess is not equal to 5, display “guess must be five letters”
   currentGuess++


  If currentGuess is equal to randomWord
       Print message with textContent of “Congratulations, you guessed the word and won the game in (attempts) number of attempts


 Else if attempts equal to 5 times
    Display message with textContent of “Sorry, you didn't guess the word and lost the game.
```




__//Function to check the guess__
```
Function checkGuess()
      If guess is equal to ramdomWord
        Return correct
      If guess is included in randomWord
         Return present
      Else
         Return not present
```


__// function to pick a random word out of the words array__
```
Function randomWord()


words is equal to Math.floor(math.random()) times the arrays length
```


__//Function to render tile__
```
Function renderTile {
For loop through the tiles 
Title textContent = currenGuess[i] //
} 
```

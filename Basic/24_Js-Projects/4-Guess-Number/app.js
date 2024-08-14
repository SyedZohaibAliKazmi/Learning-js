let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")


const p = document.createElement("p")

let prevGuess = []
let NumGuess = 1

let playGame = true


if (playGame) {
  submit.addEventListener('click' , function(e){
    e.preventDefault()

    const guess =parseInt(userInput.value)
    console.log( guess)
    validateGuess(guess)
    
  })
  
}


// ya validation check karay ga kay user nay kahi a,b,c, ya kuch or to nahi dala
// ya guess karay ga value 1 say 100 kay beech may ha ya nahi 
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number')
  }else if (guess < 1){
    alert('Please enter a Number more than 1')
  }else if (guess > 100){
    alert('Please enter a Number less than 100')
  }else{
    prevGuess.push(guess) // ya uper empty value say araha ha 
    if (NumGuess === 11) {  // ya bhi uper create hoa ha 
     displayGuess(guess)
     displayMessage(`Game Over. Random Number was ${randomNumber}`)
     endGame() 
    } else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}


// ya check karay ga kay user ki9 value ha correct ha high to nahi ha 100 say 

function checkGuess(guess) {

  if (guess === randomNumber) {
    displayMessage('You guessed it Right')
    endGame() 
  }else if (guess < randomNumber){
    displayMessage('Number is TOOo Low')

  }else if (guess > randomNumber){
    displayMessage('Number is TOOo High')
  }
  
}

//
function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess},`
  NumGuess++;
  remaining.innerHTML =`${11-NumGuess}`
}

// ya user kay message ko display karay ga 

function displayMessage(message) {
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}

// end game kay liye 

function endGame(params) {
  userInput.value =''
  userInput.setAttribute("disabled", "")
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}


// new game start 

function newGame(params) {
 const newGAmeButton= document.querySelector('#newGame')
 newGAmeButton.addEventListener('click', function(e){
randomNumber =  parseInt(Math.random()*100+1)
prevGuess =[]
playGame=true
NumGuess=1
guessSlot.innerHTML =""
 remaining.innerHTML =`${11-NumGuess}`
userInput.removeAttribute('disabled')
startOver.removeChild(p)
playGame=true

 })
  
}


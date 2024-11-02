const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let countdown;
let isPaused = false;
let timeLeft = 60; // Time in seconds
let timerId = null


squares.forEach(square => {
  square.addEventListener('click', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})


function startTimer() {
  
    if (isPaused) {
        isPaused = false;
    } else {
        timeLeft = 60; // Reset the timer to 60 seconds
    }
    clearInterval(countdown);
    countdown = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(countdown);
}

function resetTimer() {
    isPaused = false;
    clearInterval(countdown);
    timeLeft = 60;
    squares.forEach(square => {
      square.classList.add('mole')
    })
    
    document.getElementById('score').textContent ='0'
  

    document.getElementById('time').textContent = formatTime(timeLeft);
}

function updateTimer() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id

    if (timeLeft > 0 && !isPaused) {
        timeLeft--;
        document.getElementById('time').textContent = formatTime(timeLeft);
    } else {
        clearInterval(countdown);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}:00`;
}



// function countDown() {
//  currentTime--
//  timeLeft.textContent = currentTime

//  if (currentTime == 0) {
//    clearInterval(countDownTimerId)
//    clearInterval(timerId)
   
//    alert('GAME OVER! Your final score is ' + result)
//  }

// }

// let countDownTimerId = setInterval(countDown, 500)


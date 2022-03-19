//Variables
document.getElementById('rock').addEventListener('click', rock)
document.getElementById('paper').addEventListener('click', paper)
document.getElementById('scissors').addEventListener('click', scissors)
const result = document.getElementById('result')

// 0 === Rock | 1 === Paper | 2 === Scissors
function rock() {
  const cpuChoice = Math.floor(Math.random() * 3)
  if (cpuChoice === 0) {
    result.innerText = 'You Tied'
  } else if (cpuChoice === 1) {
    result.innerText = 'You Lost'
  } else if (cpuChoice === 2) {
    result.innerText = 'You Won'
  } else {
    console.log('Erro')
  }
}

function paper() {
  const cpuChoice = Math.floor(Math.random() * 3)
  if (cpuChoice === 0) {
    result.innerText = 'You Won'
  } else if (cpuChoice === 1) {
    result.innerText = 'You Tied'
  } else if (cpuChoice === 2) {
    result.innerText = 'You Lost'
  } else {
    console.log('Erro')
  }
}

function scissors() {
  const cpuChoice = Math.floor(Math.random() * 3)
  if (cpuChoice === 0) {
    result.innerText = 'You lost'
  } else if (cpuChoice === 1) {
    result.innerText = 'You Won'
  } else if (cpuChoice === 2) {
    result.innerText = 'You Tied'
  } else {
    console.log('Erro')
  }
}

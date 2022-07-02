'use strict'

let seconds = 0
let secs = 0
let started
let timer
const start = document.querySelector('.iniciar')
const pause = document.querySelector('.pausar')
const clear = document.querySelector('.zerar')
const clock = document.querySelector('.clock')

function getSeconds(sec) {
  const data = new Date(sec * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

function checkPause() {
  if (clock.classList.contains('paused')) {
    clock.classList.remove('paused')
    pause.innerHTML = 'pausar'
    startClock(secs)
  } else {
    clock.classList.add('paused')
    pause.innerHTML = 'retomar'
    clearInterval(timer)
  }
}

function startClock(sec) {

  timer = setInterval(function() {
    sec++;
    clock.innerHTML = getSeconds(sec);
    secs++
  }, 1000);
}

function clickStart() {
  if (started) return

  start.classList.add('started')
  started = true
  startClock(secs)

}

function clickPause() {
  if (!started) return
  checkPause()
}

function clickClear() {
  clock.innerHTML = '00:00:00'
  clock.classList.remove('paused')
  pause.innerHTML = 'pausar'
  start.classList.remove('started')
  clearInterval(timer)
  started = false
  seconds = 0
  secs = 0

}

start.addEventListener('click', clickStart)
pause.addEventListener('click', clickPause)
clear.addEventListener('click', clickClear)
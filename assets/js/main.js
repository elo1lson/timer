function getSeconds(sec) {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
let seconds = 0
let secs = 0
let started
const pause = document.querySelector('.pausar')
const clock = document.querySelector('.clock')

function startClock(sec) {

    timer = setInterval(function () {
        sec++;
        clock.innerHTML = getSeconds(sec);
        secs++
    }, 1000);
}
function checkPause() {
    if (clock.classList.contains('paused')) {
        pause.innerHTML = 'pausar'
        clock.classList.remove('paused')
    }
}

document.addEventListener('click', (e) => {
    let el = e.target
    if (el.classList.contains('iniciar')) {
        if (started) return
        checkPause()
        startClock(seconds)
        started = true
    }
    if (el.classList.contains('pausar')) {

        if (pause.innerHTML == 'retomar') {
            pause.innerHTML ='pausar'
            console.log(secs);
            clock.style.animation = 'none'
            startClock(secs)
            return
        }
        clearInterval(timer)
        clock.classList.add('paused')
        pause.innerHTML = 'retomar'
    }
    if (el.classList.contains('zerar')) {
        started = false
        clearInterval(timer)
        clock.innerHTML = '00:00:00'
    }
}
)
const trafficLight = document.querySelectorAll('.traffic-light')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

function time() {
    let redTime = setInterval(() => {
        red.style.background = 'red'
        yellow.style.background = '#ccc'
        green.style.background = '#ccc'
    }, 2000)
    let yellowTime = setInterval(() => {
        yellow.style.background = 'yellow'
        red.style.background = '#ccc'
        green.style.background = '#ccc'
    }, 4000)

    let greenTime = setInterval(() => {
        green.style.background = 'green'
        yellow.style.background = '#ccc'
        red.style.background = '#ccc'
    }, 6000)
}
time()






















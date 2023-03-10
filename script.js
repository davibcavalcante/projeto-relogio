
let interval = setInterval(() => {
    function twoDigits(digit) {
        if (digit < 10) {
            return `0${digit}`
        } else {
            return digit
        }
    }

    let data = new Date()
    let hour = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    if (hour < 6) {
        document.body.style.backgroundImage = "url('imagens/madrugada.jpg')"
    } else if (hour < 12) {
        document.body.style.backgroundImage = "url('imagens/manha.jpg')"
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('imagens/tarde.jpg')"
    } else if (hour > 0) {
        document.body.style.backgroundImage = "url('imagens/noite.jpg')"
    }
    document.getElementById('hora').innerHTML = `${twoDigits(hour)}:${twoDigits(min)}:${twoDigits(sec)}`
}, 1000)














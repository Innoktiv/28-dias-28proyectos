const textoCargado = document.querySelector('.textoCargado')
const bg = document.querySelector('.bg')

let carga = 0

 let int = setInterval(blurr, 30)

function blurr () {
    carga++

    if(carga > 99) {
        clearInterval(int)
    }

    textoCargado.innerText = `${carga}%`
    textoCargado.style.opacity = scale(carga, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(carga, 0, 100, 30, 0)}px)`
} 

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
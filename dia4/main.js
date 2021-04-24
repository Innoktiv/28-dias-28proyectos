const busqueda = document.querySelector('.busqueda')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    busqueda.classList.toggle('active')
    input.focus()
})
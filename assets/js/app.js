import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input, textarea')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

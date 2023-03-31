export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.contato__input--mensagemErro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.contato__input--mensagemErro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    assunto: {
        valueMissing: 'O campo de email não pode estar vazio.',
    },
    mensagem: {
        valueMissing: 'O campo de email não pode estar vazio.',
    }
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tipoDeInput][erro]
            input.parentElement.classList.add('contato__input--PaddingmensagemErro')
        }
    })
    
    return mensagem
}


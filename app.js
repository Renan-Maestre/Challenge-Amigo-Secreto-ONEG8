// Array com os nomes
let nomesLista = []
// Pegando os elemntos do HTML e guardando em variavel
let input = document.getElementById('amigo')
let lista = document.getElementById('listaAmigos')


function adicionarAmigo() {
    let nome = input.value
    if (nome.trim() == '') {
        alert('Adicone Algum nome por favor!')
    } else {
        // Criando um novo elemnto LI para depois adicionar a lista
        let novoItemDaLista = document.createElement('li')
        novoItemDaLista.textContent = nome

        // Adicionando a lista o novo elemento criado
        lista.appendChild(novoItemDaLista)


        // adicionando a um array os nomes que já foram digitados
        nomesLista.push(nome)

        //Limpando o campo para poder digitar novamente 
        input.value = ''

    }

}

function sortearAmigo() {
    let resultadoElemento = document.getElementById('resultado')
    let quatidadeDeNomes = nomesLista.length

    let numeroAleatorio = parseInt(Math.random() * quatidadeDeNomes)


    let itens = lista.getElementsByTagName('li')

    for (var i = 0; i < itens.length; i++) {
        itens[i].style.display = 'none'
    }

    let resultado = document.createElement('li')
    resultado.textContent = `O Nome sorteado foi "${nomesLista[numeroAleatorio]}`

    // Adicionando a lista o novo elemento criado
    resultadoElemento.appendChild(resultado)



}

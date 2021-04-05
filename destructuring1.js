const pessoa = {
    nome: 'Wesley',
    idade: 17,
    endereco: {
        lugradouro: 'Rua sebatião pires pinto',
        numero: 202
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const { endereco:{lugradouro, numero}} = pessoa
console.log( lugradouro, numero)
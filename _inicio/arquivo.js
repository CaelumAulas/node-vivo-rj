// Formas de declarar variáveis
// Sempre que o valor for mudar, use let
let pessoa = 'Mario'
pessoa = 0
console.log(pessoa)

// CONST
const teste = 'alo alo w brazil'
// teste = 'x'

// Funções
function nomeMaisCurtoPraUmBloco(argumento1) {
    console.log(argumento1)
    console.log('ashusau')
    console.log('ashusau')
    console.log('ashusau')
}
let funcao = nomeMaisCurtoPraUmBloco
console.log(funcao)

nomeMaisCurtoPraUmBloco('valor do argumento 1')

// Estruturas de Dados
const mario = { nome: 'Mario', idade: 20, andar: function andar() {} }
const nomes = [ mario, 'Amanda' ]

console.log(nomes[0])
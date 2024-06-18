// Objetos (Object)

let pessoa = {
  nome: 'Rodrigo',
  idade: 25,
  profissao: "Desenvolvedor"
}

console.log(pessoa.nome)
console.log(pessoa['idade'])

// Array
let frutas = ["maçã", "banana", "laranja"]
console.log(frutas[0])
console.log(frutas[2])

// Objetos dentro de Arrays

let alunos = [
  { nome: 'Ana', idade: 20 },
  { nome: 'Carlos', idade: 22 }
]

console.log(alunos[0].nome)

// Arrays dentro de Objetos

let classe = {
  turma: 'A',
  alunos: ['Rodrigo', 'Ana', 'Carlos']
}

console.log(classe.alunos)

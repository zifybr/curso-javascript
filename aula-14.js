// for of

let numeros = [10, 20, 30, 40, 50]

// for (const item of numeros) {
//   console.log(item)
// }

// for in 

const pessoa = {
  primeiroNome: 'Rodrigo',
  ultimoNome: 'Novais',
  idade: 25
}

// for (const item in pessoa) {
//   console.log(item + ': ' + pessoa[item])
// }

// for (const item of pessoa) {
//   console.log(item)
// }

for (const numero in numeros) {
  console.log(numero)
}

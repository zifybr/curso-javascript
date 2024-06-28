// ## Variável de bloco

// if (true) {
//   const exemplo = 'Olá' 
//   console.log(exemplo) // Retorna Olá
// }
// console.log(exemplo) // Retorna erro - variável exemplo não foi definida

// ## Variável global

// const exemplo = 'Olá'

// if (true) {
//   console.log(exemplo) // Retorna Olá
// }

// console.log(exemplo) // Retorna Olá

// Escopo de função

function saudacao() {
  const exemplo = 'Olá'
  console.log(exemplo)
}

saudacao() // Retorna Olá
console.log(exemplo) // Retorna erro, variável exemplo não foi definido.

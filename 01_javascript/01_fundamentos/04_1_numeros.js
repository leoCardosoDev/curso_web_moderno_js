// Ponto flutuante com (1.0 ou 2.0) são considerados inteiros
const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// Ponto flutuante com (1.1 ou 2.1) não são considerados como inteiros
const peso3 = 1.1
const peso4 = Number('2.1')
console.log(peso3, peso4)
console.log(Number.isInteger(peso3))
console.log(Number.isInteger(peso4))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) // transforma em binário

console.log(typeof media)

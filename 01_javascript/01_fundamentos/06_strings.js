const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))
console.log(escola.indexOf('4'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log(escola.substring(escola.length -3)) // pega os 3 últimos
console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, '3'))
console.log(escola.replace(/\w/g, 'E'))

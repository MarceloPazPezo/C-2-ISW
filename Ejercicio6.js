// Funciones
console.log('-'.repeat(50))
console.log('Ejercicio 1: Mayusculas')
function stringMayusculas(string) {
    return string.toUpperCase()
}
const a = 'hola'
console.log(a, ' =>', stringMayusculas(a))

console.log('-'.repeat(50))
console.log('Ejercicio 2: Minusculas')
function stringMinusculas(string) {
    return string.toLowerCase()
}
const b = 'HOLA'
console.log(b, ' =>', stringMinusculas(b))

console.log('-'.repeat(50))
console.log('Ejercicio 3: Resta')
const resta = (n1, n2) => {
    return n1 - n2
}
const c = 10
const d = 5
console.log(c, '- ', d, '= ', resta(c, d))

console.log('-'.repeat(50))
console.log('Ejercicio 4: Division')
const division = (n1, n2) => {
    return n1 / n2
}
const e = 20
const f = 2
console.log(e, '/ ', f, '= ', division(e, f))

console.log('-'.repeat(50))
console.log('Ejercicio 5: Division')
const multiplicacion = (n1, n2) => {
    return n1 * n2
}
const g = 10
const h = 5
console.log(g, 'x ', h, '= ', multiplicacion(g, h))

console.log('-'.repeat(50))
console.log('Ejercicio 6: Largo de una cadena')
function largoCadena(string) {
    return string.length
}
const i = 'pepito'
console.log(i, '=> ', largoCadena(i))
// Condicionales
const numero1 = 10
const numero2 = 20
const numero3 = 30

console.log('-'.repeat(50))
console.log('Ejercicio 1:')
if (numero1 > numero2 && numero1 > numero3) {
    console.log('El numero mayor es numero1 =', numero1)
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log('El numero mayor es numero2 =', numero2)
} else {
    console.log('El numero mayor es numero3 =', numero3)
}

console.log('-'.repeat(50))
console.log('Ejercicio 2:')
if (numero1 < numero2 && numero1 < numero3) {
    console.log('El numero menor es numero1 =', numero1)
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log('El numero menor es numero2 =', numero2)
} else {
    console.log('El numero menor es numero3 =', numero3)
}

console.log('-'.repeat(50))
console.log('Ejercicio 3:')
if (numero1 % 2 == 0) {
    console.log('El numero1 es par : ', numero1)
} else {
    console.log('El numero1 es impar : ', numero1)
}

console.log('-'.repeat(50))
console.log('Ejercicio 4:')
if (numero2 % 2 == 0) {
    console.log('El numero2 es par : ', numero2)
} else {
    console.log('El numero2 es impar : ', numero2)
}

console.log('-'.repeat(50))
console.log('Ejercicio 5:')
if (numero3 % 2 == 0) {
    console.log('El numero3 es par : ', numero3)
} else {
    console.log('El numero3 es impar : ', numero3)
}

console.log('-'.repeat(50))
console.log('Ejercicio 6:')
if (numero1 % 5 == 0) {
    console.log('El numero1 SI es multiplo de 5.')
} else {
    console.log('El numero1 NO es multiplo de 5.')
}

console.log('-'.repeat(50))
console.log('Ejercicio 7:')
if (numero2 % 5 == 0) {
    console.log('El numero2 SI es multiplo de 5.')
} else {
    console.log('El numero2 NO es multiplo de 5.')
}
console.log('-'.repeat(50))
console.log('Ejercicio 8:')
if (numero3 % 5 == 0) {
    console.log('El numero3 SI es multiplo de 5.')
} else {
    console.log('El numero3 NO es multiplo de 5.')
}
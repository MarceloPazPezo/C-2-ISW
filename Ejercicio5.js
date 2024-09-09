// Ciclos
console.log('-'.repeat(50))
console.log('Ejercicio 1: números del 1 al 10')
for (let i=1; i<=10; i++) {
    console.log(i)
}

console.log('-'.repeat(50))
console.log('Ejercicio 2: números del 10 al 1')
for (let i=10; i>0; i--) {
    console.log(i)
}

console.log('-'.repeat(50))
console.log('Ejercicio 3: números del 1 al 10 pero solo los pares')
for (let i=1; i<=10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log('-'.repeat(50))
console.log('Ejercicio 4: números del 1 al 10 pero solo impares')
for (let i=1; i<=10; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

console.log('-'.repeat(50))
console.log('Ejercicio 5: números del 1 al 10 pero solo los múltiplos de 3')
for (let i=1; i<=10; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

console.log('-'.repeat(50))
console.log('Ejercicio 6: números del 1 al 10 pero solo los múltiplos de 5')
for (let i=1; i<=10; i++) {
    if (i % 5 == 0) {
        console.log(i)
    }
}

console.log('-'.repeat(50))
console.log('Ejercicio 7: números del 1 al 10 pero solo los múltiplos de 3 y 5')
for (let i=1; i<=10; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i)
    }
}

console.log('-'.repeat(50))
console.log('Ejercicio 8: números del 1 al 10 pero solo los múltiplos de 3 o 5')
for (let i=1; i<=10; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i)
    }
}
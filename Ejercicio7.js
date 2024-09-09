// Arrays
console.log('-'.repeat(50))
console.log('Ejercicio 1: suma de todos los elementos')
function sumaVector(v) {
    let resultado = 0
    v.forEach(elemento => {
        resultado += elemento
    })
    return resultado
}
const vector1 = [1,2,3,4,5]
console.log(sumaVector(vector1))

console.log('-'.repeat(50))
console.log('Ejercicio 2: promedio de todos los elementos')
function promedioVector(v) {
    return sumaVector(v) / v.length
}
const vector2 = [2,4,10,6,8]
console.log(promedioVector(vector2))

console.log('-'.repeat(50))
console.log('Ejercicio 3: arreglo de mayusculas')
function mayusculaVector(v) {
    let nuevoVector = []
    v.forEach(e => {
        nuevoVector.push(e.toUpperCase())
    })
    return nuevoVector
}
const vector3 = ['hola','mundo','en','javascript']
console.log(mayusculaVector(vector3))

console.log('-'.repeat(50))
console.log('Ejercicio 4: arreglo solo pares')
function soloParesVector(v) {
    let nuevoVector = []
    v.forEach(e => {
        if (e % 2 == 0) {
            nuevoVector.push(e)
        }
    })
    return nuevoVector
}
const vector4 = [1,2,3,4,5,6,7,8,9,10]
console.log(soloParesVector(vector4))
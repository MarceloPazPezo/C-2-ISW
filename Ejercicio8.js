// Objetos
console.log('-'.repeat(50))
console.log('Ejercicio 1: Persona')
const persona = {
    nombre: "Pepito",
    edad: 22,
    genero: "Macho pecho peludo"
}
console.log('Nombre: ', persona.nombre)
console.log('Edad :', persona.edad)
console.log('Genero :', persona.genero)

console.log('-'.repeat(50))
console.log('Ejercicio 2: Caja')

const caja = {
    cuardernos: ['Algebra lineal','Ondas'],
    lapices: ['Bic Azul', 'Portaminas'],
    papel: 'Nose jaja',
    fotografías: ['f1', 'f2'],
    estadoBueno: false
}
console.log('Lista de cuadernos: ', caja.cuardernos)
console.log('Lista de lapices: ', caja.lapices)
console.log('Papel:', caja.papel)
console.log('Lista de fotografias', caja.fotografías)
console.log('Estado de la caja:', caja.estadoBueno == true ? 'Bueno' : 'Malo')
console.log(typeof caja.cuardernos)
console.log(typeof caja.lapices)
console.log(typeof caja.papel)
console.log(typeof caja.fotografías)
console.log(typeof caja.estadoBueno)
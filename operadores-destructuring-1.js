//nuevo recurso ES2015

const persona = {
    nombre: 'mathias',
    edad: 2,
    direccion: {
        calle: 'Urbanización Pachacamac',
        numero: 13
    }
}

console.log(persona)

const {nombre, edad} = persona
console.log(nombre, edad)

//modificar el nombre de las variables nombre, edad
const {nombre: n, edad: e} = persona
console.log(n, e)

//atributo que no existe dentro del objeto
//asignar valor default
const {alias, valido = true} = persona
console.log(alias, valido)

const {direccion: {calle, numero, referencia}} = persona
console.log(calle, numero, referencia)

//cuidado con acceder a atributos que no existen en forma anidada.
//const {conta: {agencia, num}} = persona
//TypeError: Cannot destructure property `agencia` of 'undefined' or 'null'.

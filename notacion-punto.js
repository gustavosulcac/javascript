console.log(typeof console) //object
console.log(Math.ceil(6.3))

const obj1 = {}

obj1.nombre = 'laptop'   //<> obj1['nombre'] = 'macbook'

console.log(obj1)
console.log(obj1.nombre)

function Obj(nombre){
    this.nombre = nombre
    this.exec = function(){
        console.log('Exec..')
    }
}

const obj2 = new Obj('mouse')
const obj3 = new Obj('monitor')

console.log(obj2)
console.log(obj3)

console.log(obj2.nombre)
console.log(obj3.nombre)

obj3.exec()

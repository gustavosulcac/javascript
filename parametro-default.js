//estrategia{1} para generar valor default
function suma1(a, b ,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(suma1(), suma1(3), suma1(1,2,3), suma1(0,0,0))

//estrategia{2,3,4} para generar valor default
function suma2(a, b, c){
    a = a !== undefined ? a : 1
    //1: indice{1}
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(suma2(), suma2(3), suma2(1,2,3), suma2(0,0,0))

//valor default de ES 2015
function suma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(suma3(), suma3(3), suma3(1,2,3), suma3(0,0,0))

function getEnteroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcion = 0
//opcion =-1

while(opcion != -1){
    opcion = getEnteroAleatorio(-1, 10)
    console.log(`Opción seleccionada es: ${opcion}`)
}

console.log('Hasta luego')

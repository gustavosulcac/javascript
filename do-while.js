function getEnteroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcion =-1

do {
    opcion = getEnteroAleatorio(-1, 10)
    console.log(`Opción seleccionada es: ${opcion}`)
} while(opcion != -1)

console.log('Hasta luego')

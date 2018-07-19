{
    {
        {
            {
                var sera = 'sera?'
                console.log(sera)
            }
        }
    }
}
console.log(sera)

//una variable var tiene scope global o de funcion
function saludo(){
    var local = 123
    console.log(local)
}

saludo()
//console.log(local)
//ReferenceError: local is not defined

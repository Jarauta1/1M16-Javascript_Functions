let num1
let num2
let resultado
function division (num1,num2) {
    resultado = num1/num2
    return resultado
}

do {
    num1 = parseInt(window.prompt("Escribe un número"))
    num2 = parseInt(window.prompt("Escribe otro número"))
    division (num1,num2)
    window.alert(resultado)
} while ( num2 !== 0)
let num1 = parseInt(window.prompt("Escribe un número"))
let num2 = parseInt(window.prompt("Escribe otro número"))
let resultado = mayor(num1, num2)
function mayor(num1, num2) {
    if (num1 > num2) {
        return true
    }
    else if (num1 < num2) {
        return false
    }
}

resultado ? console.log("El primer número es el más grande") : console.log("El primer número no es el más grande")
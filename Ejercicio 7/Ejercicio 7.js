let num1 = parseInt(window.prompt("Escribe un número"))
let par
function esPar(num1) {
    if (num1 % 2 == 0) {
        return par = "El número es par"
    } else {
        return par = "El número es impar"
    }
}
esPar(num1)
window.alert(par)
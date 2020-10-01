let num1
let cifras
function numCifras(num1) {
    do {
        num1 = parseInt(window.prompt("Escribe una cifra"))
        num1 = num1.toString()
        cifras = num1.length
        return cifras
    } while (num1 < 0)
}

numCifras (num1)
window.alert(`El número contiene ${cifras} cifras.`)
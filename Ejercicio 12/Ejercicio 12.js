let anyo
let cuatro
let cien
let cuatrocientos
let mensaje = ""
let cuatroString
let cienString
let cuatrocientosString
let cuatroPunto
let cienPunto
let cuatrocientosPunto

function bisiesto(anyo) {
    cuatro = anyo / 4
    cien = anyo / 100
    cuatrocientos = anyo / 400
    cuatroString = cuatro.toString()
    cienString = cien.toString()
    cuatrocientosString = cuatrocientos.toString()
    cuatroPunto = cuatroString.indexOf(".")
    cienPunto = cienString.indexOf(".")
    cuatrocientosPunto = cuatrocientosString.indexOf(".")
    if (cuatroPunto < 0) {
        if (cienPunto > 0 && cuatrocientosPunto > 0) {
            mensaje = `<p>El año ${anyo} es bisiesto</p>`
            return mensaje
        } else {
            mensaje = `<p>El año ${anyo} no es bisiesto</p>`
            return mensaje
        }
    } else {
        mensaje = `<p>El año ${anyo} no es bisiesto</p>`
        return mensaje
    }
}
do {
    anyo = parseInt(window.prompt("Escribe un año."))
    bisiesto(anyo)
    document.getElementById("div1").innerHTML = mensaje
} while (anyo != 0)
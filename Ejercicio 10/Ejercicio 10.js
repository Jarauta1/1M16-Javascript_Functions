let figura = window.prompt("¿Que figura quieres para calcular el área? (círculo, cuadrado o triángulo").toLowerCase()
let resultado
let radio
let base
let altura
let lado

function areaCirculo(radio) {
    resultado = (radio * radio) * 3.1415
    return resultado
}

function areaTriangulo(base, altura) {
    resultado = (base * altura) / 2
    return resultado
}

function areaCuadrado(lado) {
    resultado = lado * lado
    return resultado
}

if (figura == "círculo") {
    radio = parseInt(window.prompt("Indica la medida del radio"))
    areaCirculo(radio)
}
else if (figura == "triángulo") {
    altura = parseInt(window.prompt("Indica la medida de la altura"))
    base = parseInt(window.prompt("Indica la medida de la base"))
    areaTriangulo(base, altura)
}
else if (figura == "cuadrado") {
    lado = parseInt(window.prompt("Indica la medida de un lado"))
    areaCuadrado(lado)
}

document.getElementById("div1").innerHTML = `El área del ${figura} es ${resultado}`
let euros = parseFloat(window.prompt("¿Cuántos euros quieres cambiar?"))
let moneda = window.prompt("¿A qué moneda? (dólares, yenes o libras)").toLowerCase()
let resultado
let mensaje

function conversion(euros, moneda) {
    if (moneda == "dólares") {
        resultado = euros * 1.28611
        mensaje = "<p>1.28611 $ es un 1 €</p>"
        return mensaje
        
    }
    else if (moneda == "yenes") {
        resultado = euros * 129.852
        mensaje = "<p>129.852 yenes es un 1 €</p>"
        return mensaje
    }
    else if (moneda == "libras") {
        resultado = euros * 0.86
        mensaje = "<p>0.86 libras es un 1 €</p>"
        return mensaje
    }

}

conversion(euros, moneda)

document.getElementById("div1").innerHTML = `La conversión son ${resultado}.
${mensaje}`
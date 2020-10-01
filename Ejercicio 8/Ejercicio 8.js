let num1 = parseInt(window.prompt("Escribe un número"))
let resultado = 1
function factorial (num1) {
  for (let i = 1; i <= num1; i++) {
      resultado = resultado * i
  }
}
factorial (num1)
window.alert(resultado)
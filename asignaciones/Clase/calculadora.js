function suma(numero1, numero2) {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado
}
//Mayor
function mayor(numero1, numero2) {
    var numero1 = parseFloat(document.getElementById('numero11').value);
    var numero2 = parseFloat(document.getElementById('numero22').value);

    if (numero1 > numero2) {
        document.getElementById('resultado1').value = numero1

    }
    else if (numero1 == numero2) {
        document.getElementById('resultado1').value = "son iguales"
    }
    else {
        document.getElementById('resultado1').value = numero2
    }
}
//Factorial

function factorial1() {
    var factorial = 1;

    for (var i = 1; i <= document.getElementById('numero111').value; i++) {
        factorial *= i;
    }

    document.getElementById('resultado2').value = factorial

}
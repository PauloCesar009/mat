function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultadoElement = document.getElementById('resultado');

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        var imc = peso / (altura * altura);
        var situacao = '';

        if (imc < 18.5) {
            situacao = 'Abaixo do peso';
            resultadoElement.className = 'alerta';
        } else if (imc >= 18.5 && imc < 24.9) {
            situacao = 'Peso normal';
            resultadoElement.className = 'normal';
        } else if (imc >= 25 && imc < 29.9) {
            situacao = 'Sobrepeso';
            resultadoElement.className = 'alerta';
        } else if (imc >= 30 && imc < 34.9) {
            situacao = 'Obesidade grau I';
            resultadoElement.className = 'perigo';
        } else if (imc >= 35 && imc < 39.9) {
            situacao = 'Obesidade grau II';
            resultadoElement.className = 'perigo';
        } else {
            situacao = 'Obesidade grau III';
            resultadoElement.className = 'perigo';
        }

        resultadoElement.textContent = 'Seu IMC é ' + imc.toFixed(2) + '. ' + situacao;
    } else {
        resultadoElement.textContent = 'Por favor, insira valores válidos para peso e altura.';
        resultadoElement.className = '';
    }
}

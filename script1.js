function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var media = (nota1 + nota2) / 2;
    var resultadoElement = document.getElementById('resultado');

    if (!isNaN(media)) {
        if (media >= 6) {
            resultadoElement.style.color = 'blue';
            resultadoElement.textContent = 'APROVADO';
        } else {
            resultadoElement.style.color = 'red';
            resultadoElement.textContent = 'REPROVADO';
        }
    } else {
        resultadoElement.style.color = 'black';
        resultadoElement.textContent = 'Por favor, insira valores válidos para as notas.';
    }
}

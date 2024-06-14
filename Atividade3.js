function adicionarItem() {
    var texto = document.getElementById('item').value;
    var cor = document.querySelector('input[name="cores"]:checked').value;
    var lista = document.getElementById('lista-compras');

    if (texto.trim() !== '') {
        var novoItem = document.createElement('li');
        novoItem.textContent = texto;
        novoItem.style.color = cor;
        lista.appendChild(novoItem);
        document.getElementById('item').value = ''; // Limpa o campo de texto após adicionar o item
    } else {
        alert('Por favor, insira um item válido.');
    }
}

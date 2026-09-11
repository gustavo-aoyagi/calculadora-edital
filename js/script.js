//pegar referencia ao textarea (campoTexto) - verifica o que o usuário digitou e conta
//pegar referencia ao span (contador) - atualiza o valor

const campoTexto = document.getElementById('campoTexto');
const contador = document.getElementById('contador');
const valorEdital = document.getElementById('valorEdital');
const precoPorCaractere = 0.31; //valor com base na UFESP 2026
const botaoLimpar = document.getElementById('botaoLimpar');


campoTexto.addEventListener('input', function(){
    const texto = campoTexto.value;
    const quantidade = texto.length;
    contador.textContent = quantidade;

    const valorCalculado = quantidade * precoPorCaractere;
    valorEdital.textContent = valorCalculado.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
});

botaoLimpar.addEventListener('click', function(){
    campoTexto.value = '';
    contador.textContent = 0;
    valorEdital.textContent = (0).toLocaleString('pt-BR', {
        style: 'currency',
        currency:'BRL'
    });
})
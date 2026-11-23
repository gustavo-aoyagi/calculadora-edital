//pegar referencia ao textarea (campoTexto) - verifica o que o usuário digitou e conta
//pegar referencia ao span (contador) - atualiza o valor

const campoTexto = document.getElementById('campoTexto');
const contador = document.getElementById('contador');
const valorEdital = document.getElementById('valorEdital');
const botaoLimpar = document.getElementById('botaoLimpar');
const textoAto = document.getElementById('textoAto');
const botaoCopiar = document.getElementById('botaoCopiar');

// ===== CONFIGURAÇÕES (atualizar quando o TJSP reajustar) =====
const anoExercicio = 2026;
const precoPorCaractere = 0.31; //valor com base na UFESP 2026
const prazoDias = 15;
const taxaUfesp = '0,008';
const infoAtualizacao = '23/11/2026 (Inserção do Campo "Texto para Ato Ordinatório.")'
// =============================================================

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

document.getElementById('anoExercicio').textContent = anoExercicio;
document.getElementById('precoPorCaractere').textContent = formatarMoeda(precoPorCaractere);
document.getElementById('taxaUfesp').textContent = taxaUfesp;
document.getElementById('infoAtualizacao').textContent = infoAtualizacao;

function montarTexto(quantidade, valorFormatado) {
    const precoFormatado = formatarMoeda(precoPorCaractere);
    
    return `Certifico e dou fé que procedi o cálculo do valor a ser recolhido para publicação do edital no valor de ${valorFormatado} (${taxaUfesp} UFESP = ${precoFormatado} por caractere para o exercício de ${anoExercicio}), referente a ${quantidade} caracteres (com espaços).
Parte: Providenciar, no prazo de ${prazoDias} dias, o recolhimento dos custos de publicação de editais no valor de ${valorFormatado} (${taxaUfesp} UFESP = ${precoFormatado} por caractere para o exercício de ${anoExercicio}), referente a ${quantidade} caracteres (com espaços).`;
};

campoTexto.addEventListener('input', function(){
    const texto = campoTexto.value;
    const quantidade = texto.length;
    contador.textContent = quantidade;

    const valorCalculado = quantidade * precoPorCaractere;
    const valorFormatado = formatarMoeda(valorCalculado);

    valorEdital.textContent = valorFormatado;

    if (quantidade > 0) {
        textoAto.value = montarTexto(quantidade, valorFormatado);
    } else {
        textoAto.value = '';
    }
})

botaoLimpar.addEventListener('click', function(){
    campoTexto.value = '';
    contador.textContent = 0;
    textoAto.value = '';
    valorEdital.textContent = formatarMoeda(0);
})

botaoCopiar.addEventListener('click', function(){
    if (textoAto.value === '') {
        return;
    }

    navigator.clipboard.writeText(textoAto.value).then(function() {
        botaoCopiar.textContent = 'Copiado =)';
        setTimeout(function() {
            botaoCopiar.textContent = 'Copiar texto';
        }, 2000);
    });
})
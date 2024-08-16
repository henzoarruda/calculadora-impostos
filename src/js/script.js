function atualizarPlaceholder() {
    const moeda = document.getElementById('moeda').value;
    const inputValor = document.getElementById('valor');

    if (moeda === 'reais') {
        inputValor.placeholder = 'Insira o valor em reais (R$)';
    } else {
        inputValor.placeholder = 'Insira o valor em dólares (US$)';
    }
}

function calcularImpostos() {
    const valorDolarAtual = 5.50; // 1 dólar = R$ 5,50 
    const limiteDolar = 50;
    const limiteReais = limiteDolar * valorDolarAtual; // Converte o limite de US$ 50 para reais

    const moeda = document.getElementById('moeda').value;
    let valorProdutoReais = parseFloat(document.getElementById('valor').value);
    const valorFrete = parseFloat(document.getElementById('frete').value);
    const valorSeguro = parseFloat(document.getElementById('seguro').value);
    const remessa = document.querySelector('input[name="remessa"]:checked')?.value;

    if (moeda === 'dolar') {
        valorProdutoReais *= valorDolarAtual; // Converte o valor em dólares para reais
    }

    if (isNaN(valorProdutoReais) || isNaN(valorFrete) || isNaN(valorSeguro) || valorProdutoReais <= 0 || valorFrete < 0 || valorSeguro < 0 || !remessa) {
        alert('Por favor, insira valores válidos e selecione se a compra foi feita no Remessa Conforme.');
        return;
    }

    // Calcula o valor aduaneiro
    const valorAduaneiro = valorProdutoReais + valorFrete + valorSeguro;

    // Calcula o valor do Imposto de Importação
    let impostoImportacao = 0;
    if (remessa === 'sim') {
        if (valorProdutoReais <= limiteReais) {
            impostoImportacao = valorAduaneiro * 0.20; // 20% se <= 50 dólares
        } else {
            const desconto = 20 * valorDolarAtual; // Desconto de 20 dólares em reais
            impostoImportacao = (valorAduaneiro * 0.60) - desconto; // 60% se > 50 dólares
        }
    } else {
        impostoImportacao = valorAduaneiro * 0.60; // 60% se fora do Remessa Conforme
    }

    // Calcula o valor do ICMS
    const baseCalculoICMS = (valorAduaneiro + impostoImportacao) / (1 - 0.17);
    const valorICMS = baseCalculoICMS * 0.17;

    // Calcula o valor total dos impostos
    const valorTotalImpostos = impostoImportacao + valorICMS;
    const valorProdutoComImpostos = valorProdutoReais + valorTotalImpostos;

    // Exibe os resultados detalhados
    document.getElementById('resultado').innerHTML = 
        `<div class="valor-produto">Valor do Produto: R$ ${valorProdutoReais.toFixed(2)}</div>
        <div class="icms">Valor do ICMS (17%): R$ ${valorICMS.toFixed(2)}</div>
        <div class="taxa-importacao">Taxa de Importação: ${remessa === 'sim' ? (valorProdutoReais <= limiteReais ? '20%' : '60% com desconto de US$ 20') : '60%'}</div>
        <br>
        <strong>Valor Total dos Impostos: R$ ${valorTotalImpostos.toFixed(2)}</strong>
        <div class="valor-total">Valor do Produto + Impostos: R$ ${valorProdutoComImpostos.toFixed(2)}</div>`;
}

function gerarTabuada() {
    //Obtém o valor inserido pelo usuário
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    //Limpa o resultado anterior
    resultado.innerHTML = '';

    //Verificar se o número é válido
    if (numero === '') {
        resultado.innerHTML = '<p>Por favor, insira um número válido</p>';
        return;
    }


/* Gera a tabuada usando um loop */
    for (let i = 1; i <= 10 ; i++) {
        //calcula o valor da multiplicação
        const multiplicacao = numero * i;

        //cria um novo parágrafo para exibir o resultado
        const linha = document.createElement('p');
        const hr = document.createElement('hr');
        linha.textContent = `${numero} x ${i} = ${multiplicacao}`;
        //adiciona o parágrafo ao container de resultado
        resultado.appendChild(linha);
        resultado.appendChild(hr);
    }
}
function sum(a, b) { // define a função soma com duas incognitas a e b
    return a + b; // retorna a soma de a e b; não precisa de console.log() dentro da função, pois o retorno é feito para a função que chamou a função sum
}

console.log(sum(5, 3)); //8

function product(a, b) { // define a função produto com duas incognitas a e b
    return a * b; // retorna o produto de a e b; não precisa de console.log() dentro da função, pois o retorno é feito para a função que chamou a função product
}

console.log(product(11, 11));

const bigproduct = product(5353, 134534); // armazena a multiplicação na varriável bigproduct
console.log(bigproduct); // exibe no console o valor armazenado na variável bigproduct

setTimeout(function () { // função anônima que será executada após 1000 milissegundos (1 segundo)
    console.log("mamãe eu quero codar!!"); // os parenteses duplos chamam a função console.log() e exibem a mensagem "mamãe eu quero codar!!" no console
}, 1000);

setTimeout(() => console.log("mamãe eu quero codar!!"), 1000); // função anônima chamada de arrow functon, a seta chama a função console.log() e exibe a mensagem "mamãe eu quero codar" no console após 1000 milissegundos (1 segundo)
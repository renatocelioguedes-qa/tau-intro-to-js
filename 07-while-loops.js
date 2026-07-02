let fatorial = 1;
let numero = 5;
let original = numero;

do {
    fatorial = fatorial * numero;
    numero--
} while (numero > 0);
 
console.log(original + " fatorial é: " + fatorial);
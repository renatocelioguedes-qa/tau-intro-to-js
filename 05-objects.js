const cookie = { // criação do objeto cookie com as propriedades name, isGlutenFree e +yammy
    name: "Chocolate Chip",
    isGlutenFree: true,
    //"+yammy": true
    eatCookie: function () {
        console.log("I am eating " + this.name); 
    }
};

cookie.name = "Chip Chocolate"; // alteração do valor da propriedade name
cookie.isGlutenFree = false; // alteração do valor da propriedade isGlutenFree
//console.log(cookie["+yammy"]); // exibe o valor da propriedade +yammy do objeto cookie
//console.log(cookie); // exibe o objeto cookie atualizado com as alterações feitas nas propriedades name e isGlutenFree
cookie.eatCookie(); // chama o método eatCookie do objeto cookie, que exibe a mensagem "I am eating Chip Chocolate" no console

class Cookie {
    constructor(name, isGlutenFree) { // definição do construtor da classe Cookie, que recebe os parâmetros name e isGlutenFree
        this.name = name; // atribuição do valor do parâmetro name à propriedade name da instância da classe
        this.isGlutenFree = isGlutenFree; // atribuição do valor do parâmetro isGlutenFree à propriedade isGlutenFree da instância da classe
    }
    eatCookie() {
        console.log(" I am eating " + this.name); // método eatCookie da classe Cookie, que ex
    }
}
const myCookie = new Cookie("nutella", false); // criação de uma instância da classe Cookie

myCookie.eatCookie(); // chamada do método eatCookie da instância myCookie, que exibe a mensagem "I am eating nutella" no console
console.log(myCookie["name"]); // exibe a instância myCookie da classe Cookie, que é um objeto vazio, pois a classe não possui propriedades ou métodos definidos.


const car = {
    price: 1999,
    color: "verde",
    numPortas: 4
};

if (car.price < 2000 && car.color === "vermelho" && 
    car.numPortas === 4) {
        console.log("Pode comprar o carro");
    } else {
        console.log("vamos procurar outro carro");
    }
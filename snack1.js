function somma(numero1, numero2){
    const sommaTotale = numero1 + numero2;
    return sommaTotale;
}

console.log(somma(2, 2));

const sommaAnonima = function(numero1, numero2){
    const somma = numero1 + numero2;
    return somma;
}
console.log(sommaAnonima(5, 5));


const sommaArrow = (numero1, numero2) => numero1 + numero2;
console.log(sommaArrow(2, 4));
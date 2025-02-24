const somma = (numero1, numero2) => numero1 + numero2;
const moltiplica = (numero1, numero2) => numero1 * numero2; 


function eseguiOperazione(numero1, numero2, callback){
    return callback(numero1, numero2);
}

console.log(eseguiOperazione(3, 5, somma));
console.log(eseguiOperazione(6, 8, moltiplica));
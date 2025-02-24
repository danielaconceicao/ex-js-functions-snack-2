function creaThrottler(func, limite){
    let ultimaEsecuzione = 0

    return function(...args){
        const ora = Date.now();

        if(ora - ultimaEsecuzione >= limite){
            ultimaEsecuzione = ora;
            func(...args);
        }else{
            console.log('Non posso eseguire')
        }
    }
}

const throttlerLog = creaThrottler(() => console.log('Eseguito!'), 2000);

throttlerLog();
throttlerLog();
setTimeout(throttlerLog, 2500);
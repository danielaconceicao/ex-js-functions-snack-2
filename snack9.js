function sequenzaOperazione(operazioni, tempo) {
    operazioni.forEach((fn, index) => {
        setTimeout(() => {
            fn()
        }, tempo * index)
    })
}

sequenzaOperazione([
    () => console.log('operazione 1'), 
    () => console.log('operazione 2'), 
    () => console.log('operazione 3')
], 2000);


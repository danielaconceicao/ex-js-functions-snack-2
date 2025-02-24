function creaContatoreAutomatico(tempo){
    let cont = 0
    const intervaloId = setInterval(() => {
        cont++;
        console.log(cont);
    }, tempo);

    return intervaloId;
}

creaContatoreAutomatico(1000); 


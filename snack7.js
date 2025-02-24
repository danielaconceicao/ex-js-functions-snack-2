function eseguiEFerma(message, avvio, stop){
    const intervalId = setInterval(() => console.log(message), avvio);
    setTimeout(() => clearInterval(intervalId), stop);
}

eseguiEFerma('tomar no cu outra vez', 3000, 20000);
/* function contoAllaRovescia(n) {
    if (n === 0){
        console.log('tempo scaduto!');
        return;
    };

    console.log(n);
    
    setTimeout(() => {
        contoAllaRovescia(n - 1)
    }, 1000);
}

contoAllaRovescia(5); */

function contoAllaRovescia(n){
    let counter = n;

    const intervalId = setInterval(() => {
        if (counter > 0){
            console.log(counter);
            counter --;
        }else{
            console.log('tempo scaduto');
            clearInterval(intervalId)
        }
    }, 1000);
}

contoAllaRovescia(5);
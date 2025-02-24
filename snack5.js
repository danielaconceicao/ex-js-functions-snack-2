/* function stampaOgniSecondo(message){
    console.log(message);
}

const myInterval = setInterval(() => stampaOgniSecondo('tomar no cu'), 5000);

setTimeout(() => clearInterval(myInterval), 20000); */

function stampaOgniSecondo(message) {
    setInterval(() => {
        console.log(message);
    }, 1000)
}

stampaOgniSecondo('ta indo...');
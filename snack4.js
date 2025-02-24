function creaTimer(tempo){
    return setTimeout(() => { console.log('tempo scaduto!')}, tempo);
}

console.log(creaTimer(4000))


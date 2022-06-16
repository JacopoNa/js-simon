// SIMON SAYS
// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// -------------------------------------------------------
// FUNZIONI

// funzione che genera numeri random (in un range) e li aggiunge ad un array vuoto, solo se il numero generato non è gia presente nell'array
function generateRandom(minRange, maxRange, totalNumbers) {
    let casualArray = [];

    // nel while genero un numero random tante volte quanto la lunghezza di "totalNumbers" e lo pusho nell'array vuoto solo se il numero non è già presente
    while(casualArray.length < totalNumbers) {
        let randomNumb = getRndInteger(minRange, maxRange);

        if (!casualArray.includes(randomNumb)) {
            casualArray.push(randomNumb)
        } 
   }

   return casualArray;
}

// funzione che genera numeri random
function getRndInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// ------------------------------------------------------------

// array numeri inseriti dall'utente da popolare
let userNumbers = []

// array di numeri casuali
casualArray = generateRandom(1, 50, 5);

// alert di numeri
const casualAlert = prompt(casualArray);

setTimeout (function() {
    alert('ciao')
}, 3000);
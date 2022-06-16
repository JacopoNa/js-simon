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
console.log('casual array', casualArray);

// array risultato
let resultArray = [];

// alert di numeri
const casualAlert =parseInt(prompt(casualArray));

// utente inserisce 5 numeri alla volta dopo 30 secondi dalla chiusura del primo prompt
setTimeout (function() {
    let userPrompt;

    for(let i = 0; i < 5; i++) {
        userPrompt = parseInt(prompt('inserisci il numero'));
        // pusho i numeri inseriti dall'utente in un array
        userNumbers.push(userPrompt);
    }

    console.log('numeri inseriti utente', userNumbers)

    // ciclo for per esaminare ogni numero inserito dall'utente
    for (let i = 0; i < userNumbers.length; i++) {
        const userElement = userNumbers[i];
        
        // se il numero inserito dall'utente è presente nell'array dei numeri casuali allora lo pusho in un array che determina i numeri indovinati dall'utente
        if(casualArray.includes(userElement)) {
            resultArray.push(userElement);
        }
    }
    alert('Hai indovinato ' + resultArray.length + ' numeri, e sono: ' + resultArray);

}, 30000);




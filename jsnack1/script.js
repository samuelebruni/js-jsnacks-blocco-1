// Snack 1: L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.



/* const numberOne = Number(prompt('Inserisci il primo numero'))
const numberTwo = Number(prompt('Inserisci il secondo numero'))

console.log('Il primo numero è ', numberOne, 'mentre il secondo numero è ', numberTwo);

if (numberOne < numberTwo){
    document.querySelector('h1').innerHTML = `IL NUMERO MAGGIORE SELEZIONATO è`+ ' ' +  numberTwo;
    console.log(numberTwo, 'è maggiore di', numberOne);
} else if (numberOne > numberTwo){
    document.querySelector('h1').innerHTML = `IL NUMERO MAGGIORE SELEZIONATO è`+ ' ' +  numberOne;
    console.log(numberOne, 'è maggiore di', numberTwo);
} else{
    document.querySelector('h1').innerHTML = `Il primo numero che hai selezionato`+ ' ' + numberTwo + ' ' + 'ha lo stesso valore del secondo numero che hai selezionato' + ' ' + numberOne;
    console.log(numberOne, 'ha lo stesso valore di', numberTwo);
} */

//Da fare con WHILE tutti I prossimi snacks. Snack 1. L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

let i = 0
while (i < 1){
    
    const numberOne = Number(prompt('Inserisci il primo numero'))
    const numberTwo = Number(prompt('Inserisci il secondo numero'))
    console.log('Il primo numero è ', numberOne, 'mentre il secondo numero è ', numberTwo);

    i++

    if (numberOne < numberTwo){
        
        document.querySelector('h1').innerHTML = `IL NUMERO MAGGIORE SELEZIONATO è`+ ' ' +  numberTwo;
        console.log(numberTwo, 'è maggiore di', numberOne);

    } else if (numberOne > numberTwo){
        
        document.querySelector('h1').innerHTML = `IL NUMERO MAGGIORE SELEZIONATO è`+ ' ' +  numberOne;
        console.log(numberOne, 'è maggiore di', numberTwo);

    } else {

        document.querySelector('h1').innerHTML = `Il primo numero che hai selezionato`+ ' ' + numberTwo + ' ' + 'ha lo stesso valore del secondo numero che hai selezionato' + ' ' + numberOne;
        console.log(numberOne, 'ha lo stesso valore di', numberTwo);

    }
}


//finish
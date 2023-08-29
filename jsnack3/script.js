//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.


let result = 0;

for (let i = 0; i < 10; i++) {
    const input = Number(prompt(`Inserisci un numero numero`));
    result += input;

    console.log(input);
}

console.log('La somma di tutti i numeri che hai inserito è ' , result);

document.querySelector('h1').innerHTML = 'LA SOMMA DI TUTTI I NUMERI CHE HAI INSERITO è' + ' ' + result;


//finish
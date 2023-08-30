// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.


/*const first = prompt('Inserisci la prima parola');
const second = prompt('Inserisci la seconda parola');

console.log('La prima parola è ', first, 'mentre la seconda parola è ', second);

let wordOne = first.length;
let wordTwo = second.length;
console.log('IL NUMERO CARATTERI DELLA PRIMA PAROLA:', wordOne, 'MENTRE IL NUMERO DEI CARATTERI DELLA SECONDA PAROLA:', wordTwo);

if (wordOne < wordTwo){
    document.querySelector('h1').innerHTML = `LA PAROLA PIù CORTA INSERITA è`+ ' ' +  first + ' ' + 'MENTRE LA PAROLA PIù LUNGA INSERITA è' + ' ' + second;
    console.log(second, 'ha più caratteri rispetto a ', first);
} else if (wordOne > wordTwo){
    document.querySelector('h1').innerHTML = `LA PAROLA PIù CORTA INSERITA è`+ ' ' +  second + ' ' + 'MENTRE LA PAROLA PIù LUNGA INSERITA è' + ' ' + first;
    console.log(first, 'ha più caratteri rispetto a ', second);
} else{
    document.querySelector('h1').innerHTML = `La prima parola che hai selezionato`+ ' ' + first + ' ' + 'ha lo stesso numero di caratteri della seconda parola che hai selezionato' + ' ' + second;
    console.log(first, 'ha lo stesso numero di caratteri di', second);
}*/


//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

let i = 0;
while (i < 1){

    const first = prompt('Inserisci la prima parola');
    const second = prompt('Inserisci la seconda parola');

    console.log('La prima parola è ', first, 'mentre la seconda parola è ', second);

    let wordOne = first.length;
    let wordTwo = second.length;
    console.log('IL NUMERO CARATTERI DELLA PRIMA PAROLA:', wordOne, 'MENTRE IL NUMERO DEI CARATTERI DELLA SECONDA PAROLA:', wordTwo);

    if (wordOne < wordTwo){

        document.querySelector('h1').innerHTML = `LA PAROLA PIù CORTA INSERITA è`+ ' ' +  first + ' ' + 'MENTRE LA PAROLA PIù LUNGA INSERITA è' + ' ' + second;
        console.log(second, 'ha più caratteri rispetto a ', first);

    } else if (wordOne > wordTwo){

        document.querySelector('h1').innerHTML = `LA PAROLA PIù CORTA INSERITA è`+ ' ' +  second + ' ' + 'MENTRE LA PAROLA PIù LUNGA INSERITA è' + ' ' + first;
        console.log(first, 'ha più caratteri rispetto a ', second);

    } else {

        document.querySelector('h1').innerHTML = `La prima parola che hai selezionato`+ ' ' + first + ' ' + 'ha lo stesso numero di caratteri della seconda parola che hai selezionato' + ' ' + second;
        
        console.log(first, 'ha lo stesso numero di caratteri di', second);
    
    }

    i++
}


//finish
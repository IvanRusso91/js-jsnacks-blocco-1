/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

//-----------------------------------------------------

const stampa = document.getElementById('box');
let serbatoio = [];
let numero = parseInt(prompt('inserisci un numero'));

for(let i = 0; i < numero; i++){

  let cubo = i * i * i ;
  serbatoio.push(cubo); 

  stampa.innerHTML = `il numero che hai scelto è ${numero} e questi sono tutti i cubi dei numeri precendenti ${serbatoio}`; 

}


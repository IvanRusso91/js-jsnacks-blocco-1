/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/

//-----------------------------------------------------

let serbatoio = [];
const stampa = document.getElementById('box');

for( i = 0; i < 6; i++){

  let numero = parseInt(prompt('Inserisci un numero'));
 
  if(numero % 2){
    serbatoio.push(numero);
  }

} 

stampa.innerHTML = `Ci sono questi numeri dispari ${serbatoio}`;
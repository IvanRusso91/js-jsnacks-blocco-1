/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/

//-----------------------------------------------------

let serbatoio = [];
const stampa = document.getElementById('box');

const limit = 6
i = 0;

while(i < limit){
  let numero;
  while(isNaN(numero)){
    let proptMessage = `inserisci per ${limit - i} volte un numero`;
    if (i === limit - 1) proptMessage = `inserisci l'ultimo numero`;
    numero = parseInt(prompt(proptMessage));
  }
  i++;
  if(numero % 2){
    serbatoio.push(numero);
  } 
}  

 stampa.innerHTML = `Ci sono questi numeri dispari ${serbatoio}`;
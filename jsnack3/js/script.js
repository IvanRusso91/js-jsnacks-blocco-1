/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

//----------------------------------------------------
const stampa = document.getElementById("box"); 
let totale = 0;

// 1.soluzione con il for

/*for(let i = 0; i < 5; i++){
  let numero = parseInt(prompt('inserisci un numero'));
  totale = numero + totale;

  stampa.innerHTML=`la somma è ${totale}`
}*/


// 2. soluzione con il while +.
const limit = 7;
let sumNumWhile=0;
let counter = 0;

while(counter<limit){
  let numInsert;
  while(isNaN(numInsert)){
    let proptMessage = `inserisci per ${limit - counter} volte un numero`;
    if (counter===limit - 1) proptMessage = `inserisci l'ultimo numero`;
    numInsert = parseInt(prompt(proptMessage));
  }

  counter++;
  sumNumWhile+= numInsert;
  console.log(sumNumWhile);
}




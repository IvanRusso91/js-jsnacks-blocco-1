/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

//----------------------------------------------------
const stampa = document.getElementById("box"); 
let totale = 0;

for(let i = 0; i < 5; i++){
  let numero = parseInt(prompt('inserisci un numero'));
  totale = numero + totale;

  stampa.innerHTML=`la somma è ${totale}`
}
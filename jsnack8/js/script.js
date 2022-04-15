/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/

//---------------------------------------------------------------------

const stampa = document.getElementById('box');
let numero = prompt('inserisci un numero di 4 cifre');
let tot =0;

for(let i = 0; i < numero.length; i++){

  console.log(numero.charAt(i));
  tot=parseInt(numero.charAt(i))+ tot;
  

  console.log('somma' , tot);
}

stampa.innerHTML=`la somma delle cifre è ${tot}.`
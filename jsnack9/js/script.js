/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/

//-----------------------------------------------------

const stampa = document.getElementById('box');
let tot = 0;


for(let i = 1; i <= 10; i++){
  tot = i + tot;
}

let media = tot / 10;

  console.log(media);

stampa.innerHTML=`la somma delle prime 10 cifre è ${tot}, invece la media è ${media}.`
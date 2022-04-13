/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/

//-----------------------------------------------------

const stampa = document.getElementById('box');
let serbatoio = [];
const numero = 2

let i = 0;

while(Math.pow(numero,i) < 1000){

  let potenza = Math.pow(numero,i);
  
  serbatoio.push(potenza);
  i++;
 
}

stampa.innerHTML= `Queste sono le potenze di 2 che danno come risultato un numero inferiore a 1000 : ${serbatoio}`
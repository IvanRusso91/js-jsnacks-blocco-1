
/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

//-------------------------------------------

let primo = parseInt(prompt("inserisci il primo numero da 1 a 9"));
let secondo = parseInt(prompt("inserisci il secondo numero 1 a 9"));
let stampa = document.getElementById("box");
let maggiore;
let minore;


if(primo > secondo){

  stampa.innerHTML = `il numero maggiore è ${primo} e il numero minore è ${secondo}`;

}else if(primo === secondo){
  stampa.innerHTML=`il risultato è un pareggio`;

}else{
  maggiore = secondo;
  minore = primo;

  stampa.innerHTML = `il numero maggiore è ${secondo} e il numero minore è ${primo}`;
}



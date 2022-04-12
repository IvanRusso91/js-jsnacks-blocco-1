/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

//-----------------------------------------------------

const invitati = ["mario","filippo","clara","maria"]
let nome= prompt("inserisci il tuo nome");
const stampa= document.getElementById("box");

let presente = false;

for(let i = 0 ; i < invitati.length ; i++){

  if(nome === invitati[i]){
    presente = true; 
  }
}

if(presente){
  stampa.innerHTML=`benvenuto può entrare`;
}else{
  stampa.innerHTML=`spiacente non è sulla lista`;
}





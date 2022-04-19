/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//----------------------------------------------------


let stampa = document.getElementById("box");

// controllo
let arrFirstWord = [];
let arrSecondWord =[];

while(arrFirstWord.length > 1 || arrFirstWord.length == 0){
  primo = prompt("inserisci una parola").trim();

  if(primo.length != 0){
    arrFirstWord = primo.split(" ");
  }
  
  if(arrFirstWord.length > 1){
  alert('inserisci solo una parola');
  }
}
 
while(arrSecondWord.length > 1 || arrSecondWord.length == 0){
  secondo =prompt ("inserisci una parola").trim();

  if(secondo.length !=0){
    arrSecondWord = secondo.split(" ");
  }
  if(arrSecondWord.length > 1){
    alert("inserisci solo una parola");
  }
}

if(primo.length > secondo.length){
  stampa.innerHTML= `la parola più corta è ${secondo} e quella più lunga è ${primo}`;

}else if(primo.length === secondo.length){
  stampa.innerHTML = `le parole sono di lunghezza uguale`

}else{
     stampa.innerHTML= `la parola più corta è ${primo} e quella più lunga è ${secondo}`;
}


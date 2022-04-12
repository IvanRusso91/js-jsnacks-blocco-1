/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

//----------------------------------------------------

let primo = prompt("inserisci una parola");
let secondo = prompt("inserisci una parola");
let stampa = document.getElementById("box");
let maggiore;
let minore;

if(primo.length > secondo.length){
  stampa.innerHTML= `la parola più corta è ${secondo} e quella più lunga è ${primo}`;

}else if(primo.length === secondo.length){
  stampa.innerHTML = `le parole sono di lunghezza uguale`

}else{
    stampa.innerHTML= `la parola più corta è ${primo} e quella più lunga è ${secondo}`;
}


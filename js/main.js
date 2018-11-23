/*FUNZIONE RANDOM DA UN NUMERO MINIMO AD UNO MASSIMO*/
function numeroRandom(numeroMin, numeroMax){
  var numRandomRisultante = Math.floor(Math.random() * (numeroMax - numeroMin + 1));
  return numRandomRisultante;
}

//funzion generatore Codice
var arrayLettere = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y"];
var arrayNumeri = [0,1,2,3,4,5,6,7,8,9,10];


function generaCodice(arrayNumeri,arrayLettere){

  var codiceToString = "";
  var arrayCodice = [];
  var arrayLettereLunghezza = arrayLettere.length - 1;
  var arrayNumeriLunghezza = arrayNumeri.length - 1;
  for (var i = 0; i < 3; i++) {
    var mischiaArray = (Math.floor((Math.random()*arrayLettereLunghezza)+1));
    arrayCodice.push(arrayLettere[mischiaArray])
  }
  for (var i = 0; i < 3; i++) {
    var mischiaArrayNum = (Math.floor((Math.random()*arrayNumeriLunghezza)+1));
    arrayCodice.push(arrayNumeri[mischiaArrayNum]);
  }
  codiceToString = arrayCodice.toString().toUpperCase().replace(/,/gi,"");

  return codiceToString;
}

var codice = generaCodice(arrayNumeri,arrayLettere);
console.log(codice);
//genero aun array di oggeti con 100 oggetti giocatori basket
var legaBasket = [];
for (var i = 0; i <= 100; i++) {
  nuovoGiocatore = {
    //ad ogni giocatore di basket vanno assciate
    //queste propietà
    "puntiRealizzati" : numeroRandom(1,50),
    "rimbalzi" : numeroRandom(1,25),
    "falli" : numeroRandom(1,10)
  }
  legaBasket.push(nuovoGiocatore);
}

console.log(legaBasket);
//Codice giocatore univoco(formato da 3 lettere maiuscole
//casuali e tre numeri)

/*FUNZIONE RANDOM DA UN NUMERO MINIMO AD UNO MASSIMO*/
function numeroRandom(numeroMin, numeroMax){
  var numRandomRisultante = Math.floor(Math.random() * (numeroMax - numeroMin + 1));
  return numRandomRisultante;
}

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

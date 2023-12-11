//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

numero_1=window.prompt('Inserisci il primo numero');
numero_2=window.prompt('Inserisci il secondo numero');
if (numero_1>numero_2) {
  console.log('Il numero maggiore è: '+numero_1)
} else if(numero_2>numero_1) {
  console.log('Il numero maggiore è: '+numero_2)
}else{
  console.log('I due numeri sono uguali')
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let numero=window.prompt('Inserisci un numero');
if(numero<5){
  console.log('Tiny')
}else if(numero<10){
  console.log('Small')
}else if(numero<15){
  console.log('Medium')
}else if(numero<20){
  console.log('Large')
}else if(numero>=20){
  console.log('Huge')
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

let i=0;
let array=[];
while(i<11){
  if(i != 3 && i !=8){
    array.push(i);
  }
  i+=1;
}
console.log(array)

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let indice=0;
let array_1=[];
while(indice<16){
  if(indice %2 ==0){
    array_1.push('Pari');
  }else {
    array_1.push('Dispari');
  }
  indice+=1
}
console.log(array_1);

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numero_3=window.prompt('Inserisci un numero');
let numero_4=window.prompt('Inserisci un numero');
if(numero_3===8 || numero_4===8 || numero_3+numero_4==8 || Math.abs(numero_3-numero_4)==8){
  console.log('true')
}else{
  console.log('false')
}


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var num_prodotti=parseInt(window.prompt('Quanti prodotti vuoi inserire?'));
index=0;
totalShoppingCart=0
while(index<num_prodotti){
  var costo_prodotto=parseInt(window.prompt('Inserisci il costo di un prodotto'))
  totalShoppingCart+= costo_prodotto;
  index+=1;
}
if(totalShoppingCart>50){
  console.log('il saldo totale è: '+ totalShoppingCart)
}else {
  console.log('il saldo totale è: '+ (totalShoppingCart+10))
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

var num_prodotti=parseInt(window.prompt('Quanti prodotti vuoi inserire?'));
index=0;
totalShoppingCart=0
while(index<num_prodotti){
  var costo_prodotto=parseInt(window.prompt('Inserisci il costo di un prodotto'));
  costo_prodotto-=(costo_prodotto*20)/100;
  totalShoppingCart+= costo_prodotto;
  index+=1;
}
if(totalShoppingCart>50){
  console.log('il saldo totale è: '+ totalShoppingCart)
}else {
  console.log('il saldo totale è: '+ (totalShoppingCart+10))
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale=true;
let gender= isMale=true ? 'male' : 'female'
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

let Array=[]
for(let i=0; i<=100; i++){
  if(i %3==0 && i %5==0){
    Array.push('FizzBuzz');
  }else if(i %3==0){
    Array.push('Fizz');
  }else if(i %5==0){
    Array.push('Buzz');
  }else{
    Array.push(i)
  }
}
console.log(Array)
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

//Stringhe (Strings): Le stringhe sono come collane di perline. Ogni perla è una lettera e le lettere insieme formano una parola. Quindi, se diciamo "cane", è come se stessimo mettendo insieme le lettere 'c', 'a', 'n' e 'e' come perline per creare una collana che rappresenta la parola "cane".
let parola='cane';

//Numeri (Numbers): I numeri sono come i mattoncini di Lego che possiamo usare per costruire cose. Possiamo aggiungere, sottrarre, moltiplicare o dividere questi mattoncini per ottenere risultati diversi.
let numero=10;

//Booleani (Booleans): I booleani sono come interruttori di luce che possono essere accesi o spenti. Possono essere solo due valori: vero o falso. Ad esempio, se ci chiediamo se è giorno, la risposta può essere "vero" (giorno) o "falso" (notte).
let Giorno=true;

//Array: Un array è come una scatola di giocattoli che contiene diversi giocattoli al suo interno. Possiamo prendere i giocattoli uno per uno e fare cose diverse con ognuno di essi.
let giocattoli=['auto', 'bambole', 'puzzle'];

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

//Oggetti (Objects): Gli oggetti sono come zaini con tasche. In ogni tasca, possiamo mettere un diverso tipo di giocattolo. Ogni giocattolo ha un nome, in modo che quando vogliamo giocare con un giocattolo specifico, sappiamo dove trovarlo.
let persona={
    nome:'Alice',
    età:8,
    giocaCon:['pallone', 'bambole']
}

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12+20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x=12
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name="Pietro"
console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x-4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1='john'
let name2='John'
console.log(name1==name2)
name2=name2.toLowerCase()
console.log(name1==name2)

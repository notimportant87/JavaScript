
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/

/***** erster Versuch FAIL *****/

/*
let firstNumber,secondNumber;

  firstNumber = prompt ("Bitte eine Zahl eingeben:");
  secondNumber = prompt ("Bitte eine zweite Zahl eingeben");
  numberAdd = firstNumber + secondNumber; 
  console.log("Hallo, die Summe der beiden Zahlen ergibt: " + numberAdd + "!");
*/

/***** Lösung *****/

// Beispiel 1
/*
let firstNumber, secondNumber
let Summe
firstNumber = parseFloat(prompt("Bitte eine Zahl eingeben:"));
secondNumber = parseFloat(prompt("Bitte eine zweite Zahl eingeben"));
summe = firstNumber + secondNumber
      document.write(" Hallo, die Summe der beiden Zahlen ergibt: " + summe );
console.log(firstNumber + secondNumber);
*/

// Beispiel 2
/*
let firstNumber, secondNumber
let Summe
firstNumber = parseInt(prompt("Bitte eine Zahl eingeben:"));
secondNumber = parseInt(prompt("Bitte eine zweite Zahl eingeben"));
summe = firstNumber + secondNumber
      document.write(" Hallo, die Summe der beiden Zahlen ergibt: " + summe );
console.log(firstNumber + secondNumber);
*/

// Beispiel 3
/*
let firstNumber, secondNumber
let Summe;
firstNumber = parseInt(prompt("Bitte eine Zahl eingeben:"));
secondNumber = parseFloat(prompt("Bitte eine zweite Zahl eingeben"));
summe = firstNumber + secondNumber
document.write("Hallo, die Summe der beiden Zahlen ergibt: " + summe);
console.log(firstNumber + secondNumber);
*/

// Lösung Kurs
/*
let a = prompt("Bitte eine beliebige Zahl eintragen");
let b = prompt("Bitte eine weitere beliebige Zahl eintragen");

console.log(typeof a); // string
console.log(typeof b); // string

let c = a + b;
console.log("Die Summe der beiden Zahlen ist: " + c);
*/

/***** Variante3 *****/
/*
// Deklaration
let ziffer1, ziffer2;
let zahl1, zahl2, summe;

// Eingabe :: Ziffern
ziffer1 = prompt("Bitte eine beliebige Zahl eintragen"); //2
ziffer2 = prompt("Bitte eine weitere beliebige Zahl eintragen"); //2
console.log(typeof ziffer1);
console.log(typeof ziffer2);

// Typkonvertierung | Ziffer --> Zahl (string --> number)
zahl1 = parseInt(ziffer1);
zahl2 = parseFloat(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);

// Berechnung :: Summe
summe = zahl1 + zahl2;
console.log("Die Summe ist: " + summe);
*/

/*****  Variante2 *****/
/*
//Kompaktere Lösung
let zahl1, zahl2, summe;
zahl1 = parseInt(prompt("Bitte eine beliebige Zahl eintragen"));
zahl2 = parseInt(prompt("Bitte eine weitere beliebige Zahl eintragen"));
summe = zahl1 + zahl2;
console.log("Die Summe ist: " + summe);
*/

/***** Variante3 *****/
/*
// Kompakt, aber schlecht lesbar
console.log
(
      "Die Summe ist: " +
      (
            parseInt(prompt("Bitte eine beliebige Zahl eintragen")) +
            parseInt(prompt("Bitte eine weitere beliebige Zahl eintragen"))

      )
);
*/











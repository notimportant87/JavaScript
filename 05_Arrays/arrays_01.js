/* Die Satzbau-Maschine | Arrays */

/*** 1.0 Arrays */

// let arr;
// arr = new Array(); // Konstruktor
// arr = []; // Literal
// arr = [2,6,7,12];
// arr = [true,false];
// arr = ["Ich","bin","Max","Mütze"];

// ausgabe(arr);
// ausgabe(arr.length);
// ausgabe(arr[0]); // Index, begint IMMER mit 0
// ausgabe(arr[1]);

/* 1a. Schleifen (for-schleife) */

/* For -Schleife als Wiederholungs-Struktur */
// for (let i = 0; i < 5; i++) {
//     ausgabe(i); 
// }

/* For-Schleife für Array-Index (Iteration)*/
// let arr = ["Ich","bin","der","coole","Max","Mütze"];
// for (let i = 0; i < arr.length; i++) {
//     ausgabe(arr[i]); 
// }

 /*********   Überlegungen **********/

/* 
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 0 + 1
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 1 + 1
// ausgabe("inhalt von a: " + a);
// a = a + 1;  // a = 2 + 1
// ausgabe("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */
// let a = 0; // Anfangswert
// for (let i = 0; i < 5; i++) {
//     ausgabe("ausgabe aus der loop: " + a);
//     a += 1; 
// }

// ausgabe("ausgabe nach der loop: " + a);

/* 
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

// let str = "";  // Anfangswert
// let addStr = "Test";
// let gap = " ";
// let punct = ".";

// for (let i = 0; i < 5; i++) {
//    str += addStr + gap;
// }

// ausgabe( str += punct);


/*** 02b. Funktionalität mit Array 2 */
ausgabe(getSentenceArr2(["Ich","bin"])); // Test
ausgabe(getSentenceArr2(["Ich","bin","Max","Mütze"])); // Test
ausgabe(getSentenceArr2(["Ich","bin","der","coole","Max","Mütze"])); // Test
function getSentenceArr2(arr) {

    let str = ""; 
    let gap = " ";
    let punct = ".";

    for (let i = 0; i < arr.length; i++) {
        if (i != arr.length-1) {
            str += arr[i] + gap;
        } else {
            str += arr[i] + punct;
        }
     }
     
    return str;
}

/*** 02a. Funktionalität mit Array 1  */
// Kritik | Überlegung
// word1,word2, .... word100  :: Semantische Struktur
// arr[0],arr[1] ... arr[n] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation  sematisches Problem --> numerisches Problem
//ausgabe(getSentenceArr(["Ich","bin","Max","Mütze"])); // Test
function getSentenceArr(arr) {
    let gap = " ";
    let punct = ".";
    let str =   arr[0] + gap +
                arr[1] + gap +
                arr[2] + gap +
                arr[3] + 
                punct;
    return str;
}

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//ausgabe(getSentence("Ich","bin","Max","Mütze")); // Test
function getSentence(word1,word2,word3,word4) {
    let gap = " ";
    let punct = ".";
    let str =   word1 + gap +
                word2 + gap +
                word3 + gap +
                word4 +
                punct;
    return str;
}

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}

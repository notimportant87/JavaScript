// Entscheidungsstrukturen | control structures

// Deklaration
let ageJohn, ageMark;
let isJohnOlder, isJohnEqual;

// Wertzuweisung
ageJohn = 30;
ageMark = 30;

// Logische Aussagen / Test(s)
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);

/****** IF *****/
// alternativlos (TINA)
// entweder JA oder nix ...

/*
//if (true)
if (isJohnOlder)
//if (ageJohn > ageMark)
//if (35 > 30)
{
    console.log("John ist älter");
}
*/

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

/*
if (isJohnOlder)
{
    // Ja-Zweig / true
    console.log("John ist älter");
}
else
{
    // Nein-Zweig / false
    console.log("John ist jünger");
}
*/

/************  Ternäre (ternary) Schreibweise ************/
//console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/************ IF - ELSE IF  ************/
// mit Alternativen Fällen (älter,jünger,gleich alt)

/*
if (isJohnOlder) // ageJohn > ageMark
{
    // Ja-Zweig / true
    console.log("John ist älter");
}
// 1. Alternative
else if (isJohnEqual) // ageJohn == ageMark
{
    // 1. Alternative / false
    console.log("John ist gleich alt");
}
// ggf. weiter Alternativen
// else if (...)
else
{
    // letze Alternative / false
    console.log("John ist jünger");
}
*/
/****** Fallunterscheidung / CASE|SWITCH 1 ******/

/*
let firstName, job;
firstName = "Jane";
job = "driver";  // .. fährt TAXI!
job = "diver";  // .. taucht im Rhein!
job = "pilot";  // .. macht etwas anderes!
job = "artist"; // .. malt ein Bild!
job = "teacher"; // .. unterrichtet!
//job = "instructor"; // .. unterrichtet!
switch (job) {
    case "driver":
        console.log(firstName + " fährt TAXI!");
        break;
    case "diver":
        console.log(firstName + " taucht im Rhein!");
        break;
    case "artist":
        console.log(firstName + " malt ein Bild!");
        break;
    case "teacher":
    case "instructor":
        console.log(firstName + " unterrichtet!");
        break;
    
    // für alle nicht bezeichneten Fälle ...
    default:
        console.log(firstName + " macht etwas anderes!");
        break;
}
*/

/********  Fallunterscheidung / CASE|SWITCH 2 *******/

let a = 2;

switch (true) {
    case (a == 1):
        console.log("a ist 1");
        break;    
    case (a == 2):
        console.log("a ist 2");
        break;
    default:
        console.log("a hat einen anderen Wert");
        break;
}

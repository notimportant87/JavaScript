
/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsrumpf (body)
function test()
{
    console.log("Hello World!");
    //console.log("Hello Visitor!");
    //console.log("Hello Germany!");
}

// Funktionsaufruf (call)
//test();
//prompt();
//parseFloat();

/***** Funktionen 02a *****/

// 2a. Parametrisierung + Datenübergabe von INNEN
function ausgabeNamen() 
{
   // let firstName = "Frank"; // Variable --> lokal scope
   // console.log("Hello " + firstName + "!"); // Strukturänderung selbe Ausgabe wie //console.log("Hello Frank!");
    
}

//ausgabeNamen();
//console.log(firstName); // Fehler --> lokal!!!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) // Parameter
{
    // wenn/if firstName leer , dann "nobody"
    if (firstName == undefined || firstName == "")     // || = oder 
    {
    firstName = "nobody";    
    }
    
     console.log("Hallo " + firstName + "!");
}

// ausgabeNamenParam("Deniz"); // Call + Argument(e)        // Z.46-49 markieren + strg # drücken ein/aus
// ausgabeNamenParam("Frank");
// ausgabeNamenParam();
// ausgabeNamenParam(prompt("Bitte Namen eingeben:"));

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName, familyName) // Parameter
{
    console.log("Hallo " + firstName + " " + familyName + "!");
}
// ausgabeNamenParams("Frank","Ziehm");         // strg + #
// ausgabeNamenParams("Ziehm","Frank");
// ausgabeNamenParams(prompt("Bitte Vornamen eingeben") , prompt("Bitte Namen eingeben"));

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob) in german: Was nicht passt, wird passend gemacht!
// SRP single responsibility principle Clean Code

function ausgabeNamenParams2(firstName, familyName) // Parameter
{
    // 1. Job: string composing
    
    let gap = " ";
    let outputString = "Hallo " + firstName + gap + familyName + "!";

    // 2. Job: output

    //console.log("Hallo " + firstName + gap + familyName + "!");
    console.log(outputString);

}

//ausgabeNamenParams2("Frank","Ziehm");

/***** Funktionen 03b *****/


/** 1.Job: String zusammensetzen */
output(getString("Frank","Ziehm")); // Test
//output(prompt("??"));
function getString(firstName,familyName) 
{
    let gap = " ";
    let outputString = "Hallo " + firstName + gap + familyName + "!";
    return outputString; // Daten ----> an die Stelle des calls
    console.log("huhu"); // Nach return wird die Funktion abgebrochen. Es wird kein code mehr ausgegeben
}


/** 2.Job: Ausgabe */
// output("hi"); // Unit-Test  TDD Test driven Development // call
// output("hi"); // Unit-Test  TDD Test driven Development
// output("hi"); // Unit-Test  TDD Test driven Development
// output("hi"); // Unit-Test  TDD Test driven Development
function output(outputString) // function output(params)
{
    console.log(outputString);
}






  



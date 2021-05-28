

/***** Erinnerung: Arrays *******/
// let arr;
// arr = ["Ich","bin","Max"];
// ausgabe(arr[2]);

// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// ausgabe(arr[0][2]);
// ausgabe(arr[1][2]);


/***** Objekte 1 Daten/Funktionen *******/
// ausgabe(person);
// ausgabe(person.firstName);
// ausgabe(person.familyName);
// ausgabe(person.salary[0]);
// ausgabe(person.hasAccess);
// ausgabe(person.sayHello());
let person = {
    firstName:"Deniz",
    familyName:"Yildiz",
    salary:[120000, 160000],
    hasAccess: true,
    sayHello: 
            function()
            {
                return "Hi, ich bin " + this.firstName;
            }
};

let txt =  "Ich bin " + person.firstName + " " +
person.familyName + " und verdiene " +
person.salary[1] + " p.a.";

//ausgabe(txt);

/***** Objekte 2 - Hierarchie *******/

// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest 
// Nested Object

let baikal = {
    wert: "10m",
    deep:{
            deeper:{
                    deepest: "Das Licht - auf 1642m"
            }
        }
};

ausgabe(baikal);
ausgabe(baikal.wert);
ausgabe(baikal.deep.deeper.deepest);


/** Ausgabe */
function ausgabe(outputStr) {
console.log(outputStr);
}

# CodeChallenge_01

Verwenden von Variablen
Bevor eine Variable verwendet werden kann,muss sie deklariert 
werden. Dies bedeutet, dass für die Variable nach dem Schlüsselwort 
var ein geeigneter Name eingeführt wird. Anschließend wird der 
Variablen ein Wert zugewiesen, dies nennt man Initialisierung. 
In JavaScript muss bei der Deklaration der Variablen kein Datentyp 
zugewiesen werden. Die Zuordnung einer Variablen zu einem Datentyp 
übernimmt JavaScript selber. Dadurch kann auch während der Laufzeit
eines Programms der Datentyp einer Variablen geändert werden.


Basiselemente 
 Operationen:
 - arithmetische [ ++ -- + - * / % ]  
 Kommentare: 
 // alle Zeichen in der Zeile werden ignoriert
 /* alle eingeklammerten Zeichen werden ignoriert */
 /** Hinweise mittels java-doc zwecks Online-Dokumentation */


                Dialogboxen

Mithilfe von Dialogboxen können Texte in 
vordefinierten Fenstern ausgegeben oder eingelesen
werden und der Anwender zu einer Interaktion aufgefordert 
werden. Man unterscheidet verschiedene Typen.

Dialogbox mit Eingabefeld

Die Anweisung prompt ( ) (=eingeben) öffnet ein Dialogfenster mit einem
Eingabefeld, einem OK-Button und einem Abbrechen-Button. Der Anwender 
kann in das Eingabefeld einen Text eingeben, der beim Drücken des 
OK-Button an das JavaScript-Programm zurückgegeben wird. 
Der Abbrechen-Button liefert wieder den Wert false zurück.

/*                  //bsp.1
function dialog ( ) {var Eingabe; Eingabe = prompt ("..."); 
                    if (...) {...; } else {...} 
                    } ...
*/
/*                  //bsp.2
let a = prompt("Bitte eine beliebige Zahl eintragen");
let b = prompt("Bitte eine weitere beliebige Zahl eintragen");

console.log(typeof a); // string
console.log(typeof b); // string

let c = a + b;
console.log("Die Summe der beiden Zahlen ist: " + c);
*/

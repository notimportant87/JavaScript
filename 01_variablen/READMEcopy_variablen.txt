# # 01-03_variablen

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


Einfache Dialogboxen:

Mit der Anweisung alert ( ) (=wachsam) können Texte oder 
der Inhalt von Variablen in einem Fenster ausgegeben werden.
Dieses Fenster enthält ein Ausrufezeichensymbol und den OK-Button.
Die Fensterbreite passt sich automatisch der Länge des Ausgabetextes an.
Zum Schließen des Fensters muss der Anwender den OK-Button anklicken.

function dialog ( ) {alert ("..."); 
                    } ... 
alert () = Dialogfenster mit Informationen


Dialogbox mit zwei Schaltflächen:

Die Anweisung confirm( ) (=bestätigen) öffnet ein Dialogfenster, das
den Ausgabetext, ein Frage-zeichensymbol und zwei Buttons enthält.
Dieses Dialogfenster wird verwendet, um vom Anwender eine Entscheidung
herbeizuführen, die im weiteren Programmablauf verarbeitet wird. Wenn
der OK-Button betätigt wird, wird an das Java-Script-Programm der 
Wert true zurückgegeben. Dies entspricht der Anweisung Eingabe ==1.
Wird der Abbrechen-Button gedrückt, wird an das JavaScript-Programm
der Wert false zurückgegeben.

function dialog  ( ) {var Eingabe; Eingabe = confirm ("..."); 
                     if (Eingabe == true) {...; } 
                     } ...


Dialogbox mit Eingabefeld

Die Anweisung prompt ( ) (=eingeben) öffnet ein Dialogfenster mit einem
Eingabefeld, einem OK-Button und einem Abbrechen-Button. Der Anwender 
kann in das Eingabefeld einen Text eingeben, der beim Drücken des 
OK-Button an das JavaScript-Programm zurückgegeben wird. 
Der Abbrechen-Button liefert wieder den Wert false zurück.

function dialog ( ) {var Eingabe; Eingabe = prompt ("..."); 
                    if (...) {...; } else {...} 
                    } ...

Objekthierarchie 
3  boolean (logische Werte (ja/nein - true/false))
8  number (numerische Werte)
11 string (Zeichenketten)


# Linksammlung:


### Variablen | Konstanten

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- https://www.w3schools.com/js/js_let.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var


### Zuordnung | Assignment
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment
- https://www.w3schools.com/js/js_assignment.asp

### Datentypen | Primitives
- https://developer.mozilla.org/en-US/docs/Glossary/Primitive

- https://www.w3schools.com/js/js_strings.asp
- https://www.w3schools.com/jsref/jsref_obj_boolean.asp
- https://www.w3schools.com/jsref/jsref_obj_number.asp
- https://developer.mozilla.org/en-US/docs/Glossary/undefined
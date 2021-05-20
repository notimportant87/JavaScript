# Funktionen              neuste zuerst!


Funktionen Regeln:
- DRY - Don´t repeat yourself
- Immer Camel(Case) Schreibweise verwenden! (Übersichtlicher)


Funktionen
Eine Funktion ist ein eigenständiger Programmteil mit 
eigenem Namen und einem Block von Befehlen. Beim Aufruf
können Parameter übergeben werden und die Funktion kann
mit return Rückgabewerte erzeugen.


Die Syntax einer Funktion lautet:
function funktionsname (Parameter) {Befehlsblock;}


Aufbau einer Methode:

Zugriffsrecht Ergebnistyp
              Methodenname (Parameterliste)
              {...;
               return Ergebniswert;
              }

Objekte:

- Vielfältige Objekte sind in JavaScript vordefiniert.
- Zu einem Objekt gehören spezifische Eigenschaften und 
  (eventuell) streng zugehörige Methoden.
- Methoden sind den Objekten zugeordnete Funktionen, mit 
  denen spezifische Aktionen vorgenommen werden.
- Die Objektbeziehungen sind zum Teil hierarchisch geordnet.
- Das höchste Objekt - im Sinne der Hierarchie - ist window (ein
  Fenster-Objekt). document ist das erste nachrangige Objekt.
  Insofern ist das Objekt document ein Inhalt im Objekt window.
- Durch die Definition einer Funktion 
  function ... (...; ...;)
  kann ein neues, individuelles Objekt bestimmt werden. Die 
  Funktionsparameter, die beim Aufruf übergeben werden, entsprechen
  den Objekteigenschaften.
- Durch den Aufruf der Funktion verbunden mit dem Schlüsselwort new 
  wird eine Objektinstanz im Programm bestimmt.
- Zu jedem Objekt gehören spezifische Eigenschaften und
  Methoden (Unterobjekte sind festgelegt).

function ausgabeNamenParam(firstName) // Parameter


Basiselemente
 Operationen:
  - arithmetische [ ++ -- + - * / % ]
  - Vergleichsoperationen [ == != < <= > >= ]
 Logische Operationen:
  - && = und ; || = oder ; ! = not nicht (Negation)

Kontrollstrukturen
 Entscheidungsanweisung: if - else Anweisungen

Schlüsselwörter: if

Kommentare: 
 // alle Zeichen in der Zeile werden ignoriert
 /* alle eingeklammerten Zeichen werden ignoriert */
 /** Hinweise mittels java-doc zwecks Online-Dokumentation */

Objekthierarchie 
3  boolean (logische Werte (ja/nein - true/false))
5  function (Funktion)
8  number (numerische Werte)
11 string (Zeichenketten) 


Verwenden von Variablen
Bevor eine Variable verwendet werden kann,muss sie deklariert 
werden. Dies bedeutet, dass für die Variable nach dem Schlüsselwort 
var ein geeigneter Name eingeführt wird. Anschließend wird der 
Variablen ein Wert zugewiesen, dies nennt man Initialisierung. 
In JavaScript muss bei der Deklaration der Variablen kein Datentyp 
zugewiesen werden. Die Zuordnung einer Variablen zu einem Datentyp 
übernimmt JavaScript selber. Dadurch kann auch während der Laufzeit
eines Programms der Datentyp einer Variablen geändert werden.


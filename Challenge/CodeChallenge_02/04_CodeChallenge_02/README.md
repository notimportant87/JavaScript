# 04_CodeChallenge_02

Basiselemente 
  Operationen:
    - Vergleichsoperationen [ == != < <= > >= ]
  Logische Operationen:
    - && = und ; || = oder ; ! = nicht (Negation)
  Kontrollstrukturen
    - Block: { Anweisung 1; ... }
    - Entscheidungsanweisung: if - else | Anweisungen
    - geschaltete if-Anweisung: switch-Anweisung

                Anweisungen

- Es können bedingte Anweisungen mit if-else-Strukturen
  realisiert werden.
- Fallunterscheidungen können gestaltet werden mit:
  switch (...) {case "..." : ... break;}.

Beispiel Aufbau:
  switch (...) 
{
    case (...) && (...):
        console.log(... + "...");
        break;
    case (...) && (...):
        console.log(... + "...");
        break;
    case (...) && (...):
        console.log(... + "...");
        break;
    case (...) && (...):
        console.log(... + "...");
        break;    
    default:
        console.log("...");   
    break;
}

        Dialogboxen/Eingabefelder

- function dialog() { var Eingabe; Eingabe = 
  prompt ("...");
  if (...) {...; } else {...} } 
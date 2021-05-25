
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."
// "Q" (question) --> "?"
// "E" (exclamation) --> "!"


/*** Funktion mit Array als Parameter */
// mögliche Tests:
ausgabe(getSentence(["Ich","bin","Peter"],"S"));
ausgabe(getSentence(["Bist","du","Peter"],"Q"));
ausgabe(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));
ausgabe(getSentence(["Ich","bin"],"E"));
ausgabe(getSentence(["Ich","bin"],"#"));
function getSentence(arr,flag) {
    
    let gap     = " ";
    let punct   = getPunct(flag);
    let str     = "";

    for (let i = 0; i < arr.length; i++) 
    {
        if (i != (arr.length - 1)) { 
            str +=  arr[i] + gap;
        } else {
            str +=  arr[i] + punct;
        }
    }                

    return str ; 

}

/*** Service-Funktion / Punktuation */
// ausgabe(getPunct("S"));
// ausgabe(getPunct("Q"));
// ausgabe(getPunct("E"));
// ausgabe(getPunct("#"));
function getPunct(checkStr) {
    switch (checkStr) {
        case "S":
            return ".";
        case "Q":
            return "?";
        case "E":
            return "!";
        default:
            return "."; // TBA
    }
}

/*** Ausgabe */
// ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}
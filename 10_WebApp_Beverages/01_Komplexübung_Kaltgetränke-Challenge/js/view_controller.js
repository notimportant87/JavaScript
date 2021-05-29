
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: check!
	Check Daten :: check!
    Btn. Trigger :: check!
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:
//controller()
function controller() {
    ausgabe(updateImg(checkAge(getInput())));
}


// Trigger - Btn 
let btn = document.getElementById("trigBtn");
btn.addEventListener("click",actOnClick);

// Trigger - Input
let field = document.getElementsByName("eingabe")[0];
field.addEventListener("input",isInputValid);

// Event-Dispatcher
function actOnClick() {
    if (isInputValid()) {
        controller();
    } else {
       ausgabe("Input nicht korrekt.");
    }   
}

// Check auf korrekte Eingaben ...
function isInputValid() {
    
    let inputStr = field.value;
    let patt = /^[0-9]{1,3}$/g; 
    let cond = patt.test(inputStr);

    if (!cond) {
       field.value = "";
       updateImg(data.default.bev);
    }

    return cond;  
}


// Modul Eingabe | Test:
//ausgabe(getInput());
function getInput() {
    let inputField = document.getElementsByName("eingabe")[0];
    let age = parseInt(inputField.value);
    return age;
}

//Modul: Business-Logic (Mapping) | Test:
// ausgabe(checkAge(2));
// ausgabe(checkAge(6));
// ausgabe(checkAge(15));
// ausgabe(checkAge(20));
// ausgabe(checkAge(132));
// ausgabe(checkAge());
function checkAge(age) {
    switch (true) 
    {
        case (age >= data.milk.lower) && (age <= data.milk.upper):
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;    
        default:
            return data.default.bev;  
    }
}

// Modul: Bild aktualisieren | Test:
// ausgabe(updateImg("cola"));
function updateImg(imgName) {
    let img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName; // monitoring
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}

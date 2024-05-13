// Entscheidungsstrukturen | control flow

const { addAbortListener } = require("prompt");

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 39;

// Deklaration
let isJohnOlder, isJohnEqual, isJohnYounger;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
isJohnYounger = (ageJohn < ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");


    if   (ageJohn > ageMark) console.log("John ist älter");
    if   (ageJohn == ageMark) console.log("John und mark sind gleich alt");
    if   (ageJohn < ageMark) console.log("John ist jünger");

    if(isJohnOlder) { console.log("John ist älter");
        
    } else if (isJohnEqual) { console.log("Sie sind gleich alt");
        
    } else {console.log("John ist jünger")}

   

    const firstName = "Chris";

    let job;
    job = "driver"
    job = "diver"  
    job = "artist"
    job = "pilot" 
    job = "teacher"
    job = "instructor"

    
    

    switch (job) {
        case "driver":
            console.log (firstName + ".. fährt Taxi");
            break;
        case "diver":
            console.log (firstName + ".. taucht im Rhein.");
            break;
        case "artist":
            console.log (firstName + ".. malt mit Kacke.");
            break;
        case "teacher":
            console.log (firstName + ".. soll Bildung vermitteln.");
            break;
    
        default:
            console.log (firstName + ".. soll Bildung vermitteln.");
            break;
        
    }
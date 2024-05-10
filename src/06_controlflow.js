// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 15;

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
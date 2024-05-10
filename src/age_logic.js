let ageChris, ageDarma;
const birthYearChris = 1980;
const birthYearDarma = 1979;

// Berechnung Alter
let date = new Date();
let year = date.getFullYear();
ageChris = year - birthYearChris;
ageDarma = year - birthYearDarma;

// Ausgabe
console.log("ageChris: " + ageChris);
console.log("ageDarma: " + ageDarma);
console.log("Datum" + date);

let isChrisOlder, isChrisEqual, isDarmaOlder;
isChrisOlder = (ageChris > ageDarma);
isChrisEqual = (ageChris == ageDarma);
isDarmaOlder = (ageDarma > ageChris);

console.log("isChrisOlder: " + isChrisOlder)
console.log("isChrisEqual: " + isChrisEqual)
console.log("isDarmaOlder: " + isDarmaOlder) 

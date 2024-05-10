let ageChris, ageDarma;
const birthYearChris = 1980;
const birthYearDarma = 1890;

// Berechnung Alter
let date = new Date();
let year = date.getFullYear();
ageChris = year - birthYearChris;
ageDarma = year - birthYearDarma;

// Ausgabe
console.log("ageChris: " + ageChris);
console.log("ageDarma: " + ageDarma);
console.log("Datum" + date);
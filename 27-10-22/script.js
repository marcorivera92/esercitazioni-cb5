// Esercizio 1 //

function calculator(x, y, operation = "") {
  switch (operation) {
    case "+":
      z = x + y;
      return z;

    case "-":
      z = x - y;
      return z;

    case "*":
      z = x * y;
      return z;

    case "/":
      z = x / y;
      return z;

    case "%":
      z = (x * y) / 100;
      return z;

    case "":
      alert("Please select a valid operation");
  }
}

// console.log(calculator(20, 50, "%")); // Esempio

// Esercizio 2 //

const character = {
  firstName: "Hans Florian",
  lastName: "Zimmer",
  birthday: "12 September 1957",
  nationality: "Germany",
  age: 65,
  occupation: "Composer, music producer",
  famousWorks: [
    "The Lion King",
    "Gladiator",
    "Inception",
    "The Dark Knight thrilogy",
  ],
  isAlive: true,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// console.log(character.fullName()); //

Object.freeze(character.firstName, character.lastName);

// console.log(Object.isFrozen(character.firstName, character.lastName)); //

// -----------------//

// Esercizio Avanzato // NON RIUSCITO, PERCHE'?

// function calculator(x, ...y) {
//  switch (x) {

// METODO AVANZATO
const sum = (...args) => args.reduce((x, y) => x + y);

const subtract = (...args) => args.reduce((x, y) => x - y);

const multiply = (...args) => args.reduce((x, y) => x * y);

const divide = (...args) => args.reduce((x, y) => x / y);

console.log(multiply(10, 10, 10, 10)); // Example: (*operation(..values..))

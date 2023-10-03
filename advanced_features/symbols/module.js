//A new primitive -> a type built in like boolean, string etc

const sym = Symbol.for("Name"); //-> Takes in the name of symbol, For creating a unique global symbol
const sym2 = Symbol("Name"); //For creating a unique global symbol
// console.log(sym);
// console.log(sym2);
// console.log(sym === sym2); //All symbols are unique

//Create a 'private' variable to an object

export const person = {
  age: 25,
  name: "Talavera",
  [sym]: "Karl",
};
// console.log(person[sym]);

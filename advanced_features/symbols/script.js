import { person } from "./module.js";

console.log(person);

const sym3 = Symbol.for("Name");
console.log(person[sym3]);
//Hidden only accessible by getOwnPropertyhSymbols
Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});

console.log(JSON.stringify(person));

console.log(Object.getOwnPropertySymbols(person));

//Use case for .for -> list of enums
//Good for giving guaranteed unique identifiers
const LOG_LEVEL = {
  DEBUG: Symbol("debug"),
  INFO: Symbol("info"),
  WARNING: Symbol("warning"),
  ERROR: Symbol("error"),
};

const logLevel = LOG_LEVEL.DEBUG;

if (logLevel === LOG_LEVEL.DEBUG) {
  console.log("nice");
}

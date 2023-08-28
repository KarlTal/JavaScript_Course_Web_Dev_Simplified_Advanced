const array = ["A", "B", "C", "D"];
const numberArray = [2, 3, 4];

//With an array
// function sum(numbers) {
//   return numbers.reduce((sum, number) => sum + number, 0);
// }
// console.log(sum([2, 3, 5]));
function sum(multiplier, ...numbers) {
  //... = rest operator
  //Every single parameters go to this array
  return multiplier * numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sum(10, 2, 3, 6, 7, 2, 1));
console.log(sum(...numberArray)); //Multipler = 2, numbers = 3,4
//sum(numberArray[0], numberArray[1], numberArray[2])

//Use case
function concatName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

concatName("Karl", "Talavera");
const names = ["Karl", "Talavera"];
concatName(...names);

//Use case -> Copying arrays
const newArray = [...numberArray];
//newArray = numberArray -> Same memory so numberArray.push(5) will reflect on newArray
numberArray.push(5);
console.log(newArray);

//Use case -> Something similar to array become an array

const divs = document.querySelectorAll("div"); //NodeList cannot do divs.map
[...divs].map((div) => {
  console.log(div);
  div.classList.add("invisible");
});

//const divs = [...document.querySelectorAll('div')]
const [first, second, ...rest] = array;
//Takes all the values not defined as parameters and placed into a rest array
console.log(first, second, rest);

//Objects
const person = {
  // name: "Karl",
  // age: 21,
  favouriteFood: "Rice",
  address: {
    street: "123 Main St",
    city: "Somewhere",
    zipCode: "55555",
  },
};

const { name, age, ...restOf } = person;
console.log(name, age, restOf);

//Cloning
const details = {
  name: "Kyle",
  age: 25,
};
const person2 = { ...person, ...details }; //Adding new attribute
person.name = "Sally";
console.log(person2.name);

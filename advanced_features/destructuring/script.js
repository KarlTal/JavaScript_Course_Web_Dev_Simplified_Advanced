//Array
// const array = ["A", "B", "C", "D", ["E", "F"]];
// const [first, second, third, fourth, [fifth, sixth]] = array;
// function addAndMultiply(a, b) {
//   return [a + b, a * b];
// }
// const [sum, product] = addAndMultiply(2, 3);

//Objects
// const person = {
//   name: "Karl",
//   age: 21,
//   favouriteFood: "Rice",
//   address: {
//     street: "123 Main St",
//     city: "Somewhere",
//     zipCode: "55555",
//   },
// };

// const {
//   name: firstName,
//   age,
//   address: { street, city, zipCode = "12345" }, //Destructuring address and getting the street
// } = person;
//Get key and assign to firstName variable
// console.log(firstName, age, street, city, zipCode);

//Use case 1 - Big variables with different properties to a single variable
/*
const {
    age,
    name,
    favouriteFood,
    address:{
        street,
    }
} = person
*/

//Use case 2 - Inside of functions
function addAndMultiply2(a, b) {
  return { sum2: a + b, product2: a * b };
}

const { sum2, product2 } = addAndMultiply2(2, 3);
// console.log(sum2, product2);

//Exercise 1
function nameToFirstAndLastArray(fullname) {
  //Convert to firstname and last name
  return fullname.split(" ");
}

function nameToFirstAndLastObject(fullname) {
  const [firstNameObj, lastNameObj] = fullname.split(" ");
  return {
    firstNameObj: firstNameObj,
    lastNameObj: lastNameObj,
  };
}
const [firstName, lastName] = nameToFirstAndLastArray("Karl Talavera");
// console.log(firstName, lastName);

const { firstNameObj, lastNameObj } = nameToFirstAndLastObject("Karl Talavera");
// console.log(firstNameObj);

function addAndMultiplyParam(objectOptions) {
  const { a, b = 4 } = objectOptions;
  return [a + b, a * b];
}

const [sum, product] = addAndMultiplyParam({ a: 2, b: 3 });
console.log(sum, product);

const firstName = "Karl";
const age = 22;
const index = 1;
const propertyName = "name";

const person = {
  [propertyName]: firstName,
  //   firstName, //If variable name == key name then does not require firstName: firstName
  [`age${index}`]: age,
  sayHi() {
    console.log("hi");
  },
  /*sayHi: function () {
    console.log('hi')
  } */
};

person[propertyName] = firstName;
console.log(person);

person.sayHi();

//Instead of binding, we are calling
window.name = "Global name";

const person = {
  name: "Karl",
};

function printName() {
  console.log(this.name);
}

printName();
printName.apply(person); //Call the function immediately
printName.call(person);

function sum(...numbers) {
  return numbers.reduce((count, n) => count + n);
} //Sum of all the numbers

console.log(sum(1, 2, 3));

console.log(sum(2, 3));
console.log(sum.bind(null, 2)(3)); //null to this , 2 as the 1st and 3 as the 2nd
console.log(sum.call(null, 2, 3)); //do not need to call the function
console.log(sum.apply(null, [2, 3])); //Need to pass the values as an array

const numbersToAdd = [1, 2, 3, 4, 5];

console.log(sum.apply(null, numbersToAdd));
console.log(sum.call(null, ...numbersToAdd)); //Need to spread to be comma delimited
console.log(sum(...numbersToAdd));

//Only used when to change this

//Redefining the this property with the parameter passed to bind

window.name = "Global name"; //Creates a name variable and set to Global name

const person = {
  name: "Karl",
};

function printName() {
  console.log(this.name); //Global scope same as window===this === window.name
}

const newPrintName = printName.bind(person); //Pass this
const newPrintNameWindow = printName.bind(window); //Pass this
newPrintName();
newPrintNameWindow();

//Binding properties to a function

function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3));

const sumTwo = sum.bind(null, 2); //Every other property after this/null will be added , e.g., a =2
/* This is what the sumTwo essential do
function sumTwo(b){
    return 2 + b
}

*/
console.log(sumTwo(3));
console.log(sumTwo(5, 1000)); //Disregard additional parameters e.g, 1000 will do 2 + 5

//Use case 1

function product(a, b) {
  return a * b;
}

const numbers = [1, 2, 3, 4, 5];

// const newNumbers = numbers.map((number) => {
//   return product(2, number);
// });

const newNumbers = numbers.map(product.bind(null, 2));

console.log(newNumbers);

// Generator ->
// Function ->
function* simpleGenerator() {
  //Normally has code then return
  console.log("Before 1");
  yield 1; // Returns multiple values
  console.log("After 1");
  console.log("Before 2");
  yield 2; //Returns then waits until you want to get the next value to be returned
  console.log("After 2");
  console.log("Before 3");
  yield 3;
  console.log("After 3");
} //Cannot use arrow functions as it does not have the function*

const generator = simpleGenerator(); //-> create a genrator populated with the code
generator.next();
generator.next();
generator.next();
generator.next();
console.log(generator);
// Iterator -> Something that has the ability to call next on it and then when you call next it will return the next value structured with a done and value
console.log(generator.next()); //Runs the code till the next yield
console.log(generator.next()); //Runs the code till the next yield
console.log(generator.next()); //Runs the code till the next yield
console.log(generator.next()); //Value undefined, done = true

//Use case 1 -> Do something then wait

//Use case 2 -> Create infinite loop to progress through but not freeze

function* fibonacciGenerator() {
  let previousOne = 0;
  let previousTwo = 1;

  yield 0;
  yield 1;
  while (true) {
    const result = previousOne + previousTwo;
    yield result;
    previousOne = previousTwo;
    previousTwo = result;
  }
}

const secondGenerator = fibonacciGenerator();
console.log(secondGenerator.next());
console.log(secondGenerator.next());
console.log(secondGenerator.next());
console.log(secondGenerator.next());
console.log(secondGenerator.next());
console.log(secondGenerator.next());
console.log(secondGenerator.next());

//Exercise 1 -> ID Generator

function* idGenerator() {
  let currentID = 0;

  while (true) {
    // const incrementor = yield (currentID += 1);
    const incrementor = yield currentID;
    if (incrementor != null) {
      currentID += incrementor;
    } else {
      currentID++;
    }
    console.log("incrementor", incrementor);
  }
}

const thirdGenerator = idGenerator();
console.log(thirdGenerator.next());
console.log(thirdGenerator.next(2));
console.log(thirdGenerator.next());
//Can exit out of a generator prematurely
console.log(thirdGenerator.return(0));
console.log(thirdGenerator.next(3));
//Can pass a value to next

//Can exit out of a generator prematurely
console.log(thirdGenerator.return(0));
console.log(thirdGenerator.return(10));

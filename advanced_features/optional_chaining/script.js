const karl = {
  name: "Karl",
  age: 22,
  address: {
    street: "123 Main St",
    city: "Somewhere",
  },
  sayHi() {
    console.log("hi");
  },
  hobbies: ["Drawing", "Sleeping"],
};

function callSayHi(person) {
  person?.sayHi?.();
  //Checks if the person object has the sayHi() function
}

function printHobbyOne(person) {
  console.log(person?.hobbies?.[0]);
}
function printStreet(person) {
  console.log(person?.address?.street);
  //Check person if its null or undefined -> if so returns
  //Check if address is null or undefined etc
}

printStreet(karl);
callSayHi(null);
printHobbyOne(karl);

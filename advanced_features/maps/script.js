// const CURRENCY_MAP = {
//   "United States": "USD",
//   India: "Rupee",
// };

// const currency = CURRENCY_MAP["India"];

//Second way

// const CURRENCIES = [
//   { name: "USD", country: "United States" },
//   { name: "Rupee", country: "India" },
// ];

// const currency = CURRENCIES.find((c) => c.country === "India").name;
// console.log(currency);

//Using map

const CURRENCIES = [
  { name: "USD", country: "United States" },
  { name: "Rupee", country: "India" },
];

const map = new Map([
  ["United States", "USD"],
  ["India", "Rupee"],
]);
console.log(map);

//1. Key can be anything -> objects

const user = {
  name: "Karl",
};

// const userMap = new Map([[user, { age: 25 }]]);
// console.log(userMap);

//2. Map always in order when looping through
const randomMap = new Map([
  [1, "A"],
  [2, "B"],
  [3, "C"],
  [4, "D"],
]);

randomMap.forEach((value, key) => {
  console.log(value, key);
});

//3. Easily find the size
console.log(randomMap.size);

/* Using objects
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
*/

//---------------------- Maps Operations --------------------------
//Get a single value based on a key
console.log(randomMap.get(1));
//Set a key (Add if not existing)
randomMap.set(5, "E");
//Check if value exists
console.log(randomMap.has(6));
//Delete
randomMap.delete(5);
console.log(randomMap);
//Clear a map
randomMap.clear();

//Practice
//Before
/*
const items = [
    {
      id: 1,
      name: "Test 1",
      description: "Desc 1",
    },
    {
      id: 2,
      name: "Test 2",
      description: "Desc 2",
    },
    {
      id: 3,
      name: "Test 3",
      description: "Desc 3",
    },
  ];
  
  function getItem(id) {
    return items.find((item) => item.id === id);
  }
*/
//After
const itemMap = new Map([
  [1, { id: 1, name: "Test 1", description: "Desc 1" }],
  [2, { id: 2, name: "Test 2", description: "Desc 2" }],
  [3, { id: 3, name: "Test 3", description: "Desc 3" }],
]);

function getItem(id) {
  return itemMap.get(id);
}
console.log(getItem(2));

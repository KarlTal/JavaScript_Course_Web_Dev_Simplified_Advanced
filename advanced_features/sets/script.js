const uniqueList = [1, 2, 3, 4, 5];
const newNumber = 4;

if (!uniqueList.includes(newNumber)) {
  uniqueList.add(newNumber);
}

console.log(uniqueList);

//Sets are arrays which all have unique values

//Removes duplicates
const set = new Set([1, 2, 3, 4, 4]);
set.add(5);
set.add(4);
console.log(set);

//Access elements in a set -> use a for each loop
set.forEach((value) => {
  console.log(value);
});
//Can only check if a set has a value
console.log(set.has(2));
//Delete
set.delete(3);
console.log(set);
//Get size
console.log(set.size);
//Clear
set.clear();

//Exercise remove dupes

function removeDupes(array) {
  return [...new Set(array)];
  //return Array.from(new Set(array));; //Use for typescript
}
console.log(removeDupes([1, 2, 3, 4, 3, 2, 5]));

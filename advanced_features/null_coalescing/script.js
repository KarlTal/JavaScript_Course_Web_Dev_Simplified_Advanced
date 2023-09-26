function greet(firstName = "Sally", lastName) {
  //lastName = lastName || 'Smith' -> wont' work if we pass in ""
  lastName = lastName ?? "Smith";
  console.log(`${firstName} ${lastName}`);
}

greet("Karl", "Talavera");

//If we pass in undefined -> use default value
//But if null is passed -> null will  be used

/*
variable ?? variable 
console.log(undefined ?? false &&( true || false))
*/
console.log(undefined ?? (false && (true || false)));

//Not supported on not all browser like safari

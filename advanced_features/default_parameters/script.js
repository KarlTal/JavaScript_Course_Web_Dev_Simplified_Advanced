function greet(firstName, lastName, { salutation = "Hi", suffix = "Mr" } = {}) {
  //Default option to an empty object
  //   salutation = "Hi",
  //   fullName = `${firstName} ${lastName}`
  console.log(`${salutation} ${suffix} ${firstName} ${lastName}`);
}

greet("Karl", "Talavera", { suffix: "Mr", salutation: "Hi" });

//Place default parameters at the end

const person = {
  firstName: "Karl",
  lastName: "Talavera",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

person.fullName = "Sally Smith";
console.log(person.fullName);

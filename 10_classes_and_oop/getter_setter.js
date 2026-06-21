
const person = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const [first, last] = value.split(" ");
    this.firstName = first;
    this.lastName = last;
  }
};

console.log(person.fullName); // John Doe

person.fullName = "Jane Smith";

console.log(person.firstName); // Jane
console.log(person.lastName);  // Smith
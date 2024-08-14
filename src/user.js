class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    console.log(`Привет, ${this.firstName} ${this.lastName}!`);
  }
}

export {User};
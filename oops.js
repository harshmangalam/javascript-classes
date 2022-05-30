// function User(){
//     this.firstName = "harsh"
// }

// const harsh = new User()

// console.log(harsh.firstName)

// class User {
//    isAdmin = false;

//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//  this }

//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const harsh = new User("harsh", "mangalam");

// const ram = new User("ram","k")

// class User {
//   get email() {
//     return "customemail" + this.email;
//   }

//   set email(email) {
//     this.email = email;
//   }
// }

// const ram = new User();

// ram.email = "some@gmail.com";

// console.log(ram.email);

// class User {
//   constructor(email) {
//     this.email = email;
//   }
// }

// const ram = new User("some@gmail.com");
// const harsh = new User("harsh@gmail.com");

// console.log(ram.email);

// console.log(harsh.email)

// class User {
//   static isAdmin = false;
//   name = "some name"
//   static hashPassword(password) {
//     return "hash123" + password;
//   }

//   getFullName() {
//     console.log("harsh mangalam");
//   }
// }

// const harsh = new User();

// harsh.getFullName();

// harsh.name

// User.hashPassword("12345");

// User.isAdmin

// class User {
//     static hash = "1234"
//     #key = "12345"

//     processKey(){
//         // process some stripe payment gateway
//         this.#key
//     }

// }

// const user = new User()
// user.#key

// User  -> email, name,pass etc,role="user"

// Moderator -> email,mail, name,pas, role ="mod"

// Admin -> email,mail, name,pas  role="admion"

// class User {
//   name = "Harsh";
//   email = "harsh@gmail";
//   isUser = true;
// }

// class Moderator extends User {
//   isModerator = true;
// }

// class Admin extends User {
//   isAdmin = true;
// }

class Animal {
  constructor(animalName) {
    this.animalName = animalName;
  }

  walk() {
    console.log("Animal walk");
  }

  speak() {
    console.log("Animal speak");
  }
}

class Dog extends Animal {
  constructor(dogName) {
    super("animal");
    this.dogName = dogName;
  }
}

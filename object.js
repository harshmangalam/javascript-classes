// let firsName = "first";
// let lastName = "last";
// let isLoggedin = false;

// let firstName = prompt("Please enter first name", "first");

// let user = {
//   firstName: "test",
//   lastName: "last",
//   isLoggedin: true,
//   profilePic: "https://unsplash.com/jdhdgtydggdtygbygydghyud",
//   age: 30,
//   9: "jjjj",
// };

// if (user.profilePic) {
//   console.log("profile pic is available");
// } else {
//   console.log("profile pic is not available");
// }

// if ("profilePic" in user) {
//   console.log("profile pic is available");
// } else {
//   console.log("profile pic is not available");
// }

// console.log(user);
// console.log(user.age);

// console.log(typeof user[9]);

// if you have valid variable name as key then you can use dot

// let if = "46"

// console.log(if)

// const object1 = {
//   if: 12,
//   else: 56,
//   for: 56,
//   let: "jdd",
// };

// console.log(typeof object1.if)

// user.profilePic
//   ? console.log("profile pic is avai.....")
//   : console.log("not available ");

// let user = {
//   firstName: "test",
//   lastName: "last",
//   isLoggedin: true,
//   profilePic: "https://unsplash.com/jdhdgtydggdtygbygydghyud",
//   age: 30,
//   9: "jjjj",

// };

// for in loop

// for (let key in user) {
//     console.log(key)
//     console.log(user[key])
// }

// let a = {
//   key1: "value1",
//   key2: 56,
// };

// let b = Object.assign({}, a);

// a.key3 = "value3";

// console.log(a);

// console.log(b);

// const user = {name:""}
// const admin = {name:""}

// console.log(user === admin)

// contructor

// const obj2 = new Object()

// console.log(obj2)

// constructor   not recommended
// const obj2 = new Object()

// console.log(obj2)

// // literal  recommended

// const obj3 = {}

// console.log(obj3)
// // literal

// const obj3 = {}

// console.log(obj3)

// const user = {
//   firstName: "harsh",
//   "last name": "mangalam",
// };

// . []

// console.log(user)

// user.email = "harsh@gmail.com"

// user["profile pic"] = "shhshshhhs.png"

// console.log(user.firstName)
// console.log(user["last name"])

// console.log(user)

// let firstName = "hjhshshhs"

// const user = {
//   firstName: "harsh",

// };

// console.log("lastName" in user);

// console.log(user.lastName === undefined)

// console.log("lastName" in user);  // true

// console.log(user.lastName === undefined);  // true   // false

const admin = {
  firstName: "harsh",
  lastName: "mangalam",

  fullName: function () {
    return this.firstName + this.lastName;
  },
};

// function fullName(firstName, lastName) {
//   return user.firstName + " " + user.lastName;
// }

// console.log(fullName);

// console.log(fullName(user.firstName, user.lastName));



console.log(admin.fullName())


// this ------> object name
// function loginUser(username="anonymous user") {
//   console.log(username);
// }

// loginUser();

// loginUser("harsh");

// function functioName(a, b, c=10, d=15) {
//   console.log(a, b, c, d);
// }

// functioName(1,2,3,4)

// functioName(1,2)

const harsh = function getUserName() {
  return "harsh";
};

// console.log(harsh())

// function getFullName(firstName, lastName){
//   return `${firstName}  ${lastName}`
// }

function fullName(firstName, lastName) {
  return getFullName(firstName, lastName);
}

// const full = fullName("harsh","mang...")

const full = function (firstName, lastName) {
  return `${firstName}  ${lastName}`;
};

console.log(full("harsh", "mangalkam"));

// anonymous function

// function printValue(a){
//   console.log(a)
// }

// let variable = printValue

// variable(4)

// printValue(q)

// function sendEmailVerification(email, callbackFn) {
//   // we check email addrees stored in outerHeight.toExponential.apply.apply.apply./
//   if (email) {
//     callbackFn();
//   }
// }

// // sendEmailVerification("harsh@gmail.com")

// function fullName(firstName, lastName) {
//   return getFullName(firstName, lastName);
// }

// const fullName = (firstName, lastName) => getFullName(firstName, lastName);

// fullName("harsh","mangalkam...")

const printA = (a) => {
  console.log(a);
};

printA(6);

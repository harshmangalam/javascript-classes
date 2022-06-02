// referance

// const user = {
//   id: 1,
//   name: "user name",
// };

// user.password = "12345";

// const admin = user;

// admin.isAdmin = true

// console.log("user is", user);
// console.log("admin is", admin);

// const admin = {};

// const moderator = {
//   email: "email@gnail.com",
// };

// user.isAdmin = false;

// Object.assign(admin, user,moderator);

// console.log("user::::", user);

// console.log("admin::::", admin);

// comparing two object

// const user = {
//   firstName: "harsh",
// };
// const admin = user;

// console.log(user == admin);
// console.log(user === admin);

// const user = {
//   password: "123456",
// };

// const admin = {
//   password: 123456,
// };

// console.log(user.password == admin.password);

// short hand property

// object destructure

const user = {
  userName: "user1",
  dob: new Date(),
};

const moderator = {
  email: "mod@gmail.com",
};

const admin = { ...user,...moderator };


console.log(admin)

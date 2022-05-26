const user = {
  firstName: "harsh",
  isAdmin: false,
};

const admin = {
  isAdmin: true,
  createdDate: new Date(),
};

// user.__proto__ = admin;

admin.__proto__ = user


// console.log(user);
// console.log(admin);


console.log(admin.createdDate)

console.log(admin.firstName)

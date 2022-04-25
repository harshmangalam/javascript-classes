"use strict";

// function getProfile(){
//     console.log(this)
// }

// arrow function

// const getProfile = () => {
//   console.log(this);
// };

// getProfile();

const author = {
  email: "harsh@gmail.com",
  password: "123444",
  noOfArticles: 10,

  getAuthorInfo() {
    console.log(this.email + "pubished" + this.noOfArticles);
  },
};

// author.noOfArticles = 10;

// author.getEmail = function () {
//   return this.email;
// };

// console.log(admin);
// console.log(admin.getEmail());

// console.log(author.noOfArticles )

// console.log(author.getNoOfArticles());

// author.getAuthorInfo()

const admin = {
  "912": true,
  "true": 767657,
  "if":444,
};



console.log(admin)
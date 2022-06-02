// constructor function

function Cart(productName, productPrice, productQuantity) {
  this.productName = productName;
  this.productPrice = productPrice;
  this.productQuantity = productQuantity;

  //   return {
  //     name: "Harsh",
  //   };
}

const cart1 = new Cart("Mobile 1", 1000, 2);

const cart2 = new Cart("Mobile 2", 1000, 4);

const cart3 = new Cart("Mobile 3", 1000, 1);

console.log(cart1, cart2, cart3);

// const newCart = new Cart();

// const newCart1 = {
//   productName: "Mobile device",
//   productPrice: 10000,
//   quantity: 2,
// };

// const newCart2 = {
//   productName: "Mobile device 2",
//   productPrice: 10000,
//   quantity: 4,
// };

// console.log(newCart);

// step 1
// Cart function will create "this" box
// this = {}

// step 2
// store all fields

// step 3

// return this

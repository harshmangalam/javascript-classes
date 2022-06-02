// switch

let x = 5;

if (x === 1) {
  console.log("x value is 1");
} else if (x === 2) {
  console.log("x value is 2");
} else if (x === 3) {
  console.log("x value is 3");
} else if (x === 4) {
  console.log("x value is 4");
} else {
  console.log("x value is something different...");
}

switch (x) {
  case 1:
    console.log("x value is 1");
    break;

  case 2:
    console.log("x value is 2");


    default:
        console.log("...")

}

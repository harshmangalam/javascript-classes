// if (4 < 2) {
//     console.log("4 is greather than 2")
// }else {
//     console.log("4 is smaller than 2")
// }

const mathMarks = 80;

const sstMarks = 90;

const scienceMarks = 85;

// if (mathMarks > sstMarks) {
//     alert("Your math marks is better than sst marks")
// }
// else if (mathMarks > scienceMarks) {
//     alert("math mark is better than science marks")
// }

// else {
//     alert("Your sst marks is better than math marks")
// }

let result =
  mathMarks > sstMarks
    ? console.log("Your math marks is better than sst marks")
    : mathMarks > scienceMarks
    ? console.log("math mark is better than science marks")
    : console.log("Your sst marks is better than math marks");

console.log(result)

// let result = mathMarks > sstMarks ? console.log("Math marks is better") : console.log("sst marks is better")

// condition ? truthy will run : falsy will run

// console.log(result)

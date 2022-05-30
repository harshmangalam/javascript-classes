// // Synchronous Programming

// function log1(){
//     console.log("Log 1")
// }

// console.log("Log 2")

// function log3(){
//     console.log(3)
// }

// log1()
// log3()

// // Asynchronous Programming

// // Restaurant

// 1 st 20 min
// 2 nd 30

// 3rd 40

// 4th 10

// 100min

// 1st user  -> 20

// 2nd user  -> 20

// 3
// 4

// let initial = 0;

// function operation1(number, callback) {
//   console.log("operation 1 started...");
//   return callback(number + 1);
// }

// function operation2(number, callback) {
//   console.log("operation 2 started...");
//   return callback(number + 1);
// }

// const op1Result = operation1(initial, (op1Result) => {
//   operation2(op1Result, (op2Result) => {
//     operation3(op2Result,(op3R)=>{
//         operation3(op2Result,(op3R)=>{

//            })operation3(op2Result,(op3R)=>{

//                 })operation3(op2Result,(op3R)=>{

//                          })operation3(op2Result,(op3R)=>{

//                                   })operation3(op2Result,(op3R)=>{

//                                                })operation3(op2Result,(op3R)=>{

//         })
//     })
//   });
// });

// console.log(op1Result);
// console.log(op2Result);

// setTimeout(() => {
//   console.log("3s is completed...!!!");
// }, 3000);

function returnValue(seconds) {
  return new Promise((sucess, reject) => {
    setTimeout(() => {
      //   sucess(`${seconds} milliseconds is completed...!!!`);
      reject("I reject this promise");
    }, seconds);
  });
}

returnValue(4000)
  .then((msg) => console.log(msg))
  .catch((msg) => console.log(msg));

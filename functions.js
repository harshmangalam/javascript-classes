// function declration

// function call

// fetchUserData("rohan");

// fetchUserData("ramesh");

function fetchUserData(name) {
  console.log(`user name is ${name}`);
}

function addNumbers(a, b, c) {

  if (!a || !b || !c) {
    console.log("You have not provided 3 parameter");
    return
  }
  console.log(a + b + c);
}

// addNumbers(3, 5, 6);

// addNumbers(12, 132,56);




function storeAndReturn(value1,value2){
    const v1 = value1
    const v2 = value2


    console.log(v1,v2)
}



// storeAndReturn(1,2)





let userName = 'John';

function showMessage() {
  let message = `Hello ${userName}`
  alert(message);
}

showMessage();


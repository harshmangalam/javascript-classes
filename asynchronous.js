// JSON;

// const user = {
//   name: "harsh",
//   age: 19,
//   isVerified: true,
// };

// const jsonUser = JSON.stringify(user)

// console.log(user)

// console.log(jsonUser)

// const json = `{"name":"harsh","age":19,"isVerified":true,"email":"harsh@gmail.com"}`

// const user = JSON.parse(json)

// console.log(user)

async function fetchServerData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
  } catch (err) {
    console.log(err);
  }
}

fetchServerData("https://api.github.com/users/harshmangalam");


// javascript complete 